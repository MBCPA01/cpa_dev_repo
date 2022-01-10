"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard-tab_dashboard-tab_module_ts"],{

/***/ 30410:
/*!***************************************************************!*\
  !*** ./src/app/dashboard-tab/dashboard-tab-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardTabPageRoutingModule": () => (/* binding */ DashboardTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-tab.page */ 26056);




const routes = [
    {
        path: '',
        component: _dashboard_tab_page__WEBPACK_IMPORTED_MODULE_0__.DashboardTabPage,
        children: [
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 64671)).then(m => m.AboutPageModule)
            },
            {
                path: 'data',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_data_data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../data/data.module */ 36230)).then(m => m.DataPageModule)
            },
            {
                path: 'trend',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_trend_trend_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../trend/trend.module */ 99268)).then(m => m.TrendPageModule)
            },
            {
                path: 'alarm',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_alarm_alarm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../alarm/alarm.module */ 72455)).then(m => m.AlarmPageModule)
            },
            {
                path: 'note',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_note_note_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../note/note.module */ 69112)).then(m => m.NotePageModule)
            },
            {
                path: 'dashboard-edit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard-edit_dashboard-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard-edit/dashboard-edit.module */ 98604)).then(m => m.DashboardEditPageModule)
            },
            {
                path: 'profile-edit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile-edit_profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile-edit/profile-edit.module */ 28002)).then(m => m.ProfileEditPageModule)
            },
            {
                path: 'info',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../info/info.module */ 25491)).then((m) => m.InfoPageModule),
            },
            {
                path: '',
                redirectTo: 'data',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
    }
];
let DashboardTabPageRoutingModule = class DashboardTabPageRoutingModule {
};
DashboardTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardTabPageRoutingModule);



/***/ }),

/***/ 27935:
/*!*******************************************************!*\
  !*** ./src/app/dashboard-tab/dashboard-tab.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardTabPageModule": () => (/* binding */ DashboardTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-tab-routing.module */ 30410);
/* harmony import */ var _dashboard_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-tab.page */ 26056);







let DashboardTabPageModule = class DashboardTabPageModule {
};
DashboardTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardTabPageRoutingModule
        ],
        declarations: [_dashboard_tab_page__WEBPACK_IMPORTED_MODULE_1__.DashboardTabPage]
    })
], DashboardTabPageModule);



/***/ }),

/***/ 26056:
/*!*****************************************************!*\
  !*** ./src/app/dashboard-tab/dashboard-tab.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardTabPage": () => (/* binding */ DashboardTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard-tab.page.html */ 47146);
/* harmony import */ var _dashboard_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-tab.page.scss */ 94558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let DashboardTabPage = class DashboardTabPage {
    constructor(router) {
        this.router = router;
        this.active = '';
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.profile = [
            {
                name: 'Mon profile',
                link: '/dashboard-tab/profile-edit',
                icon: 'person-circle',
                position: 'start',
            },
            {
                name: 'Déconnexion',
                link: '',
                icon: 'log-out',
                position: 'start',
            },
        ];
        this.emplacement = [
            {
                name: 'Mes emplacements',
                link: '',
                icon: 'map',
                position: 'start',
            },
        ];
        this.donnees = [
            {
                name: 'Tableau de bord',
                link: '/dashboard-tab/dashboard-edit',
                icon: 'analytics',
                position: 'start',
            },
            {
                name: 'Courbes de tendances',
                link: '/dashboard-tab/trend',
                icon: 'trending-up',
                position: 'start',
            },
        ];
        this.information = [
            {
                name: 'À propos',
                link: '/dashboard-tab/about',
                icon: 'information',
                position: 'start',
            },
        ];
        this.router.events.subscribe((event) => {
            console.log(event.url);
            this.active = event.url;
        });
    }
    ngOnInit() { }
};
DashboardTabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DashboardTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard-tab',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_tab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardTabPage);



/***/ }),

/***/ 47146:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard-tab/dashboard-tab.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-menu contentId=\"main-content\" side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Informations</ion-label>\n        </ion-list-header>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let navInfo of information\">\n          <ion-item\n            routerDirection=\"root\"\n            [routerLink]=\"navInfo.link\"\n            [class.active-menu]=\"active === navInfo.link\"\n          >\n            {{navInfo.name}}\n            <ion-icon\n              [slot]=\"navInfo.position\"\n              [ios]=\"navInfo.icon + '-outline'\"\n              [md]=\"navInfo.icon + '-sharp'\"\n            ></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Carte</ion-label>\n        </ion-list-header>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let navEmpl of emplacement\">\n          <ion-item\n            routerDirection=\"root\"\n            [routerLink]=\"navEmpl.link\"\n            [class.active-menu]=\"active === navEmpl.link\"\n          >\n            {{navEmpl.name}}\n            <ion-icon\n              [slot]=\"navEmpl.position\"\n              [ios]=\"navEmpl.icon + '-outline'\"\n              [md]=\"navEmpl.icon + '-sharp'\"\n            ></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Édition</ion-label>\n        </ion-list-header>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let navDonnees of donnees\">\n          <ion-item\n            routerDirection=\"root\"\n            [routerLink]=\"navDonnees.link\"\n            [class.active-menu]=\"active === navDonnees.link\"\n          >\n            {{navDonnees.name}}\n            <ion-icon\n              [slot]=\"navDonnees.position\"\n              [ios]=\"navDonnees.icon + '-outline'\"\n              [md]=\"navDonnees.icon + '-sharp'\"\n            ></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Profile</ion-label>\n        </ion-list-header>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let navProfile of profile\">\n          <ion-item\n            routerDirection=\"root\"\n            [routerLink]=\"navProfile.link\"\n            [class.active-menu]=\"active === navProfile.link\"\n          >\n            {{navProfile.name}}\n            <ion-icon\n              [slot]=\"navProfile.position\"\n              [ios]=\"navProfile.icon + '-outline'\"\n              [md]=\"navProfile.icon + '-sharp'\"\n            ></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"alarm\">\n        <ion-icon name=\"notifications\" float-left></ion-icon>\n        <!-- <ion-label>Alarmes</ion-label> -->\n      </ion-tab-button>\n      <ion-tab-button tab=\"data\">\n        <ion-icon name=\"reader-outline\"></ion-icon>\n        <!-- <ion-label>Données</ion-label> -->\n      </ion-tab-button>\n      <ion-tab-button>\n        <ion-icon id=\"page-icon\" name=\"grid-outline\"></ion-icon>\n        <ion-label></ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"note\">\n        <ion-icon name=\"pencil-outline\"></ion-icon>\n        <!-- <ion-label>Notes</ion-label> -->\n      </ion-tab-button>\n      <ion-tab-button tab=\"info\">\n        <ion-icon name=\"help\"></ion-icon>\n        <!-- <ion-label>Aide</ion-label> -->\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-app>\n");

/***/ }),

/***/ 94558:
/*!*******************************************************!*\
  !*** ./src/app/dashboard-tab/dashboard-tab.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "#page-icon {\n  --border-radius: 100%;\n  display: inline-block;\n  font-size: 35px;\n  color: #ffc977;\n  vertical-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC10YWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQtdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLWljb24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjZmZjOTc3O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard-tab_dashboard-tab_module_ts.js.map