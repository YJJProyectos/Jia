import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from "@angular/forms";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})

export class InfoComponent implements OnInit {

  public heroe: Heroe = {
    nombre:"",
    bio: "",
    casa: "Marvel"
  }
  id: string;

  constructor(
    private _heroesService : HeroesService,
    private router: Router,
    private route : ActivatedRoute
  ) { 
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.id = parametros['heroe'];
        //cargo los datos
      this._heroesService.getHeroe( this.id ).subscribe( heroe => this.heroe = heroe);
    })
    console.log(this.heroe);
    
  }

  ngOnInit() { }

  volver() {
    this.router.navigate(['/heroes']);
  }
}