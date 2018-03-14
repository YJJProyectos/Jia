import { Injectable } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import *as firebase from 'firebase';
import { FileItem } from '../models/file-item';
import { DatosService } from './datos.service';


@Injectable()
export class CargaArchivosService {

  private CARPETA_IMAGENES = 'img';
  private CARPETA_SONIDOS = 'sound';
  public imagenes : FileItem[] = [];
  public sonidos : FileItem[] = [];

  constructor(
    // private db: AngularFirestore,
    private _datosService: DatosService
  ) { }

  cargarImagenesFirebase() {
    // console.log(imagenes);
    const storageRef = firebase.storage().ref();
    for (const item of this.imagenes) {

      item.estaSubiendo = true;
      if ( item.progreso >= 100 ) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = 
            storageRef.child(`${this._datosService._logeoService.usuario.uid}/${ this.CARPETA_IMAGENES}/${ item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: any ) => {
          item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(item.progreso);
          }, 
        (error) => console.error("error al subir",error),
        () => {
          console.log("imagen cargada correctamente");
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          // this.guardarImagen({
          //   nombre: item.nombreArchivo,
          //   url: item.url
          // });
          this._datosService.subirImagen({
              nombre: item.nombreArchivo,
              url: item.url,
              tipo: item.tipoArchivo
          }).subscribe() ;
        }); 

    }
  }


  cargarSonidoFirebase() {
    // console.log(imagenes);
    const storageRef = firebase.storage().ref();
    for (const item of this.sonidos) {

      item.estaSubiendo = true;
      if ( item.progreso >= 100 ) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = 
            storageRef.child(`${this._datosService._logeoService.usuario.uid}/${ this.CARPETA_SONIDOS}/${ item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: any ) => {
          item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(item.progreso);
          }, 
        (error) => console.error("error al subir",error),
        () => {
          console.log("imagen cargada correctamente");
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          // this.guardarImagen({
          //   nombre: item.nombreArchivo,
          //   url: item.url
          // });
          this._datosService.subirSonido({
            nombre: item.nombreArchivo,
            url: item.url,
            tipo: item.tipoArchivo
          }).subscribe();
        }); 

    }
  }

  subirArchivos() {
    this.cargarImagenesFirebase();
    this.cargarSonidoFirebase();
  }

  borrarSonido( nombre: string, tipo: string ) {

    // Create a reference to the file to delete
    const storageRef = firebase.storage().ref();
    let urlNombre = `${this._datosService._logeoService.usuario.uid}/${ this.CARPETA_SONIDOS}/${ nombre }`;
    console.log("Ruta de archivo de sondio a borrar ", urlNombre);
    
    var desertRef = storageRef.child(urlNombre);
    
    // Delete the file
    desertRef.delete().then(function() {
      console.log("Borrado exitoso de archivo de sonido");
      
    }).catch(function(error) {
      console.error("No se pudo borrar el archivo de sonido");
      
    });    

  }


  agregarImagen( imagen : File ) {
    let imagenACargar = new FileItem(imagen);
    this.imagenes.push(imagenACargar);
  }

  agregarSonido ( sonido: File ) {
    let sonidoACargar = new FileItem(sonido);
    this.sonidos.push(sonidoACargar);
  }

  limpiar() {
    this.imagenes = [];
    this.sonidos = [];
  }



}
