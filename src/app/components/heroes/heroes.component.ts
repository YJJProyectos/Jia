import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(
    private http: Http,
    private _heroesService: HeroesService
  ) { 
    this._heroesService.getHeroes()
                .subscribe(heroes => {
                  console.log(heroes);
                  
                  this.heroes = heroes
                  this.loading = false;
                });
  }

  ngOnInit() {
  }

  borrarHeroe( key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe( respuesta => {
      // console.log(respuesta);
      if (respuesta) {
        console.error(respuesta);
        
      } else {
        // si se borra
        delete this.heroes[key$];
      }
    });
  }

  verBio( dato) {
    console.log(dato);
    
  }

}
