import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Datos } from '../../interfaces/datos.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { LogeoService } from '../../services/logeo.service';
import { CargaArchivosService } from '../../services/carga-archivos.service';
import { FileItem } from '../../models/file-item';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  nombre : string;
  dato: string = "";
  archivosCargados = false;
  subiendo = false;
  // persona: Datos;
  imagenes = null;
  sonidos = null;
  archivosSonidosASubir : FileItem[] = [];
  archivosImagenesASubir: FileItem[] = [];
  archivosTotalesASubir: FileItem[] = [];

  constructor(
    public _datosService : DatosService,
    public _logeoService : LogeoService,
    public _cargaArchivosService : CargaArchivosService
  ) {
    console.log("Sonidos ", this.sonidos);
    
    // this.getImagenesYSonidos(); 
  }

  ngOnInit() {
  }

  // login() {

  //   let nuevaPersona: Datos = {
  //     id: 1,
  //     nombre: this.nombre,
  //     apellido: "sapo",

  //   }
  //   console.log(this.nombre);
  //   this._datosService.cargarDatos(nuevaPersona).subscribe();
  // }

  getImagenesYSonidos() {
  if ( this._logeoService.usuario.nombre ){ 
    this._datosService.getImagenes()
      .subscribe( imagenes => {
        if ( imagenes ) {

          this.imagenes = imagenes;
          console.log("Imagenes cargadas ", imagenes);
      }
        
      });
    this._datosService.getSonidos()
        .subscribe( sonidos => {

          if ( sonidos ) {
            this.sonidos = sonidos;
            console.log("Sonidos cargados ", sonidos);
            
          }
        })
    }
  }

  publicarDato() {
    if ( this.dato !== "" || this.dato == undefined){
      let nuevaPersona: Datos = {
        id: 1,
        nombre: this._logeoService.usuario.nombre,
        dato: this.dato,
        direccion: this._logeoService.usuario.email
  
      }
      console.log("Dato a guardar ",this.dato);
      this._datosService.cargarDatos(nuevaPersona, this._logeoService.usuario.uid).subscribe();
      this.dato = "";
    }
  }

  verDatos(event) {
    // let file: File;
    let fileList: FileList = event.target.files;
    this.archivosCargados = false;
    if(fileList.length > 0) {

      for (let i = 0; i < fileList.length; i++){
        let file = fileList[i];
        console.log("Elijio ", file.name );
        console.log("Tipo archivo ", file.type);
        if ( file.type.startsWith('image')) {

          // this._cargaArchivosService.agregarImagen(file);
          this.archivosImagenesASubir.push( new FileItem(file) );
          console.log("Agrego imagen ", file.name);

        } else if ( file.type.startsWith('audio') ) {

          // this._cargaArchivosService.agregarSonido(file);
          this.archivosSonidosASubir.push( new FileItem(file) );
          console.log("Agrego sonido ", file.name);

        }
      }
      //cuando termina de cargar todo
      this.archivosTotalesASubir = this.archivosImagenesASubir.concat(this.archivosSonidosASubir);
      this.archivosCargados = true;
      this.subiendo = false;
    }
      
    return 
  }

  subirArchivos() {
    this.subiendo = true;
    this._cargaArchivosService.subirArchivos(this.archivosImagenesASubir, this.archivosSonidosASubir );
  }

  borrarSonido( nombre : string, tipoArchivo :string, key$ ) {
    console.log("Tipo ", tipoArchivo);
    this._cargaArchivosService.borrarSonido(nombre, tipoArchivo);
    console.log("Borrar del arreglo de sonidos ", this.sonidos[key$]);
    
    this._datosService.borrarSonido(key$).subscribe( respuesta => {
      // console.log(respuesta);
      if (respuesta) {
        console.error(respuesta);
        
      } else {
        // si se borra
        delete this.sonidos[key$];
        console.log("Cantidad de sonidos restante ", );
        
      }
    });
    return
  }

  limpiarArchivos() {
    this.archivosTotalesASubir = [];
    this.archivosImagenesASubir = [];
    this.archivosSonidosASubir = [];
    this.archivosCargados = false;
  }


  login() {
    this._logeoService.login();
  }
  logout() {
    this._logeoService.logout();
  }

}
