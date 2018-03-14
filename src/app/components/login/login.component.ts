import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Datos } from '../../interfaces/datos.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { LogeoService } from '../../services/logeo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  nombre : string;
  dato: string = "";
  // persona: Datos;

  constructor(
    public _datosService : DatosService,
    public _logeoService : LogeoService
  ) { 
    console.log("Constructor login");
    
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
    if(fileList.length > 0) {

      for (let i = 0; i < fileList.length; i++){
        let file = fileList[i];
        console.log("Elijio ", file.name );
        console.log("Tipo archivo ", file.type);
        
      }
    }
      
    return 
  }

  login() {
    this._logeoService.login();
  }
  logout() {
    this._logeoService.logout();
  }

}
