import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  texto: string;

  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) { 
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.texto = parametros['texto'];
      
    });
  }

  ngOnInit() {
  }

}
