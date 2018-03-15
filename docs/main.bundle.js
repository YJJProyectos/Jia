webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_heroes_heroe_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_heroes_heroes_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_heroes_service__ = __webpack_require__("../../../../../src/app/services/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_info_info_component__ = __webpack_require__("../../../../../src/app/components/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_busqueda_busqueda_component__ = __webpack_require__("../../../../../src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_datos_service__ = __webpack_require__("../../../../../src/app/services/datos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_logeo_service__ = __webpack_require__("../../../../../src/app/services/logeo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_datos_logeado_datos_logeado_component__ = __webpack_require__("../../../../../src/app/components/datos-logeado/datos-logeado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_carga_archivos_service__ = __webpack_require__("../../../../../src/app/services/carga-archivos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_heroes_heroe_component__["a" /* HeroeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_busqueda_busqueda_component__["a" /* BusquedaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_datos_logeado_datos_logeado_component__["a" /* DatosLogeadoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__["a" /* AngularFireStorageModule */] // imports firebase/storage only needed for storage features
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_heroes_service__["a" /* HeroesService */],
                __WEBPACK_IMPORTED_MODULE_15__services_datos_service__["a" /* DatosService */],
                __WEBPACK_IMPORTED_MODULE_22__services_logeo_service__["a" /* LogeoService */],
                __WEBPACK_IMPORTED_MODULE_24__services_carga_archivos_service__["a" /* CargaArchivosService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_heroes_heroe_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_heroes_heroes_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_info_info_component__ = __webpack_require__("../../../../../src/app/components/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_busqueda_busqueda_component__ = __webpack_require__("../../../../../src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_datos_logeado_datos_logeado_component__ = __webpack_require__("../../../../../src/app/components/datos-logeado/datos-logeado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_5__components_heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'heroe/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_heroes_heroe_component__["a" /* HeroeComponent */] },
    { path: 'info/:heroe', component: __WEBPACK_IMPORTED_MODULE_6__components_info_info_component__["a" /* InfoComponent */] },
    { path: 'busqueda/:texto', component: __WEBPACK_IMPORTED_MODULE_7__components_busqueda_busqueda_component__["a" /* BusquedaComponent */] },
    { path: 'datos', component: __WEBPACK_IMPORTED_MODULE_9__components_datos_logeado_datos_logeado_component__["a" /* DatosLogeadoComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/busqueda/busqueda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 align=\"center\">Busqueda: {{ texto }}</h1>\n    <hr>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/busqueda/busqueda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusquedaComponent = /** @class */ (function () {
    function BusquedaComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (parametros) {
            console.log(parametros);
            _this.texto = parametros['texto'];
        });
    }
    BusquedaComponent.prototype.ngOnInit = function () {
    };
    BusquedaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-busqueda',
            template: __webpack_require__("../../../../../src/app/components/busqueda/busqueda.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BusquedaComponent);
    return BusquedaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/datos-logeado/datos-logeado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <div align=\"right\" >\n    \n    <button type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/login']\" >Volver</button>\n    \n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead class=\"thead-inverse\">\n                      <tr>\n                          <th>Id</th>\n                          <th>Nombre</th>\n                          <th>Datos</th>\n                          <th class=\"text-right text-center\">Opciones</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let k of datos | keys;let i = index; let dato of datos\">\n                          <td>{{i + 1}}</td>\n                          <td>{{datos[k].nombre}}</td>\n                          <td>{{datos[k].dato}}</td>\n                          <td class=\"text-right text-center\">\n                              <button type=\"button\" class=\"btn btn-outline-success\" >\n                Editar\n                </button>\n                              <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"borrarDato(k)\">\n                  Borrar\n                </button>\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n\n              <div *ngIf=\"(datos | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                  <strong>No hay</strong> registros que mostrar\n              </div>\n\n              <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                  <strong>Cargando</strong> espere\n              </div>\n\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/datos-logeado/datos-logeado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosLogeadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logeo_service__ = __webpack_require__("../../../../../src/app/services/logeo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datos_service__ = __webpack_require__("../../../../../src/app/services/datos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosLogeadoComponent = /** @class */ (function () {
    function DatosLogeadoComponent(_logeoService, _datosService, router, route) {
        var _this = this;
        this._logeoService = _logeoService;
        this._datosService = _datosService;
        this.router = router;
        this.route = route;
        this.loading = true;
        this._datosService.getDatos(this._logeoService.usuario.uid)
            .subscribe(function (datos) {
            console.log("Datos: ", datos);
            _this.datos = datos;
            _this.loading = false;
        });
    }
    DatosLogeadoComponent.prototype.ngOnInit = function () {
    };
    DatosLogeadoComponent.prototype.borrarDato = function (key$) {
        var _this = this;
        this._datosService.borrarDato(key$).subscribe(function (respuesta) {
            // console.log(respuesta);
            if (respuesta) {
                console.error(respuesta);
            }
            else {
                // si se borra
                console.log("Datos: ", _this.datos);
                console.log("Borrar dato: ", _this.datos[key$]);
                delete _this.datos[key$];
            }
        });
    };
    DatosLogeadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datos-logeado',
            template: __webpack_require__("../../../../../src/app/components/datos-logeado/datos-logeado.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_logeo_service__["a" /* LogeoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datos_service__["a" /* DatosService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DatosLogeadoComponent);
    return DatosLogeadoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes/heroe.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Heroe <small>{{heroe.nombre}}</small></h3>\r\n<button [routerLink]=\"['/heroes']\" class=\"btn btn-outline-danger\">\r\n  Regresar\r\n</button>\r\n\r\n\r\n<button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"agregarNuevo(forma)\">\r\n  Limpiar campos para crear nuevo heroe</button>\r\n\r\n\r\n<hr>\r\n\r\n<div class=\"row animated fadeIn fast\">\r\n    <div class=\"col-md-12\">\r\n\r\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del heroe\" required name=\"nombre\" [(ngModel)]=\"heroe.nombre\" minlength=\"3\" maxlength=\"25\" pattern=\"[a-zA-Z0-9ñ ]+\">\r\n                <!-- <div class=\"form-control-feedback\" *ngIf=\"nombre.errors?.required\">\r\n                    Este campo es requerido.\r\n                </div>\r\n                <div class=\"form-control-feedback\" *ngIf=\"nombre.errors?.minlength \">\r\n                    Por lo menos {{ nombre.errors.minlength.requiredLength }} caracteres.\r\n                </div> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Casa</label>\r\n                <select name=\"casa\" class=\"form-control\" [(ngModel)]=\"heroe.casa\">\r\n          <option value=\"Marvel\">Marvel</option>\r\n          <option value=\"DC\">DC</option>\r\n        </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Bio</label>\r\n                <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"heroe.bio\" name=\"bio\">\r\n      </textarea>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group\">\r\n                <button type=\"submit\" (click)=\"subirDatos()\" class=\"btn btn-outline-primary\" [disabled]=\"!forma.valid\">\r\n              Guardar Cambios</button>\r\n            </div> -->\r\n            <button type=\"text\" (click)=\"subirDatos()\" class=\"btn btn-outline-primary\" [disabled]=\"!forma.valid\">\r\n            Guardar Cambios</button>\r\n\r\n\r\n        </form>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Button trigger modal -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade negro\" id=\"guardarModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"guardarModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"guardarModalLabel\">Atencion</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Seguro que quiere guardar los datos\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"cancela()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\r\n                <button type=\"button\" (click)=\"guarda()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Datos</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/heroes/heroe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_heroes_service__ = __webpack_require__("../../../../../src/app/services/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(_heroesService, router, route) {
        var _this = this;
        this._heroesService = _heroesService;
        this.router = router;
        this.route = route;
        this.heroe = {
            nombre: "",
            bio: "",
            casa: "Marvel"
        };
        this.guardaDatos = false;
        this.nuevo = false;
        this.route.params.subscribe(function (parametros) {
            console.log(parametros);
            _this.id = parametros['id'];
            if (_this.id !== "nuevo") {
                //cargo los datos
                _this._heroesService.getHeroe(_this.id).subscribe(function (heroe) { return _this.heroe = heroe; });
            }
        });
        console.log(this.heroe);
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.heroe);
        console.log('Guardar');
        if (this.guardaDatos) {
            if (this.id == "nuevo") {
                //insertando
                this._heroesService.nuevoHeroe(this.heroe)
                    .subscribe(function (data) {
                    _this.router.navigate(['/heroe', data.name]);
                }, function (error) { return console.error(error); });
            }
            else {
                //actualizando
                this._heroesService.actualizarHeroe(this.heroe, this.id)
                    .subscribe(function (data) {
                    console.log(data);
                }, function (error) { return console.error(error); });
            }
            setTimeout(function () { _this.router.navigate(['/heroes']); }, 800);
        }
    };
    HeroeComponent.prototype.agregarNuevo = function (forma) {
        this.router.navigate(['/heroe', 'nuevo']);
        forma.reset({
            casa: "Marvel"
        });
    };
    HeroeComponent.prototype.subirDatos = function () {
        this.guardaDatos = false;
        $('#guardarModal').modal('show');
    };
    HeroeComponent.prototype.guarda = function () {
        console.log('Acepta Model');
        this.guardaDatos = true;
        this.guardar();
    };
    HeroeComponent.prototype.cancela = function () {
        this.guardaDatos = false;
    };
    HeroeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroe',
            template: __webpack_require__("../../../../../src/app/components/heroes/heroe.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Heroes</h1>\r\n<hr>\r\n\r\n<div class=\"row animated fadeIn fast\">\r\n    <div class=\"col-md-12 text-center\">\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/heroe','nuevo']\">\r\n           Nuevo heroe\r\n    </button>\r\n\r\n    </div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead class=\"thead-inverse\">\r\n                    <tr>\r\n                        <th>Id</th>\r\n                        <th>Nombre</th>\r\n                        <th>Casa</th>\r\n                        <th class=\"text-right text-center\">Opciones</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let k of heroes | keys;let i = index; let heroe of heroes\">\r\n                        <td>{{i + 1}}</td>\r\n                        <!-- <td>{{heroes[heroe].nombre}}</td>\r\n            <td>{{heroes[heroe].casa}}</td>  -->\r\n                        <td>{{heroes[k].nombre}}</td>\r\n                        <td>{{heroes[k].casa}}</td>\r\n                        <td class=\"text-right text-center\">\r\n                            <button type=\"button\" class=\"btn btn-outline-success\" [routerLink]=\"['/heroe',k]\">\r\n              Editar\r\n              </button>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"borrarHeroe(k)\">\r\n                Borrar\r\n              </button>\r\n                            <button type=\"button\" class=\"btn btn-outline-info\" [routerLink]=\"['/info',k]\" (click)=\"verBio(k)\">\r\n                Info\r\n              </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div *ngIf=\"(heroes | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\r\n                <strong>No hay</strong> registros que mostrar\r\n            </div>\r\n\r\n            <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\r\n                <strong>Cargando</strong> espere\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__ = __webpack_require__("../../../../../src/app/services/heroes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(http, _heroesService) {
        var _this = this;
        this.http = http;
        this._heroesService = _heroesService;
        this.heroes = [];
        this.loading = true;
        this._heroesService.getHeroes()
            .subscribe(function (heroes) {
            console.log(heroes);
            _this.heroes = heroes;
            _this.loading = false;
        });
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.borrarHeroe = function (key$) {
        var _this = this;
        this._heroesService.borrarHeroe(key$).subscribe(function (respuesta) {
            // console.log(respuesta);
            if (respuesta) {
                console.error(respuesta);
            }
            else {
                // si se borra
                delete _this.heroes[key$];
            }
        });
    };
    HeroesComponent.prototype.verBio = function (dato) {
        console.log(dato);
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/components/heroes/heroes.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__["a" /* HeroesService */]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide-1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide-2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide-3.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"container top30\">\n  <div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/album.png\" alt=\"\">\n      <hr>\n      bla\n    </div>\n\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/artist.png\" alt=\"\">\n      <hr>\n      bla\n    </div>\n\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/music.png\" alt=\"\">\n      <hr>\n      bla\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <!-- {{heroe.nombre}} -->\r\n            <div align=\"center\">\r\n                <h1>Nombre </h1>\r\n                <p>{{heroe.nombre}}</p>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n            <div align=\"center\">\r\n                <h1>Casa</h1>\r\n                <p>{{heroe.casa}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-7\">\r\n            <div align=\"center\">\r\n                <h1>Bio </h1>\r\n                <p>{{heroe.bio}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div align=\"center\">\r\n        <button type=\"button\" (click)=\"volver()\" class=\"btn btn-danger\">Volver atras</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__ = __webpack_require__("../../../../../src/app/services/heroes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NgForm } from "@angular/forms";

var InfoComponent = /** @class */ (function () {
    function InfoComponent(_heroesService, router, route) {
        var _this = this;
        this._heroesService = _heroesService;
        this.router = router;
        this.route = route;
        this.heroe = {
            nombre: "",
            bio: "",
            casa: "Marvel"
        };
        this.route.params.subscribe(function (parametros) {
            console.log(parametros);
            _this.id = parametros['heroe'];
            //cargo los datos
            _this._heroesService.getHeroe(_this.id).subscribe(function (heroe) { return _this.heroe = heroe; });
        });
        console.log(this.heroe);
    }
    InfoComponent.prototype.ngOnInit = function () { };
    InfoComponent.prototype.volver = function () {
        this.router.navigate(['/heroes']);
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/components/info/info.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\" style=\"width: 100%\">\n    \n  <div align=\"center\">\n    <h1>Login</h1>\n    <h3>Subida de imagenes y audios</h3>\n    <hr>\n    <button *ngIf=\"!_logeoService.usuario.nombre\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"login()\">Ingresar</button>\n    <button *ngIf=\"_logeoService.usuario.nombre\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"logout()\">Cerrar Sesion</button>\n  </div>\n  \n</div>\n\n<div class=\"container main-container\" *ngIf=\"_logeoService.usuario.nombre\">\n\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"dato\" name=\"dato\" placeholder=\"Dato a guardar\"\n        (keyup.enter)=\"publicarDato()\">\n    <div align=\"center\">\n            <button  type=\"button\" class=\"btn btn-outline-warning\" [routerLink]=\"['/datos']\" >Ver Datos Guardados </button>\n            <button  type=\"button\" class=\"btn btn-outline-success\" (click)=\"publicarDato()\">Publicar datos</button>\n    </div>\n\n    <div class=\"row main-container\">\n        <div class=\"col-md-6\" >\n\n            <p align=\"center\">Logeado con nombre {{_logeoService.usuario.nombre}} </p>\n\n\n        </div>\n\n        <div class=\"col-md-6\">\n\n            <p align=\"center\">Logeado con UID {{_logeoService.usuario.uid}} </p>\n\n\n        </div>\n    </div>\n    <div align=\"center\" style=\"margin-bottom: 10px\" >\n        <h1 style=\"margin-bottom: 10px\">Cargar archivos</h1>\n        <hr>\n        <input type=\"file\" (change)=\"verDatos($event)\" placeholder=\"Upload file\" multiple \n               accept=\".pdf,.doc,.docx,.wav,.mp3,.jpg,.png\">\n        <button class=\"btn btn-outline-primary\" [disabled]=\"subiendo\" *ngIf=\"archivosCargados\"  data-toggle=\"modal\" data-target=\"#subirDatosModal\" >Subir datos a la nube</button>\n\n        <button class=\"btn btn-outline-danger\" (click)=\"limpiarArchivos()\" >Limpiar</button>\n\n    </div>\n\n    <div align=\"center\" style=\"margin-bottom: 10px\" >\n        <button class=\"btn btn-outline-success\" (click)=\"getSonidos()\" >Obtener audio subidos</button>\n        <button class=\"btn btn-outline-success\" (click)=\"getImagenes()\" >Obtener imagenes subidas</button>\n        <button class=\"btn btn-outline-danger\" *ngIf=\"datosSonidos\" (click)=\"toggleDatosSonidos()\" >Ocultar/Mostrar audios subidos</button>\n        <button class=\"btn btn-outline-danger\" *ngIf=\"datosImagenes\" (click)=\"toggleDatosImagenes()\" >Ocultar/Mostrar imagenes subidas</button>\n    </div>\n\n    <table class=\"table\" *ngIf=\"archivosTotalesASubir.length > 0\" >\n            <thead class=\"thead=dark\">\n                <tr>\n                    <th>Nombre Archivo</th>\n                    <th>Tamaño</th>\n                    <th>Progreso</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let archivo of archivosTotalesASubir\">\n                    <td>{{archivo.nombreArchivo}}</td>\n                    <td>{{archivo.archivo.size /1024 / 1024 | number: '.2-2'}} MB</td>\n                    <td>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar bg-danger\" [ngClass]=\"\n                            {'bg-danger': archivo.progreso <= 30,\n                             'bg-warning' : archivo.progreso > 30 && archivo.progreso <= 50,\n                             'bg-info' : archivo.progreso >50 && archivo.progreso <=75,\n                             'bg-success': archivo.progreso == 100 }\" role=\"progressbar\" [ngStyle]=\"{ width: archivo.progreso + '%' }\"></div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n\n    <div *ngIf=\"sonidos !== null \" style=\"width: 95%\">\n        <h5 align=\"center\" >Audios</h5>\n        <table class=\"table table-dark\">\n            <thead>\n            <tr>\n                <th style=\"width: 5% \">#</th>\n                <th style=\"width: 30% \">Nombre</th>\n                <th style=\"width: 45% \">Escuchar</th>\n                <th style=\"width: 10% \">Opciones</th>\n            </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let k of sonidos | keys;let i = index;\">\n                <td>{{ i + 1 }}</td>\n                <td> {{ sonidos[k].nombre }} </td>\n                <td>\n\n                    <audio controls style=\"width: 100%\">\n                    <source [src]=\"sonidos[k].url\">\n                    Tu navegador es muy viejo\n                    </audio>\n                </td>\n                <td>\n                    <button class=\"btn btn-outline-danger\" \n                    (click)=\"borrarSonido(sonidos[k].nombre, sonidos[k].tipo, k)\" >Borrar</button>\n                </td>\n                </tr>\n            </tbody>\n\n            </table>\n    </div>   \n\n\n    <div class=\"row\" *ngIf=\"imagenes !== null\" >\n        <div *ngFor=\"let k of imagenes | keys \" >\n            <a [href]=\"imagenes[k].url\" download [title]=\"imagenes[k].nombre\">\n                <img [src]=\"imagenes[k].url\" [alt]=\"imagenes[k].nombre\">\n            </a>\n        </div>\n    </div>\n\n<!-- DIV CONTAINER FINAL -->\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"subirDatosModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"subirDatosModalLabel\" aria-hidden=\"true\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"subirDatosModalLabel\" style=\"color: black\"  >Subir los datos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"color: black\" >\n        Quiere subir los datos a la nube?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"subirArchivos()\" data-dismiss=\"modal\" >Subir datos</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datos_service__ = __webpack_require__("../../../../../src/app/services/datos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logeo_service__ = __webpack_require__("../../../../../src/app/services/logeo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_carga_archivos_service__ = __webpack_require__("../../../../../src/app/services/carga-archivos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_file_item__ = __webpack_require__("../../../../../src/app/models/file-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_datosService, _logeoService, _cargaArchivosService) {
        this._datosService = _datosService;
        this._logeoService = _logeoService;
        this._cargaArchivosService = _cargaArchivosService;
        this.dato = "";
        this.archivosCargados = false;
        this.subiendo = false;
        // persona: Datos;
        this.imagenes = null;
        this.sonidos = null;
        this.archivosSonidosASubir = [];
        this.archivosImagenesASubir = [];
        this.archivosTotalesASubir = [];
        this.datosSonidos = false;
        this.datosImagenes = false;
        this.auxSonidos = null;
        this.auxImagenes = null;
        console.log("Sonidos ", this.sonidos);
        // this.getImagenesYSonidos(); 
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // login() {
    //   let nuevaPersona: Datos = {
    //     id: 1,
    //     nombre: this.nombre,
    //     apellido: "sapo",
    //   }
    //   console.log(this.nombre);
    //   this._datosService.cargarDatos(nuevaPersona).subscribe();
    // }
    // getImagenesYSonidos() {
    // if ( this._logeoService.usuario.nombre ){ 
    //   this._datosService.getImagenes()
    //     .subscribe( imagenes => {
    //       if ( imagenes ) {
    //         this.imagenes = imagenes;
    //         console.log("Imagenes cargadas ", imagenes);
    //     }
    //     });
    //   this._datosService.getSonidos()
    //       .subscribe( sonidos => {
    //         if ( sonidos ) {
    //           this.sonidos = sonidos;
    //           console.log("Sonidos cargados ", sonidos);
    //         }
    //       })
    //   }
    //   this.datosSonidos = true;
    // }
    LoginComponent.prototype.getSonidos = function () {
        var _this = this;
        if (this._logeoService.usuario.nombre) {
            this._datosService.getSonidos()
                .subscribe(function (sonidos) {
                if (sonidos) {
                    _this.sonidos = sonidos;
                    console.log("Sonidos cargados ", sonidos);
                }
            });
        }
        this.datosSonidos = true;
    };
    LoginComponent.prototype.getImagenes = function () {
        var _this = this;
        if (this._logeoService.usuario.nombre) {
            this._datosService.getImagenes()
                .subscribe(function (imagenes) {
                if (imagenes) {
                    _this.imagenes = imagenes;
                    console.log("Imagenes cargadas ", imagenes);
                }
            });
        }
        this.datosImagenes = true;
    };
    LoginComponent.prototype.toggleDatosSonidos = function () {
        // this.datosSonidos = false;
        // this.sonidos = null;
        if (this.auxSonidos == null) {
            this.auxSonidos = this.sonidos;
            this.sonidos = null;
        }
        else {
            this.sonidos = this.auxSonidos;
            this.auxSonidos = null;
        }
    };
    LoginComponent.prototype.toggleDatosImagenes = function () {
        if (this.auxImagenes == null) {
            this.auxImagenes = this.imagenes;
            this.imagenes = null;
        }
        else {
            this.imagenes = this.auxImagenes;
            this.auxImagenes = null;
        }
    };
    LoginComponent.prototype.publicarDato = function () {
        if (this.dato !== "" || this.dato == undefined) {
            var nuevaPersona = {
                id: 1,
                nombre: this._logeoService.usuario.nombre,
                dato: this.dato,
                direccion: this._logeoService.usuario.email
            };
            console.log("Dato a guardar ", this.dato);
            this._datosService.cargarDatos(nuevaPersona, this._logeoService.usuario.uid).subscribe();
            this.dato = "";
        }
    };
    LoginComponent.prototype.verDatos = function (event) {
        // let file: File;
        var fileList = event.target.files;
        this.archivosCargados = false;
        if (fileList.length > 0) {
            for (var i = 0; i < fileList.length; i++) {
                var file = fileList[i];
                console.log("Elijio ", file.name);
                console.log("Tipo archivo ", file.type);
                if (file.type.startsWith('image')) {
                    // this._cargaArchivosService.agregarImagen(file);
                    this.archivosImagenesASubir.push(new __WEBPACK_IMPORTED_MODULE_4__models_file_item__["a" /* FileItem */](file));
                    console.log("Agrego imagen ", file.name);
                }
                else if (file.type.startsWith('audio')) {
                    // this._cargaArchivosService.agregarSonido(file);
                    this.archivosSonidosASubir.push(new __WEBPACK_IMPORTED_MODULE_4__models_file_item__["a" /* FileItem */](file));
                    console.log("Agrego sonido ", file.name);
                }
            }
            //cuando termina de cargar todo
            this.archivosTotalesASubir = this.archivosImagenesASubir.concat(this.archivosSonidosASubir);
            this.archivosCargados = true;
            this.subiendo = false;
        }
        return;
    };
    LoginComponent.prototype.subirArchivos = function () {
        this.subiendo = true;
        this._cargaArchivosService.subirArchivos(this.archivosImagenesASubir, this.archivosSonidosASubir);
    };
    LoginComponent.prototype.borrarSonido = function (nombre, tipoArchivo, key$) {
        var _this = this;
        console.log("Tipo ", tipoArchivo);
        this._cargaArchivosService.borrarSonido(nombre, tipoArchivo);
        console.log("Borrar del arreglo de sonidos ", this.sonidos[key$]);
        this._datosService.borrarSonido(key$).subscribe(function (respuesta) {
            // console.log(respuesta);
            if (respuesta) {
                console.error(respuesta);
            }
            else {
                // si se borra
                delete _this.sonidos[key$];
                console.log("Cantidad de sonidos restante ");
            }
        });
        return;
    };
    LoginComponent.prototype.limpiarArchivos = function () {
        this.archivosTotalesASubir = [];
        this.archivosImagenesASubir = [];
        this.archivosSonidosASubir = [];
        this.archivosCargados = false;
    };
    LoginComponent.prototype.login = function () {
        this._logeoService.login();
    };
    LoginComponent.prototype.logout = function () {
        this._logeoService.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_datos_service__["a" /* DatosService */],
            __WEBPACK_IMPORTED_MODULE_2__services_logeo_service__["a" /* LogeoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_carga_archivos_service__["a" /* CargaArchivosService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-search [nombre]=\"'juan'\"></app-search> -->\n<p>Search............</p>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    // @Input('nombre') nombre: string;
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Image and text -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a [routerLink]=\"['home']\" class=\"navbar-brand\">\n        <img src=\"assets/img/dragon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Mi app\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['search']\">Search</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['heroes']\">Heroes</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\n            </li>\n        </ul>\n\n    \n        <form *ngIf=\"_logeoService.logeado\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"irABusqueda(buscar.value)\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Busqueda\" aria-label=\"Search\" #buscar>\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Buscar</button>\n        </form>\n    </div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logeo_service__ = __webpack_require__("../../../../../src/app/services/logeo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, _logeoService) {
        this.router = router;
        this._logeoService = _logeoService;
        this.aBuscar = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // $(document).ready(function(){  
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
        // }); 
    };
    NavbarComponent.prototype.irABusqueda = function (buscar) {
        this.router.navigate(['/busqueda', buscar]);
        $('.navbar-collapse').collapse('hide');
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_logeo_service__["a" /* LogeoService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/file-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(archivo) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
        this.tipoArchivo = this.sacarTipoArchivo(archivo);
    }
    FileItem.prototype.sacarTipoArchivo = function (archivo) {
        return archivo.type.split('/')[1];
    };
    return FileItem;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'keys',
            pure: false
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/carga-archivos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaArchivosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_file_item__ = __webpack_require__("../../../../../src/app/models/file-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datos_service__ = __webpack_require__("../../../../../src/app/services/datos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFirestore } from 'angularfire2/firestore';



var CargaArchivosService = /** @class */ (function () {
    function CargaArchivosService(
        // private db: AngularFirestore,
        _datosService) {
        this._datosService = _datosService;
        this.CARPETA_IMAGENES = 'img';
        this.CARPETA_SONIDOS = 'sound';
        this.imagenes = [];
        this.sonidos = [];
    }
    CargaArchivosService.prototype.cargarImagenesFirebase = function (imagenes) {
        var _this = this;
        // console.log(imagenes);
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var _loop_1 = function (item) {
            item.estaSubiendo = true;
            if (item.progreso >= 100) {
                return "continue";
            }
            var uploadTask = storageRef.child(this_1._datosService._logeoService.usuario.uid + "/" + this_1.CARPETA_IMAGENES + "/" + item.nombreArchivo).put(item.archivo);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(item.progreso);
            }, function (error) { return console.error("error al subir", error); }, function () {
                console.log("imagen cargada correctamente");
                item.url = uploadTask.snapshot.downloadURL;
                item.estaSubiendo = false;
                // this.guardarImagen({
                //   nombre: item.nombreArchivo,
                //   url: item.url
                // });
                _this._datosService.subirImagen({
                    nombre: item.nombreArchivo,
                    url: item.url,
                    tipo: item.tipoArchivo
                }).subscribe();
            });
        };
        var this_1 = this;
        for (var _i = 0, imagenes_1 = imagenes; _i < imagenes_1.length; _i++) {
            var item = imagenes_1[_i];
            _loop_1(item);
        }
    };
    CargaArchivosService.prototype.cargarSonidoFirebase = function (sonidos) {
        var _this = this;
        // console.log(imagenes);
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var _loop_2 = function (item) {
            item.estaSubiendo = true;
            if (item.progreso >= 100) {
                return "continue";
            }
            var uploadTask = storageRef.child(this_2._datosService._logeoService.usuario.uid + "/" + this_2.CARPETA_SONIDOS + "/" + item.nombreArchivo).put(item.archivo);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(item.progreso);
            }, function (error) { return console.error("error al subir", error); }, function () {
                console.log("imagen cargada correctamente");
                item.url = uploadTask.snapshot.downloadURL;
                item.estaSubiendo = false;
                // this.guardarImagen({
                //   nombre: item.nombreArchivo,
                //   url: item.url
                // });
                _this._datosService.subirSonido({
                    nombre: item.nombreArchivo,
                    url: item.url,
                    tipo: item.tipoArchivo
                }).subscribe();
            });
        };
        var this_2 = this;
        for (var _i = 0, sonidos_1 = sonidos; _i < sonidos_1.length; _i++) {
            var item = sonidos_1[_i];
            _loop_2(item);
        }
    };
    CargaArchivosService.prototype.subirArchivos = function (imagenes, sonidos) {
        this.cargarImagenesFirebase(imagenes);
        this.cargarSonidoFirebase(sonidos);
    };
    CargaArchivosService.prototype.borrarSonido = function (nombre, tipo) {
        // Create a reference to the file to delete
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var urlNombre = this._datosService._logeoService.usuario.uid + "/" + this.CARPETA_SONIDOS + "/" + nombre;
        console.log("Ruta de archivo de sondio a borrar ", urlNombre);
        var desertRef = storageRef.child(urlNombre);
        // Delete the file
        desertRef.delete().then(function () {
            console.log("Borrado exitoso de archivo de sonido");
        }).catch(function (error) {
            console.error("No se pudo borrar el archivo de sonido");
        });
    };
    CargaArchivosService.prototype.agregarImagen = function (imagen) {
        var imagenACargar = new __WEBPACK_IMPORTED_MODULE_2__models_file_item__["a" /* FileItem */](imagen);
        this.imagenes.push(imagenACargar);
    };
    CargaArchivosService.prototype.agregarSonido = function (sonido) {
        var sonidoACargar = new __WEBPACK_IMPORTED_MODULE_2__models_file_item__["a" /* FileItem */](sonido);
        this.sonidos.push(sonidoACargar);
    };
    CargaArchivosService.prototype.limpiar = function () {
        this.imagenes = [];
        this.sonidos = [];
    };
    CargaArchivosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__datos_service__["a" /* DatosService */]])
    ], CargaArchivosService);
    return CargaArchivosService;
}());



/***/ }),

/***/ "../../../../../src/app/services/datos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logeo_service__ = __webpack_require__("../../../../../src/app/services/logeo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosService = /** @class */ (function () {
    function DatosService(http, _logeoService) {
        this.http = http;
        this._logeoService = _logeoService;
        this.datosURL = "https://heroesapp-cb895.firebaseio.com/";
    }
    DatosService.prototype.cargarDatos = function (persona, uid) {
        var body = JSON.stringify(persona);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.datosURL + uid + "/datos" + ".json", body, { headers: headers })
            .map(function (res) {
            console.log("Res", res);
            console.log("Res.json", res.json());
            return res.json();
        });
    };
    DatosService.prototype.subirImagen = function (imagen) {
        var body = JSON.stringify(imagen);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.datosURL + this._logeoService.usuario.uid + "/img" + ".json", body, { headers: headers })
            .map(function (res) {
            console.log("Res", res);
            console.log("Res.json", res.json());
            return res.json();
        });
    };
    DatosService.prototype.subirSonido = function (sonido) {
        var body = JSON.stringify(sonido);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.datosURL + this._logeoService.usuario.uid + "/sound" + ".json", body, { headers: headers })
            .map(function (res) {
            console.log("Res", res);
            console.log("Res.json", res.json());
            return res.json();
        });
    };
    DatosService.prototype.getDatos = function (uid) {
        this.uid = uid;
        return this.http.get(this.datosURL + uid + "/datos" + '.json')
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.getImagenes = function () {
        var uid = this._logeoService.usuario.uid;
        return this.http.get(this.datosURL + uid + "/img" + '.json')
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.getSonidos = function () {
        var uid = this._logeoService.usuario.uid;
        return this.http.get(this.datosURL + uid + "/sound" + '.json')
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.borrarDato = function (key$) {
        var uid = this._logeoService.usuario.uid;
        var url = "" + this.datosURL + uid + "/datos/" + key$ + ".json";
        console.log("La URL es : ", url);
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.borrarSonido = function (key$) {
        var uid = this._logeoService.usuario.uid;
        var url = "" + this.datosURL + uid + "/sound/" + key$ + ".json";
        console.log("La URL es : ", url);
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    DatosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__logeo_service__["a" /* LogeoService */]])
    ], DatosService);
    return DatosService;
}());



/***/ }),

/***/ "../../../../../src/app/services/heroes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesService = /** @class */ (function () {
    function HeroesService(http) {
        this.http = http;
        this.heroesURLFB = "https://heroesapp-cb895.firebaseio.com/heroes.json";
        this.heroeURL = "https://heroesapp-cb895.firebaseio.com/heroes/";
    }
    HeroesService.prototype.nuevoHeroe = function (heroe) {
        var body = JSON.stringify(heroe);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.heroesURLFB, body, { headers: headers }).map(function (res) {
            console.log("Res", res);
            console.log("Res.json", res.json());
            return res.json();
        });
    };
    HeroesService.prototype.actualizarHeroe = function (heroe, key$) {
        var body = JSON.stringify(heroe);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var url = "" + this.heroeURL + key$ + ".json";
        return this.http.put(url, body, { headers: headers }).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HeroesService.prototype.getHeroe = function (key$) {
        var url = "" + this.heroeURL + key$ + ".json";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    HeroesService.prototype.getHeroes = function () {
        return this.http.get(this.heroesURLFB)
            .map(function (res) { return res.json(); });
    };
    HeroesService.prototype.borrarHeroe = function (key$) {
        var url = "" + this.heroeURL + key$ + ".json";
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    HeroesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/logeo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogeoService = /** @class */ (function () {
    function LogeoService(afs, afAuth) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.usuario = {};
        this.logeado = false;
        this.afAuth.authState.subscribe(function (user) {
            console.log("Estado del usuario", user);
            if (!user) {
                return;
            }
            _this.usuario.nombre = user.displayName;
            _this.usuario.uid = user.uid;
            _this.logeado = true;
        });
    }
    LogeoService.prototype.login = function () {
        var _this = this;
        // if ( proveedor === "google"){  
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (success) {
            console.log("Logeo Exitoso");
            _this.logeado = true;
        }).catch(function (error) {
            console.log("Logeo No exitoso");
            _this.logeado = false;
        });
        // } else 
        // {    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
        // }
    };
    LogeoService.prototype.logout = function () {
        // console.log("Estado de auth ",this.afAuth.authState.subscribe(algo => algo));
        var _this = this;
        this.usuario = {};
        this.afAuth.auth.signOut().then(function (success) {
            _this.logeado = false;
            console.log("Se deslogeo");
        }).catch(function (error) {
            console.log("No se pudo deslogear");
        });
        // console.log("Estado de auth ",this.afAuth.authState.subscribe(algo => algo));
    };
    LogeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LogeoService);
    return LogeoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map