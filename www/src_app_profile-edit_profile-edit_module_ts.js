"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile-edit_profile-edit_module_ts"],{

/***/ 27337:
/*!*************************************************************!*\
  !*** ./src/app/profile-edit/profile-edit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageRoutingModule": () => (/* binding */ ProfileEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.page */ 87316);




const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPage
    }
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ 28002:
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageModule": () => (/* binding */ ProfileEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit-routing.module */ 27337);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page */ 87316);







let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPageRoutingModule
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__.ProfileEditPage]
    })
], ProfileEditPageModule);



/***/ }),

/***/ 87316:
/*!***************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPage": () => (/* binding */ ProfileEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile-edit.page.html */ 18845);
/* harmony import */ var _profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page.scss */ 70332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ProfileEditPage = class ProfileEditPage {
    constructor() {
    }
    ngOnInit() { }
};
ProfileEditPage.ctorParameters = () => [];
ProfileEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile-edit',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileEditPage);



/***/ }),

/***/ 18845:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile-edit/profile-edit.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Édition du profile</ion-title>\n\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Content -->\n</ion-content>\n\n\n");

/***/ }),

/***/ 70332:
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVkaXQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile-edit_profile-edit_module_ts.js.map