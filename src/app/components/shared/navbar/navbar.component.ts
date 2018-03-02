import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  aBuscar: string = "";

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  irABusqueda(buscar: string){
    this.router.navigate(['/busqueda',buscar]);
  }

}
