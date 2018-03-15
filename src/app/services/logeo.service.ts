import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class LogeoService {

  public usuario: any = {
    
  };
  public logeado : boolean = false; 

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe( user => {
        
        console.log("Estado del usuario", user);
        if ( !user){
          return;
        }
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        this.logeado = true;
      })
    }

    login() {
      // if ( proveedor === "google"){  
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then( (success) => {
            console.log("Logeo Exitoso");
            this.logeado = true;
          }).catch( 
            (error) => {
              console.log("Logeo No exitoso");
              this.logeado = false;
            }
          );
      // } else 
      // {    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      // }
    }
    logout() {
      // console.log("Estado de auth ",this.afAuth.authState.subscribe(algo => algo));

      this.usuario = {};
      this.afAuth.auth.signOut().then( (success) => {
        this.logeado = false;
        console.log("Se deslogeo"); 
      } ).catch( (error) => {
        console.log("No se pudo deslogear");
        
      } );
      // console.log("Estado de auth ",this.afAuth.authState.subscribe(algo => algo));

    }

}
