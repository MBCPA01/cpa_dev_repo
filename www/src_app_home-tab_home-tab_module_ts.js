"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-tab_home-tab_module_ts"],{

/***/ 70736:
/*!*****************************************************!*\
  !*** ./src/app/home-tab/home-tab-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTabPageRoutingModule": () => (/* binding */ HomeTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-tab.page */ 92370);




const routes = [
    {
        path: '',
        component: _home_tab_page__WEBPACK_IMPORTED_MODULE_0__.HomeTabPage,
        children: [
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../login/login.module */ 69549)).then((m) => m.LoginPageModule),
                    },
                ],
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 28245)).then((m) => m.HomePageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
let HomeTabPageRoutingModule = class HomeTabPageRoutingModule {
};
HomeTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeTabPageRoutingModule);



/***/ }),

/***/ 85951:
/*!*********************************************!*\
  !*** ./src/app/home-tab/home-tab.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTabPageModule": () => (/* binding */ HomeTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-tab-routing.module */ 70736);
/* harmony import */ var _home_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab.page */ 92370);







let HomeTabPageModule = class HomeTabPageModule {
};
HomeTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeTabPageRoutingModule],
        declarations: [_home_tab_page__WEBPACK_IMPORTED_MODULE_1__.HomeTabPage],
    })
], HomeTabPageModule);



/***/ }),

/***/ 92370:
/*!*******************************************!*\
  !*** ./src/app/home-tab/home-tab.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTabPage": () => (/* binding */ HomeTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-tab.page.html */ 62289);
/* harmony import */ var _home_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab.page.scss */ 89899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let HomeTabPage = class HomeTabPage {
    constructor(router) {
        this.router = router;
        this.href = '';
        this.url = '';
    }
    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
    }
};
HomeTabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomeTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home-tab',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_tab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeTabPage);



/***/ }),

/***/ 62289:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-tab/home-tab.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Principal</ion-label>\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-icon\n        id=\"page-icon\"\n        name=\"Home\"\n        item-center\n      ></ion-icon>\n      <ion-label></ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\">\n      <ion-icon name=\"log-in\"></ion-icon>\n      <ion-label>Connexion</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 89899:
/*!*********************************************!*\
  !*** ./src/app/home-tab/home-tab.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "#page-icon {\n  --border-radius: 100%;\n  display: inline-block;\n  font-size: 35px;\n  color: #ffc977;\n  vertical-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS10YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtaWNvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICNmZmM5Nzc7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_home-tab_home-tab_module_ts.js.map