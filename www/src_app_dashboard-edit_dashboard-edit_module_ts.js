"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard-edit_dashboard-edit_module_ts"],{

/***/ 84327:
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-edit/dashboard-edit-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardEditPageRoutingModule": () => (/* binding */ DashboardEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-edit.page */ 77725);




const routes = [
    {
        path: '',
        component: _dashboard_edit_page__WEBPACK_IMPORTED_MODULE_0__.DashboardEditPage
    }
];
let DashboardEditPageRoutingModule = class DashboardEditPageRoutingModule {
};
DashboardEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardEditPageRoutingModule);



/***/ }),

/***/ 98604:
/*!*********************************************************!*\
  !*** ./src/app/dashboard-edit/dashboard-edit.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardEditPageModule": () => (/* binding */ DashboardEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-edit-routing.module */ 84327);
/* harmony import */ var _dashboard_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-edit.page */ 77725);







let DashboardEditPageModule = class DashboardEditPageModule {
};
DashboardEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardEditPageRoutingModule
        ],
        declarations: [_dashboard_edit_page__WEBPACK_IMPORTED_MODULE_1__.DashboardEditPage]
    })
], DashboardEditPageModule);



/***/ }),

/***/ 77725:
/*!*******************************************************!*\
  !*** ./src/app/dashboard-edit/dashboard-edit.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardEditPage": () => (/* binding */ DashboardEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard-edit.page.html */ 43545);
/* harmony import */ var _dashboard_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-edit.page.scss */ 14869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DashboardEditPage = class DashboardEditPage {
    constructor() {
    }
    ngOnInit() { }
};
DashboardEditPage.ctorParameters = () => [];
DashboardEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard-edit',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardEditPage);



/***/ }),

/***/ 43545:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard-edit/dashboard-edit.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Édition du tableau de bord</ion-title>\n\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Content -->\n</ion-content>\n\n\n");

/***/ }),

/***/ 14869:
/*!*********************************************************!*\
  !*** ./src/app/dashboard-edit/dashboard-edit.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtZWRpdC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard-edit_dashboard-edit_module_ts.js.map