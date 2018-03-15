import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InfoComponent } from './components/info/info.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { DatosLogeadoComponent } from './components/datos-logeado/datos-logeado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'info/:heroe', component: InfoComponent },
  { path: 'busqueda/:texto', component: BusquedaComponent },
  { path: 'datos', component: DatosLogeadoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
