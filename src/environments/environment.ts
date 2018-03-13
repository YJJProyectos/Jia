// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAVEMm7w61ZQCmH3lDAlsCKTdqcTTDuQPE",
    authDomain: "heroesapp-cb895.firebaseapp.com",
    databaseURL: "https://heroesapp-cb895.firebaseio.com",
    projectId: "heroesapp-cb895",
    storageBucket: "heroesapp-cb895.appspot.com",
    messagingSenderId: "1078812634061"
  }
};
