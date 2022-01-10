"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 62359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 69549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 62359);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 60955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 51070);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ 95026);








let LoginPage = class LoginPage {
    constructor(toastController, router, route, firebaseSrv) {
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.firebaseSrv = firebaseSrv;
        this.segment = 'Log-in';
        this.dataExample = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            name: '',
            town: '',
            phoneNumber: ''
        };
        //this.firebaseSrv.setSimpleCollectionByPath('News', this.dataExample);
        //console.log(this.firebaseSrv.getDataByPath('test'));
    }
    register(email, password) {
        this.presentToastWhenSignIn(email, password);
    }
    login(email, password) {
        this.auth = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth();
        this.firebaseLogin = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword(this.auth, email.value, password.value)
            .then((res) => {
            if (this.auth.currentUser.emailVerified) {
                this.router.navigate([`/dashboard-tab`]);
                console.log('logged in');
            }
            else {
                console.log(this.auth);
                this.presentToastWhenLogIn();
                return false;
            }
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    // deux pop-up pour l'envoie de courriel lorsque cree et logger
    presentToastWhenLogIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Compte non vérifié',
                message: 'Voulez-vous recevoir un email de confirmation?',
                icon: 'mail',
                position: 'bottom',
                buttons: [
                    {
                        text: 'Oui',
                        role: 'confirm',
                        handler: () => {
                            this.sendEmailVerification = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification(firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth().currentUser)
                                .then((res) => {
                                window.alert('Un message à été envoyé à votre courriel correspondant');
                            })
                                .catch((error) => {
                                window.alert(error.message);
                            });
                            console.log('Favorite clicked');
                        },
                    },
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentToastWhenSignIn(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Création de compte',
                message: 'Voulez vous vraiment crée cotre compte? Un courriel de confirmation sera automatiquement envoyé',
                icon: 'email',
                position: 'bottom',
                buttons: [
                    {
                        text: 'Oui',
                        role: 'confirm',
                        handler: () => {
                            this.auth = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth();
                            this.firebaseLogin = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword(this.auth, email.value, password.value)
                                .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;
                                console.log(user);
                                this.sendEmailVerification = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification(firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth().currentUser)
                                    .then((res) => {
                                    window.alert('Confirmation de l\'envoie du courriel');
                                })
                                    .catch((error) => {
                                    window.alert(error.message);
                                });
                                // ...
                            })
                                .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                            });
                        },
                    },
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
    //const auth = firebase.getAuth();
], LoginPage);



/***/ }),

/***/ 95026:
/*!***************************************************!*\
  !*** ./src/services/firebase/firebase.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 51070);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ 24401);





const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
let FirebaseService = class FirebaseService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    signInUser(email, password) {
        this.auth = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth();
        this.firebaseLogin = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword(this.auth, email.value, password.value)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            this.sendEmailVerification = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification(firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth().currentUser)
                .then((res) => {
                window.alert('Confirmation de l\'envoie du courriel');
            })
                .catch((error) => {
                window.alert(error.message);
            });
            // ...
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    loginUser(email, password) {
        this.auth = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth();
        this.firebaseLogin = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword(this.auth, email.value, password.value)
            .then((res) => {
            if (this.auth.currentUser.emailVerified) {
                this.router.navigate([`/dashboard-tab`]);
                console.log('logged in');
            }
            else {
                console.log(this.auth);
                //this.presentToastWhenLogIn();
                return false;
            }
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    userAuthInfo() {
        this.isAuth = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth().currentUser;
        return this.isAuth;
    }
    sendEmailConfirmation() {
        this.sendEmailVerification = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification(firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth().currentUser)
            .then((res) => {
            window.alert('Un message à été envoyé à votre courriel correspondant');
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    sendEmailRecovery(email) {
        this.sendPasswordReset = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail(firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth(), email)
            .then((res) => {
            window.alert('Un message à été envoyé à votre courriel correspondant');
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    getCollectionByPath(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, path));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }
    setSimpleCollectionByPath(path, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, path), {
                    data
                });
                console.log('Document written with ID: ', docRef.id);
            }
            catch (e) {
                console.error('Error adding document: ', e);
            }
        });
    }
    deleteSimpleCollectionByPath() {
    }
    updateSimpleCollectionByPath() {
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
FirebaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], FirebaseService);



/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Compte</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"segment\" value=\"Log-in\">\n      <ion-segment-button value=\"Sign-up\">\n        <ion-label>Création</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Log-in\">\n        <ion-label>Connexion</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]=\"segment\">\n  <ion-card *ngSwitchCase=\"'Log-in'\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Courriel</ion-label>\n      <ion-input type=\"text\" #email required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Mot de passe</ion-label>\n      <ion-input type=\"password\" #password required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button\n          type=\"submit\"\n          (click)=\"login(email, password)\"\n          expand=\"block\"\n          >Se connecter</ion-button\n        >\n        <a [routerLink]=\"['/forgot-password']\" class=\"small-text\"\n          >Mot de passe oublié?</a\n        >\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <form>\n    <ion-card *ngSwitchCase=\"'Sign-up'\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Prénom</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Nom</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Courriel</ion-label>\n        <ion-input type=\"text\" #email required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mot de passe</ion-label>\n        <ion-input type=\"password\" #password required></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button\n            (click)=\"register(email, password)\"\n            type=\"submit\"\n            expand=\"block\"\n            >Création de compte</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".div {\n  height: 100%;\n}\n\nion-segment-button {\n  --indicator-box-shadow: transparent !important;\n  --background:white;\n  --color:#2d2e87;\n  --background-checked: linear-gradient(to right, #2d2e87, #0083CB)!important;\n  --color-checked: white;\n  border-radius: 0.5rem !important;\n  padding: 2px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2e1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgLS1jb2xvcjojMmQyZTg3O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmQyZTg3LCAjMDA4M0NCKSFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map