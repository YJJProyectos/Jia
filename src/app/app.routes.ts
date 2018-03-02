import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
