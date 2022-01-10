"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_trend_trend_module_ts"],{

/***/ 24947:
/*!***********************************************!*\
  !*** ./src/app/trend/trend-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendPageRoutingModule": () => (/* binding */ TrendPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _trend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trend.page */ 129);




const routes = [
    {
        path: '',
        component: _trend_page__WEBPACK_IMPORTED_MODULE_0__.TrendPage,
    }
];
let TrendPageRoutingModule = class TrendPageRoutingModule {
};
TrendPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TrendPageRoutingModule);



/***/ }),

/***/ 99268:
/*!***************************************!*\
  !*** ./src/app/trend/trend.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendPageModule": () => (/* binding */ TrendPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _trend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trend.page */ 129);
/* harmony import */ var _trend_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trend-routing.module */ 24947);







let TrendPageModule = class TrendPageModule {
};
TrendPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trend_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrendPageRoutingModule
        ],
        declarations: [_trend_page__WEBPACK_IMPORTED_MODULE_0__.TrendPage]
    })
], TrendPageModule);



/***/ }),

/***/ 129:
/*!*************************************!*\
  !*** ./src/app/trend/trend.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendPage": () => (/* binding */ TrendPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_trend_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./trend.page.html */ 93845);
/* harmony import */ var _trend_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trend.page.scss */ 68122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 85757);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);





let TrendPage = class TrendPage {
    constructor() {
    }
    ngAfterViewInit() {
        this.barChartMethod();
        this.doughnutChartMethod();
        this.lineChartMethod();
    }
    barChartMethod() {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Ex1', 'Ex2', 'Ex3', 'Ex4', 'Ex5', 'Ex6'],
                datasets: [{
                        label: 'Exemple de titre',
                        data: [200, 50, 30, 15, 20, 34],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
    doughnutChartMethod() {
        this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Ex1', 'Ex2', 'Ex3', 'Ex4', 'Ex5'],
                datasets: [{
                        label: 'Exemple de titre',
                        data: [50, 29, 15, 10, 7],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#FF6384'
                        ]
                    }]
            }
        });
    }
    lineChartMethod() {
        this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                datasets: [
                    {
                        label: 'Exemple durant le semaine',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40, 10],
                        spanGaps: false,
                    }
                ]
            }
        });
    }
};
TrendPage.ctorParameters = () => [];
TrendPage.propDecorators = {
    barCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas',] }],
    doughnutCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['doughnutCanvas',] }],
    lineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['lineCanvas',] }]
};
TrendPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trend',
        template: _C_Users_MikaelBrassard_Desktop_Projets_CPA_CPA_APP_TEST_CPA_DEV_Acquisition_donnees_CPA_5723_node_modules_ngtools_webpack_src_loaders_direct_resource_js_trend_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_trend_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrendPage);



/***/ }),

/***/ 93845:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/trend/trend.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Courbes disponibles</ion-title>\n\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <ion-card>\n      <ion-card-header>\n        Bar Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Pie Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Line Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 68122:
/*!***************************************!*\
  !*** ./src/app/trend/trend.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#bar-chart-container {\n  height: 200px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRkYiLCJmaWxlIjoidHJlbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNiYXItY2hhcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_trend_trend_module_ts.js.map