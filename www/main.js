(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: 'dashboard-tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard-tab_dashboard-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard-tab/dashboard-tab.module */ 27935)).then(m => m.DashboardTabPageModule)
    },
    {
        path: 'home-tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home-tab_home-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home-tab/home-tab.module */ 85951)).then(m => m.HomeTabPageModule)
    },
    {
        path: '',
        redirectTo: 'home-tab',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/app */ 6659);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 25357);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 10702);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/analytics */ 63675);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 84400);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ 30164);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/functions */ 24570);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/messaging */ 28768);
/* harmony import */ var _angular_fire_performance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/performance */ 58789);
/* harmony import */ var _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/remote-config */ 55792);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ 97200);



















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.getFirestore)()),
            (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.getAnalytics)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)()),
            (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.provideDatabase)(() => (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.getDatabase)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_13__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_13__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__.getMessaging)()),
            (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_15__.providePerformance)(() => (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_15__.getPerformance)()),
            (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_16__.provideRemoteConfig)(() => (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_16__.getRemoteConfig)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__.getStorage)())
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.ScreenTrackingService, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.UserTrackingService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'cpa-5723',
        appId: '1:1057065041680:web:52105eb91c1ede41682f95',
        storageBucket: 'cpa-5723.appspot.com',
        apiKey: 'AIzaSyBUlAlkaNJikxPLWg5pNyFOQDpTt0rQSm8',
        authDomain: 'cpa-5723.firebaseapp.com',
        messagingSenderId: '1057065041680',
        measurementId: 'G-9KZZ78Y47B',
    },
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBUlAlkaNJikxPLWg5pNyFOQDpTt0rQSm8',
        authDomain: 'cpa-5723.firebaseapp.com',
        projectId: 'cpa-5723',
        storageBucket: 'cpa-5723.appspot.com',
        messagingSenderId: '1057065041680',
        appId: '1:1057065041680:web:52105eb91c1ede41682f95',
        measurementId: 'G-9KZZ78Y47B'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map