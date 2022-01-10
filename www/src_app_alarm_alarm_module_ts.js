"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alarm_alarm_module_ts"],{

/***/ 73524:
/*!***********************************************!*\
  !*** ./src/app/alarm/alarm-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmPageRoutingModule": () => (/* binding */ AlarmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _alarm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alarm.page */ 71560);




const routes = [
    {
        path: '',
        component: _alarm_page__WEBPACK_IMPORTED_MODULE_0__.AlarmPage
    }
];
let AlarmPageRoutingModule = class AlarmPageRoutingModule {
};
AlarmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlarmPageRoutingModule);



/***/ }),

/***/ 72455:
/*!***************************************!*\
  !*** ./src/app/alarm/alarm.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmPageModule": () => (/* binding */ AlarmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _alarm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alarm-routing.module */ 73524);
/* harmony import */ var _alarm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alarm.page */ 71560);







let AlarmPageModule = class AlarmPageModule {
};
AlarmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alarm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlarmPageRoutingModule
        ],
        declarations: [_alarm_page__WEBPACK_IMPORTED_MODULE_1__.AlarmPage]
    })
], AlarmPageModule);



/***/ }),

/***/ 71560:
/*!*************************************!*\
  !*** ./src/app/alarm/alarm.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmPage": () => (/* binding */ AlarmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alarm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alarm.page.html */ 83981);
/* harmony import */ var _alarm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alarm.page.scss */ 25020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AlarmPage = class AlarmPage {
    constructor() {
        this.active = '';
    }
    ngOnInit() { }
};
AlarmPage.ctorParameters = () => [];
AlarmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alarm',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alarm_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alarm_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlarmPage);



/***/ }),

/***/ 83981:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/alarm/alarm.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Alarmes</ion-title>\n\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Content -->\n</ion-content>\n\n\n");

/***/ }),

/***/ 25020:
/*!***************************************!*\
  !*** ./src/app/alarm/alarm.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGFybS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_alarm_alarm_module_ts.js.map