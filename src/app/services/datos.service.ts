import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Datos } from '../interfaces/datos.interface';
import { LogeoService } from './logeo.service';

@Injectable()
export class DatosService {

  datosURL: string = "https://heroesapp-cb895.firebaseio.com/";
  uid: string;

  constructor(
    private http: Http,
    public _logeoService : LogeoService
  ) { }

  cargarDatos( persona: Datos, uid : string ){
    let body = JSON.stringify(persona);
    let headers = new Headers( {
      'Content-Type' :'application/json'
    });
    return this.http.post( this.datosURL + uid + "/datos" +".json"
          , body, { headers } )
          .map( res => {
      console.log("Res", res);
      
      console.log("Res.json", res.json());
      return res.json();
    })
  }

  subirImagen(imagen) {

    let body = JSON.stringify(imagen);
    let headers = new Headers( {
      'Content-Type' :'application/json'
    });
    return this.http.post( this.datosURL + this._logeoService.usuario.uid + "/img" +".json"
          , body, { headers } )
          .map( res => {
      console.log("Res", res);
      
      console.log("Res.json", res.json());
      return res.json();
    })   
  }

  subirSonido(sonido) {

    let body = JSON.stringify(sonido);
    let headers = new Headers( {
      'Content-Type' :'application/json'
    });
    return this.http.post( this.datosURL + this._logeoService.usuario.uid + "/sound" +".json"
          , body, { headers } )
          .map( res => {
      console.log("Res", res);
      
      console.log("Res.json", res.json());
      return res.json();
    })   
  }

  getDatos( uid : string) {
    this.uid = uid;
    return this.http.get(this.datosURL + uid + "/datos" +'.json')
          .map( res => res.json() );
  }

  getImagenes() {
    let uid = this._logeoService.usuario.uid
    return this.http.get(this.datosURL + uid + "/img" +'.json')
          .map( res => res.json() );
  }

  getSonidos() {
    let uid = this._logeoService.usuario.uid
    return this.http.get(this.datosURL + uid + "/sound" +'.json')
          .map( res => res.json() );
  }

  borrarDato( key$ : string) {
    let url = `${ this.datosURL}${ this.uid }/datos/${ key$ }.json`;
    console.log("La URL es : ", url);
    
    return this.http.delete(url)
          .map( res => res.json());    
  } 

}
