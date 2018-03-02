import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Datos } from '../../interfaces/datos.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  nombre : string;
  persona: Datos;
  constructor(
    public _datosService : DatosService
  ) { }

  ngOnInit() {
  }

  login() {

    let nuevaPersona: Datos = {
      id: 1,
      nombre: this.nombre,
      apellido: "sapo",

    }
    console.log(this.nombre);
    this._datosService.cargarDatos(nuevaPersona).subscribe();
  }

}
