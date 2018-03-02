import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe = {
    nombre:"",
    bio: "",
    casa: "Marvel"
  }
  
  private guardaDatos: boolean = false;
  nuevo: boolean = false;
  id:string;

  constructor(
    private _heroesService : HeroesService,
    private router: Router,
    private route : ActivatedRoute
  ) { 
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.id = parametros['id'];
      if ( this.id !== "nuevo") {
        //cargo los datos
        this._heroesService.getHeroe( this.id ).subscribe( heroe => this.heroe = heroe);
      }
    })
    console.log(this.heroe);
    
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    console.log('Guardar');
    
    if ( this.guardaDatos ) {
      if ( this.id == "nuevo"){
        //insertando
        this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data =>{
          this.router.navigate(['/heroe',data.name]);
        }, 
        error => console.error(error)
        );
      } else {
        //actualizando
        this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data =>{
          console.log(data);
          
        }, 
        error => console.error(error)
        );
      }
      setTimeout( () => {this.router.navigate(['/heroes']);}, 800);
      
    }
  }

  agregarNuevo( forma: NgForm ){
    this.router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    });
  }

  subirDatos() {
    this.guardaDatos = false;
    $('#guardarModal').modal('show');
  }

  guarda() {
    console.log('Acepta Model');
    
    this.guardaDatos = true;
    this.guardar();
  }
  
  cancela() {
    this.guardaDatos = false;
  }
}
