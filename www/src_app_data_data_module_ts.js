"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_data_data_module_ts"],{

/***/ 15055:
/*!*********************************************!*\
  !*** ./src/app/data/data-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPageRoutingModule": () => (/* binding */ DataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.page */ 79701);




const routes = [
    {
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_0__.DataPage,
    }
];
let DataPageRoutingModule = class DataPageRoutingModule {
};
DataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DataPageRoutingModule);



/***/ }),

/***/ 36230:
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPageModule": () => (/* binding */ DataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.page */ 79701);
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-routing.module */ 15055);







let DataPageModule = class DataPageModule {
};
DataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _data_routing_module__WEBPACK_IMPORTED_MODULE_1__.DataPageRoutingModule
        ],
        declarations: [_data_page__WEBPACK_IMPORTED_MODULE_0__.DataPage]
    })
], DataPageModule);



/***/ }),

/***/ 79701:
/*!***********************************!*\
  !*** ./src/app/data/data.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPage": () => (/* binding */ DataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./data.page.html */ 34946);
/* harmony import */ var _data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.page.scss */ 97850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let DataPage = class DataPage {
    constructor(router) {
        this.router = router;
        this.active = '';
        this.router.events.subscribe((event) => {
            this.active = event.url;
        });
    }
    ngOnInit() { }
};
DataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-data',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_data_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DataPage);



/***/ }),

/***/ 34946:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/data/data.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Content -->\n</ion-content>\n\n\n");

/***/ }),

/***/ 97850:
/*!*************************************!*\
  !*** ./src/app/data/data.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#page-icon {\n  --border-radius: 100%;\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJkYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLWljb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2ZmQzk3NztcbiAgdmVydGljYWwtYWxpZ246IGxlZnQ7XG5cbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_data_data_module_ts.js.map