import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogeoService } from '../../../services/logeo.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  aBuscar: string = "";

  constructor(
    private router:Router,
    public _logeoService: LogeoService
  ) { }

  ngOnInit() {
  }

  irABusqueda(buscar: string){
    this.router.navigate(['/busqueda',buscar]);
  }

}
