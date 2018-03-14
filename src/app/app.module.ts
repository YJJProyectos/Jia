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
import { InfoComponent } from './components/info/info.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DatosService } from './services/datos.service';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LogeoService } from './services/logeo.service';
import { DatosLogeadoComponent } from './components/datos-logeado/datos-logeado.component';
import { CargaArchivosService } from './services/carga-archivos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    HeroeComponent,
    HeroesComponent,
    InfoComponent,
    KeysPipe,
    BusquedaComponent,
    LoginComponent,
    DatosLogeadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    HeroesService,
    DatosService,
    LogeoService,
    CargaArchivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
