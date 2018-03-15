import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogeoService } from '../../../services/logeo.service';

declare var $;

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
    // $(document).ready(function(){  
      $('.navbar-nav>li>a').on('click', () => {
        $('.navbar-collapse').collapse('hide');
      });
    // }); 

    $('.navbar-brand').on('click', () => {
      $('.navbar-collapse').collapse('hide');
    });
  }

  irABusqueda(buscar: string){
    this.router.navigate(['/busqueda',buscar]);
    $('.navbar-collapse').collapse('hide');
  }


}
