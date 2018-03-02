import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app.routes';
import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    HeroeComponent,
    HeroesComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
