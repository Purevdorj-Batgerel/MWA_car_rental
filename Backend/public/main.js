(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/deal.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/deal.actions.ts ***!
  \*****************************************/
/*! exports provided: SELECT_DEAL, SelectDeal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_DEAL", function() { return SELECT_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDeal", function() { return SelectDeal; });
var SELECT_DEAL = 'SELECT_DEAL';
var SelectDeal = /** @class */ (function () {
    function SelectDeal(payload) {
        this.payload = payload;
        this.type = SELECT_DEAL;
    }
    return SelectDeal;
}());



/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: LOGIN, LOGOUT, Login, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var LOGIN = 'LOGIN';
var LOGOUT = 'LOGOUT';
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return Login;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-deal/create-deal.component */ "./src/app/create-deal/create-deal.component.ts");
/* harmony import */ var _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deal-history/deal-history.component */ "./src/app/deal-history/deal-history.component.ts");
/* harmony import */ var _deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal-detail/deal-detail.component */ "./src/app/deal-detail/deal-detail.component.ts");
/* harmony import */ var _dealsearch_dealsearch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealsearch/dealsearch.component */ "./src/app/dealsearch/dealsearch.component.ts");
/* harmony import */ var _deal_offer_deal_offer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deal-offer/deal-offer.component */ "./src/app/deal-offer/deal-offer.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/userType.guard */ "./src/app/guards/userType.guard.ts");
/* harmony import */ var _deal_offer_his_deal_offer_his_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deal-offer-his/deal-offer-his.component */ "./src/app/deal-offer-his/deal-offer-his.component.ts");















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'deal-create', component: _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_4__["CreateDealComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    // { path: 'deal-create', loadChildren: './lazy/DealLazy.module#DealLazyModule', canActivate: [AuthGuard, UserTypeGuard] },
    { path: 'deal-history', component: _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_5__["DealHistoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    { path: 'deal-detail/:id', component: _deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_6__["DealDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    { path: 'deal-search', component: _dealsearch_dealsearch_component__WEBPACK_IMPORTED_MODULE_7__["DealsearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    { path: 'deal-offer-his', component: _deal_offer_his_deal_offer_his_component__WEBPACK_IMPORTED_MODULE_14__["DealOfferHisComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    { path: 'deal-offer', component: _deal_offer_deal_offer_component__WEBPACK_IMPORTED_MODULE_8__["DealOfferComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_userType_guard__WEBPACK_IMPORTED_MODULE_13__["UserTypeGuard"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div style=\"margin-top:56px;\"></div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Carrental-app';
    }
    AppComponent.prototype.dosth = function (event) {
        console.log(event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-deal/create-deal.component */ "./src/app/create-deal/create-deal.component.ts");
/* harmony import */ var _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deal-history/deal-history.component */ "./src/app/deal-history/deal-history.component.ts");
/* harmony import */ var _deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deal-detail/deal-detail.component */ "./src/app/deal-detail/deal-detail.component.ts");
/* harmony import */ var _dealsearch_dealsearch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dealsearch/dealsearch.component */ "./src/app/dealsearch/dealsearch.component.ts");
/* harmony import */ var _deal_offer_deal_offer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./deal-offer/deal-offer.component */ "./src/app/deal-offer/deal-offer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_userType_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/userType.guard */ "./src/app/guards/userType.guard.ts");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/token.interceptor */ "./src/app/services/token.interceptor.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _deal_offer_his_deal_offer_his_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./deal-offer-his/deal-offer-his.component */ "./src/app/deal-offer-his/deal-offer-his.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_11__["CreateDealComponent"],
                _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_12__["DealHistoryComponent"],
                _deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_13__["DealDetailComponent"],
                _dealsearch_dealsearch_component__WEBPACK_IMPORTED_MODULE_14__["DealsearchComponent"],
                _deal_offer_deal_offer_component__WEBPACK_IMPORTED_MODULE_15__["DealOfferComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_23__["TestComponent"],
                _deal_offer_his_deal_offer_his_component__WEBPACK_IMPORTED_MODULE_24__["DealOfferHisComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 10,
                })
            ],
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _guards_userType_guard__WEBPACK_IMPORTED_MODULE_21__["UserTypeGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-deal/create-deal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-deal/create-deal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.btn {\r\n    width: 150px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWRlYWwvY3JlYXRlLWRlYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWRlYWwvY3JlYXRlLWRlYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-deal/create-deal.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-deal/create-deal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"panel-group\" class=\"card h-center\" style=\"width: 600px;\">\r\n    <div class=\"card-body\">\r\n      <h4>Car Rental Register</h4>\r\n      <div>\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">Title:</label>\r\n            <input class=\"col-sm-8\" type=\"text\" formControlName=\"Title\" placeholder=\"Enter Titles\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">CarType:</label>\r\n            <select formControlName=\"CarType\" class=\"col-sm-8\">\r\n              <option value=\"\" class=\"form-control\">-- Rental Purpose --</option>\r\n              <option value=\"Travel\" class=\"form-control\">Travel</option>\r\n              <option value=\"Cargo\" class=\"form-control\">Cargo</option>\r\n              <option value=\"Business\" class=\"form-control\">Business\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">Departure:</label>\r\n            <select formControlName=\"Departure\" class=\"col-sm-8\">\r\n              <option value=\"\" class=\"form-control\">-- FROM --</option>\r\n              <option *ngFor=\"let location of locations\" value={{location.name}} class=\"form-control\">\r\n                {{location.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">Destination:</label>\r\n\r\n            <select formControlName=\"Destination\" class=\"col-sm-8\">\r\n              <option value=\"\" class=\"form-control\">-- To --</option>\r\n              <option *ngFor=\"let location of locations\" value={{location.name}} class=\"form-control\">\r\n                {{location.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">Departure Date:</label>\r\n            <input type=\"date\" formControlName=\"Date\" class=\"col-sm-8\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-4 col-form-label\">Phone-Number:</label>\r\n            <input type=\"tel\" formControlName=\"number\" class=\"col-sm-8\" />\r\n          </div>\r\n\r\n          <div class=\"button-row\">\r\n            <button type=\"button\" type=\"submit\" class=\"btn btn-primary active\">Submit</button>\r\n            <button type=\"button\" type=\"reset\" value=\"Reset\" class=\"btn btn-primary disabled\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-deal/create-deal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-deal/create-deal.component.ts ***!
  \******************************************************/
/*! exports provided: CreateDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDealComponent", function() { return CreateDealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateDealComponent = /** @class */ (function () {
    function CreateDealComponent(formBuilder, http, store, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.http = http;
        this.store = store;
        this.router = router;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('user'));
        this.user$.subscribe(function (val) {
            _this.userData = val;
        });
        this.http.get('http://localhost:5000/API/location/getAll').subscribe(function (result) {
            _this.locations = result;
        });
        this.myForm = this.formBuilder.group({
            'Title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'CarType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.exampleValidator]],
            'Departure': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Destination': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$')]],
            'number': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    CreateDealComponent.prototype.ngOnInit = function () { };
    CreateDealComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            tittle: this.myForm.value.Title,
            username: this.userData.name,
            dealtype: this.myForm.value.CarType,
            fromlocation: {
                locationname: this.myForm.value.Departure,
                coordinate: this.getCoordinate(this.myForm.value.Departure)
            },
            tolocation: {
                locationname: this.myForm.value.Destination,
                coordinate: this.getCoordinate(this.myForm.value.Destination)
            },
            departureDate: this.myForm.value.Date,
            status: "New"
        };
        this.http.post('http://localhost:5000/API/carDeal', data).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/']);
        });
    };
    CreateDealComponent.prototype.getCoordinate = function (locationName) {
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var location_1 = _a[_i];
            if (location_1.name == locationName) {
                return {
                    x: location_1.x,
                    y: location_1.y
                };
            }
        }
    };
    CreateDealComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    CreateDealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-deal',
            template: __webpack_require__(/*! ./create-deal.component.html */ "./src/app/create-deal/create-deal.component.html"),
            styles: [__webpack_require__(/*! ./create-deal.component.css */ "./src/app/create-deal/create-deal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateDealComponent);
    return CreateDealComponent;
}());



/***/ }),

/***/ "./src/app/deal-detail/deal-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deal-detail/deal-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glyphicon-refresh-animate {\r\n  animation: spin .7s infinite linear;\r\n  -webkit-animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  from {\r\n    -webkit-transform: scale(1) rotate(0deg);\r\n            transform: scale(1) rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale(1) rotate(360deg);\r\n            transform: scale(1) rotate(360deg);\r\n  }\r\n}\r\n\r\n.row {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.selectedRow {\r\n  background: #98d398;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbC1kZXRhaWwvZGVhbC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRTtJQUNFLGdDQUFnQztHQUNqQzs7RUFFRDtJQUNFLGtDQUFrQztHQUNuQztDQUNGOztBQUVEO0VBQ0U7SUFDRSx5Q0FBaUM7WUFBakMsaUNBQWlDO0dBQ2xDOztFQUVEO0lBQ0UsMkNBQW1DO1lBQW5DLG1DQUFtQztHQUNwQztDQUNGOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGVhbC1kZXRhaWwvZGVhbC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbHlwaGljb24tcmVmcmVzaC1hbmltYXRlIHtcclxuICBhbmltYXRpb246IHNwaW4gLjdzIGluZmluaXRlIGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuN3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZFJvdyB7XHJcbiAgYmFja2dyb3VuZDogIzk4ZDM5ODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deal-detail/deal-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/deal-detail/deal-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" *ngIf=\"carDeal\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <h4>Request Details</h4>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">Request ID:</span></div>\r\n        <div class=\"col\">{{carDeal._id}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">Title:</span></div>\r\n        <div class=\"col\">{{carDeal.tittle}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">Service:</span></div>\r\n        <div class=\"col\">{{carDeal.dealtype}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">From:</span></div>\r\n        <div class=\"col\">{{carDeal.fromlocation.locationname}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">To:</span></div>\r\n        <div class=\"col\">{{carDeal.tolocation.locationname}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">Status:</span></div>\r\n        <div class=\"col\">{{carDeal.status}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"><span class=\"label\">Departure date:</span></div>\r\n        <div class=\"col\">{{carDeal.departureDate | date}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <h4>Driver Offers</h4>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let offer of carDeal.bids\" [class.selectedRow]=\"offer.isConfirmed\" >\r\n        <div class=\"col\">{{offer.driverName}}</div>\r\n        <div class=\"col\">{{offer.offerCost}}</div>\r\n        <div class=\"col\" *ngIf=\"carDeal.status=='New'\"><button class=\"btn btn-primary\" attr.btnid=\"{{offer._id}}\" (click)=\"onClick($event)\">Confirm</button></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"spinner\" *ngIf=\"carDeal === undefined\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>\r\n      Loading...</div>\r\n  </div>\r\n  <div #gmap style=\"width:100%;height:400px\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/deal-detail/deal-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deal-detail/deal-detail.component.ts ***!
  \******************************************************/
/*! exports provided: DealDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealDetailComponent", function() { return DealDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DealDetailComponent = /** @class */ (function () {
    function DealDetailComponent(http, store, route) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.route = route;
        // this.store.pipe(select('deal')).subscribe(value => this.deal = value);
        this.route.params.subscribe(function (params) {
            _this.http.get("http://localhost:5000/API/CarDeal/" + params.id).subscribe(function (result) {
                _this.carDeal = result;
                var mapProp = {
                    center: new google.maps.LatLng(_this.carDeal.fromlocation.coordinate.x, _this.carDeal.fromlocation.coordinate.y),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.gmapElement.nativeElement, mapProp);
            });
        });
    }
    DealDetailComponent.prototype.onClick = function (event) {
        var _this = this;
        var offerId = event.target.getAttribute("btnid");
        this.http.patch("http://localhost:5000/API/Offer/Confirm/" + offerId, {}).subscribe(function (result) {
            console.log(result);
            _this.carDeal = result;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DealDetailComponent.prototype, "gmapElement", void 0);
    DealDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-detail',
            template: __webpack_require__(/*! ./deal-detail.component.html */ "./src/app/deal-detail/deal-detail.component.html"),
            styles: [__webpack_require__(/*! ./deal-detail.component.css */ "./src/app/deal-detail/deal-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DealDetailComponent);
    return DealDetailComponent;
}());



/***/ }),

/***/ "./src/app/deal-history/deal-history.component.css":
/*!*********************************************************!*\
  !*** ./src/app/deal-history/deal-history.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYWwtaGlzdG9yeS9kZWFsLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/deal-history/deal-history.component.html":
/*!**********************************************************!*\
  !*** ./src/app/deal-history/deal-history.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Car Rental History</h2>\r\n\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-bordered\" style=\"border: 1px solid black\">\r\n        <thead>\r\n          <tr>\r\n            <th>Request</th>\r\n            <th>Purpose</th>\r\n            <th style=\"width: 300px\">Title</th>\r\n            <th>Type</th>\r\n            <th>Departure</th>\r\n            <th>Destination</th>\r\n            <th>DepartDate</th>\r\n            <th>Offers</th>\r\n            <th>Post Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let carDeal of carDealsList\">\r\n          <tr>\r\n            <td>{{carDeal._id}}</td>\r\n            <td>\r\n              {{carDeal.dealtype}}\r\n            </td>\r\n            <td>{{carDeal.tittle}}</td>\r\n            <td>{{carDeal.dealtype}}</td>\r\n            <td>{{carDeal.fromlocation.locationname}}</td>\r\n            <td>{{carDeal.tolocation.locationname}}</td>\r\n            <td>{{carDeal.departureDate | date:'MM/dd/yyyy'}}</td>\r\n            <td>{{carDeal.bids.length}}</td>\r\n            <td>{{carDeal.createdDate | date:'MM/dd/yyyy'}} <a class=\"nav-link\" [routerLink]=\"['../deal-detail', carDeal._id]\">Deal Detail</a></td>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/deal-history/deal-history.component.ts":
/*!********************************************************!*\
  !*** ./src/app/deal-history/deal-history.component.ts ***!
  \********************************************************/
/*! exports provided: DealHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealHistoryComponent", function() { return DealHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DealHistoryComponent = /** @class */ (function () {
    function DealHistoryComponent(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('user'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (result) {
            // getting data from Back end
            _this.http.get("http://localhost:5000/API/dealList/" + result.name).subscribe(function (data) {
                console.log(data);
                _this.carDealsList = data;
            });
        });
    }
    DealHistoryComponent.prototype.ngOnInit = function () {
    };
    DealHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-history',
            template: __webpack_require__(/*! ./deal-history.component.html */ "./src/app/deal-history/deal-history.component.html"),
            styles: [__webpack_require__(/*! ./deal-history.component.css */ "./src/app/deal-history/deal-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DealHistoryComponent);
    return DealHistoryComponent;
}());



/***/ }),

/***/ "./src/app/deal-offer-his/deal-offer-his.component.css":
/*!*************************************************************!*\
  !*** ./src/app/deal-offer-his/deal-offer-his.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYWwtb2ZmZXItaGlzL2RlYWwtb2ZmZXItaGlzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/deal-offer-his/deal-offer-his.component.html":
/*!**************************************************************!*\
  !*** ./src/app/deal-offer-his/deal-offer-his.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Your Offer History</h2>\r\n\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-bordered\" style=\"border: 1px solid black\">\r\n        <thead>\r\n          <tr>\r\n            <th>Purpose</th>\r\n            <th style=\"width: 300px\">Title</th>\r\n            <th>Departure</th>\r\n            <th>Destination</th>\r\n            <th>DepartDate</th>\r\n            <th>Deal Status</th>\r\n            <th>Offer Price</th>\r\n            <th>Confirm</th>\r\n   \r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let carDeal of carDealsList\">\r\n          <tr>\r\n            <td>\r\n              {{carDeal.dealtype}}\r\n            </td>\r\n            <td>{{carDeal.tittle}}</td>\r\n            <td>{{carDeal.fromlocation.locationname}}</td>\r\n            <td>{{carDeal.tolocation.locationname}}</td>\r\n            <td>{{carDeal.departureDate | date:'MM/dd/yyyy'}}</td>\r\n            <td>{{carDeal.status}}</td>\r\n            <td>{{carDeal.bids.offerCost}}</td>\r\n            <td>{{carDeal.bids.isConfirmed}}</td>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/deal-offer-his/deal-offer-his.component.ts":
/*!************************************************************!*\
  !*** ./src/app/deal-offer-his/deal-offer-his.component.ts ***!
  \************************************************************/
/*! exports provided: DealOfferHisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealOfferHisComponent", function() { return DealOfferHisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cardeal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cardeal.service */ "./src/app/services/cardeal.service.ts");





var DealOfferHisComponent = /** @class */ (function () {
    function DealOfferHisComponent(carDealService, store) {
        var _this = this;
        this.carDealService = carDealService;
        this.store = store;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('user'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (result) {
            // getting data from Back end
            var driver = { 'drivername': result.name };
            _this.carDealService.getOfferHistory(driver).subscribe(function (data) {
                console.log(data);
                _this.carDealsList = data;
            });
        });
    }
    DealOfferHisComponent.prototype.ngOnInit = function () {
    };
    DealOfferHisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-offer-his',
            template: __webpack_require__(/*! ./deal-offer-his.component.html */ "./src/app/deal-offer-his/deal-offer-his.component.html"),
            styles: [__webpack_require__(/*! ./deal-offer-his.component.css */ "./src/app/deal-offer-his/deal-offer-his.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardeal_service__WEBPACK_IMPORTED_MODULE_4__["CardealService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DealOfferHisComponent);
    return DealOfferHisComponent;
}());



/***/ }),

/***/ "./src/app/deal-offer/deal-offer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/deal-offer/deal-offer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYWwtb2ZmZXIvZGVhbC1vZmZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/deal-offer/deal-offer.component.html":
/*!******************************************************!*\
  !*** ./src/app/deal-offer/deal-offer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Car Rental Offer</h2>\r\n  <div class=\"panel-group\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\"></div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div #gmap style=\"width:100%;height:400px\"></div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" *ngIf=\"dealDetail\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">Title : </div>\r\n              <div class=\"col-md-6\">{{dealDetail.tittle}}</div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">Deal Type : </div>\r\n              <div class=\"col-md-6\">{{dealDetail.dealtype}}</div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">From: </div>\r\n              <div class=\"col-md-6\">{{dealDetail.fromlocation.locationname}}</div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">Destination : </div>\r\n              <div class=\"col-md-6\">{{dealDetail.tolocation.locationname}}</div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">Departure Date : </div>\r\n              <div class=\"col-md-6\">{{dealDetail.departureDate | date:'MM/dd/yyyy'}}</div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">Offer Cost : </div>\r\n              <div class=\"col-md-6\">\r\n                <input value=\"\" #offerprice>\r\n                <button class=\"btn-xs btn-primary\" (click)=\"onSendOffer(offerprice)\">Send offer</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\"></div>\r\n              <div class=\"col-md-6\">\r\n                {{msg}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/deal-offer/deal-offer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deal-offer/deal-offer.component.ts ***!
  \****************************************************/
/*! exports provided: DealOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealOfferComponent", function() { return DealOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cardeal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cardeal.service */ "./src/app/services/cardeal.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var DealOfferComponent = /** @class */ (function () {
    function DealOfferComponent(carDealService, store) {
        var _this = this;
        this.carDealService = carDealService;
        this.store = store;
        this.OfferPrice = 0;
        this.requestID = '';
        this.msg = '';
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('user')).subscribe(function (value) {
            _this.username = value.name;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('deal')).subscribe(function (value) {
            _this.dealID = value.selected_deal;
            _this.carDealService.getDealDetail(value.selected_deal).subscribe(function (result) {
                _this.dealDetail = result;
                var mapProp = {
                    center: new google.maps.LatLng(_this.dealDetail.fromlocation.coordinate.x, _this.dealDetail.fromlocation.coordinate.y),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.gmapElement.nativeElement, mapProp);
            });
        });
    }
    DealOfferComponent.prototype.onSendOffer = function (price) {
        var _this = this;
        console.log(price.value);
        if (price.value === '' || isNaN(Number(price.value))) {
            this.msg = 'Please input offer price';
            return;
        }
        var bid = {
            _id: this.dealID,
            diverID: this.username,
            driverName: this.username,
            offerCost: price.value
        };
        this.carDealService.carDealOffer(bid).subscribe(function (data) {
            _this.msg = 'Your offer was send';
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('offerprice'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DealOfferComponent.prototype, "OfferPrice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DealOfferComponent.prototype, "gmapElement", void 0);
    DealOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-offer',
            template: __webpack_require__(/*! ./deal-offer.component.html */ "./src/app/deal-offer/deal-offer.component.html"),
            styles: [__webpack_require__(/*! ./deal-offer.component.css */ "./src/app/deal-offer/deal-offer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardeal_service__WEBPACK_IMPORTED_MODULE_2__["CardealService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DealOfferComponent);
    return DealOfferComponent;
}());



/***/ }),

/***/ "./src/app/dealsearch/dealsearch.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dealsearch/dealsearch.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzZWFyY2gvZGVhbHNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dealsearch/dealsearch.component.html":
/*!******************************************************!*\
  !*** ./src/app/dealsearch/dealsearch.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h2>Car Rental Search</h2>\r\n\r\n  <div class=\"panel-group\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-body\"></div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\" style=\"margin: 5px\">\r\n          <div class=\"col-md-3\">\r\n            <select class=\"form-control\" (change)=\"onchangetype($event)\">\r\n              <option value=\"\">All</option>\r\n              <option value=\"Travel\">Travel</option>\r\n              <option value=\"Cargo\">Cargo</option>\r\n              <option value=\"Business\">Business\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <select class=\"form-control\" (change)=\"onchangeFrom($event)\">\r\n              <option value=\"\">All</option>\r\n              <option *ngFor=\"let location of locations\" value={{location.name}}>{{location.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <select class=\"form-control\" (change)=\"onchangeTo($event)\">\r\n              <option value=\"\">All</option>\r\n              <option *ngFor=\"let location of locations\" value={{location.name}}>{{location.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <button type=\"button\" class=\" btn btn-primary\" (click)=\"onSearch()\">\r\n              Search\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin: 5px\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width: 300px\">Tittle</th>\r\n                <th>Type</th>\r\n                <th>Departure</th>\r\n                <th>Destination</th>\r\n                <th>DepartDate</th>\r\n                <th>Offers</th>\r\n                <th>Post Date</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let post of cardealList\">\r\n              <tr>\r\n                <td>{{post.tittle}}</td>\r\n                <td>{{post.dealtype}}</td>\r\n                <td>{{post.fromlocation.locationname}}</td>\r\n                <td>{{post.tolocation.locationname}}</td>\r\n                <td>{{post.departureDate | date:'MM/dd/yyyy'}}</td>\r\n                <td>{{post.bids.length}}</td>\r\n                <td>{{post.createdDate | date:'MM/dd/yyyy'}}</td>\r\n                <td>\r\n                  <button value={{post._id}} (click)=\"onOffer($event)\">offer</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dealsearch/dealsearch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dealsearch/dealsearch.component.ts ***!
  \****************************************************/
/*! exports provided: DealsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsearchComponent", function() { return DealsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cardeal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cardeal.service */ "./src/app/services/cardeal.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_dealtransfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dealtransfer.service */ "./src/app/services/dealtransfer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_deal_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/deal.actions */ "./src/app/actions/deal.actions.ts");








var DealsearchComponent = /** @class */ (function () {
    function DealsearchComponent(carDealService, locationService, router, store, transferService) {
        var _this = this;
        this.carDealService = carDealService;
        this.locationService = locationService;
        this.router = router;
        this.store = store;
        this.transferService = transferService;
        this.typeParam = '0';
        this.fromLocationParam = '0';
        this.toLocationParam = '0';
        this.errorMsg = '';
        this.locationService.getLocationList().subscribe(function (data) {
            _this.locations = data;
        });
    }
    DealsearchComponent.prototype.ngOnInit = function () {
    };
    DealsearchComponent.prototype.onSearch = function () {
        var _this = this;
        var params = {
            dealtype: this.typeParam,
            locationfrom: this.fromLocationParam,
            locationto: this.toLocationParam
        };
        this.carDealService.getCarDealList(params).subscribe(function (data) {
            if (data.length == 0) {
                _this.errorMsg = 'Data was not found';
            }
            else {
                _this.errorMsg = '';
                _this.cardealList = data;
            }
        });
    };
    DealsearchComponent.prototype.onchangetype = function (event) {
        this.typeParam = event.target.value;
    };
    DealsearchComponent.prototype.onchangeFrom = function (event) {
        this.fromLocationParam = event.target.value;
    };
    DealsearchComponent.prototype.onchangeTo = function (event) {
        this.toLocationParam = event.target.value;
    };
    DealsearchComponent.prototype.onOffer = function (event) {
        var requestID = event.target.value;
        console.log(requestID);
        this.store.dispatch(new _actions_deal_actions__WEBPACK_IMPORTED_MODULE_7__["SelectDeal"](requestID));
        this.router.navigate(['deal-offer']);
    };
    DealsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dealsearch',
            template: __webpack_require__(/*! ./dealsearch.component.html */ "./src/app/dealsearch/dealsearch.component.html"),
            styles: [__webpack_require__(/*! ./dealsearch.component.css */ "./src/app/dealsearch/dealsearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardeal_service__WEBPACK_IMPORTED_MODULE_2__["CardealService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _services_dealtransfer_service__WEBPACK_IMPORTED_MODULE_4__["DealtransferService"]])
    ], DealsearchComponent);
    return DealsearchComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var token = window.localStorage.getItem('token');
        if (token === null) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/userType.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/userType.guard.ts ***!
  \******************************************/
/*! exports provided: UserTypeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeGuard", function() { return UserTypeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var UserTypeGuard = /** @class */ (function () {
    function UserTypeGuard(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('user'));
        this.user$.subscribe(function (user) {
            _this.user = user;
        });
    }
    UserTypeGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    UserTypeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], UserTypeGuard);
    return UserTypeGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['home']\">\r\n      <!-- <img src=\"assets/images/logo.jpg\" width=\"150\" height=\"80\" alt=\"\"> -->\r\n      CAR RENTAL SERVICE\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"user$ | async as user\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['home']\"></a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"user.userType === 'user'\">\r\n          <a class=\"nav-link\" [routerLink]=\"['deal-create']\">Create Deal </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"user.userType === 'user'\">\r\n          <a class=\"nav-link\" [routerLink]=\"['deal-history']\">Your Deal</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"user.userType === 'driver'\">\r\n          <a class=\"nav-link\" [routerLink]=\"['deal-search']\">Search Car rental </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"user.userType === 'driver'\">\r\n          <a class=\"nav-link\" [routerLink]=\"['deal-offer-his']\">Your Offer </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"user.name === ''\">\r\n          <a class=\"nav-link\" [routerLink]=\"['login']\">Login </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"user.name !== ''\">\r\n          <a class=\"nav-link\" [routerLink]=\"['logout']\">Logout </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('user'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 500px;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.imgContainer {\r\n    margin-bottom: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5pbWdDb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1></h1>\r\n<div class=\"imgContainer\">\r\n  <img src=\"../../assets/img/action-american-car-asphalt.jpg\" alt=\"image\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\"\r\n          alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167c4d888c8%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167c4d888c8%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\r\n          data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\r\n            content. This content is a little bit longer.</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\"\r\n          alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167c4d888c8%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167c4d888c8%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\r\n          data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\r\n            content. This content is a little bit longer.</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\"\r\n          alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167c4d888c8%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167c4d888c8%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\r\n          data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\r\n            content. This content is a little bit longer.</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-center {\r\n  margin: 128px auto 0px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaC1jZW50ZXIge1xyXG4gIG1hcmdpbjogMTI4cHggYXV0byAwcHggYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card h-center\" style=\"width: 600px;\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Login</h5>\r\n\r\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errMessage\">\r\n        {{errMessage}}\r\n      </div>\r\n\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\"\r\n            placeholder=\"Enter email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\r\n        <div>\r\n          <p>Or<a style=\"display:inline\" class=\"nav-link\" [routerLink]=\"['../signup']\">Sign up here</a></p>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    //Store - Redux's store
    function LoginComponent(router, http, formBuilder, store) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.store = store;
        this.loginForm = this.formBuilder.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.post('http://localhost:5000/API/user/login', this.loginForm.value).subscribe(function (result) {
            if (result.success == true) {
                window.localStorage.setItem('token', result.token);
                var name_1 = result.name, userType = result.userType;
                _this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Login"]({
                    name: name_1,
                    userType: userType
                }));
                if (userType == 'driver') {
                    _this.router.navigate(['deal-search']);
                }
                else {
                    _this.router.navigate(['deal-history']);
                }
            }
        }, function (err) {
            _this.errMessage = err.error.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["Logout"]());
        window.localStorage.removeItem('token');
        this.router.navigate(['']);
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: '',
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/reducers/deal.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/deal.reducer.ts ***!
  \******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_deal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/deal.actions */ "./src/app/actions/deal.actions.ts");


;
var initialState = {
    selected_deal: ''
    // 5c17cfec23cb4529748b0d60
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_deal_actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_DEAL"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { selected_deal: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, localStorageSyncReducer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");
/* harmony import */ var _deal_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal.reducer */ "./src/app/reducers/deal.reducer.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    deal: _deal_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__["localStorageSync"])({
        keys: ['user'],
        rehydrate: true
    })(reducer);
}
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? [localStorageSyncReducer] : [localStorageSyncReducer];


/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");

;
var initialState = {
    name: '',
    userType: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]:
            return Object.assign({}, state, action.payload);
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
            return { name: "", userType: "" };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/cardeal.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cardeal.service.ts ***!
  \*********************************************/
/*! exports provided: CardealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardealService", function() { return CardealService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CardealService = /** @class */ (function () {
    function CardealService(http) {
        this.http = http;
    }
    CardealService.prototype.getCarDealList = function (searchParams) {
        return this.http.post('http://localhost:5000/API/CarDealSearch', searchParams);
    };
    CardealService.prototype.searchCarDealList = function () {
        return this.http.get('http://localhost:5000/API/CarDealList');
    };
    CardealService.prototype.carDealOffer = function (OfferParams) {
        return this.http.patch('http://localhost:5000/API/OfferCost', OfferParams);
    };
    CardealService.prototype.getDealDetail = function (reqID) {
        return this.http.get('http://localhost:5000/API/CarDeal/' + reqID);
    };
    CardealService.prototype.getOfferHistory = function (username) {
        return this.http.post('http://localhost:5000/API/OfferHistory', username);
    };
    CardealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardealService);
    return CardealService;
}());



/***/ }),

/***/ "./src/app/services/dealtransfer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/dealtransfer.service.ts ***!
  \**************************************************/
/*! exports provided: DealtransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealtransferService", function() { return DealtransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DealtransferService = /** @class */ (function () {
    function DealtransferService() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DealtransferService.prototype.emitvalue = function (value) {
        this.emitter.emit(value);
    };
    DealtransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DealtransferService);
    return DealtransferService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.post = function (url, data, option) {
        if (option === void 0) { option = {}; }
        return this.http.post(url, data, option);
    };
    HttpService.prototype.patch = function (url, data, option) {
        if (option === void 0) { option = {}; }
        return this.http.patch(url, data, option);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.getLocationList = function () {
        return this.http.get('http://localhost:5000/API/location/getAll');
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = window.localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + token,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-center {\r\n  margin: 128px auto 0px auto;\r\n}\r\n\r\n.success {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  z-index: 999999;\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  flex-direction: column;\r\n\r\n  background-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCx3QkFBd0I7RUFDeEIsb0JBQW9COztFQUVwQix1QkFBdUI7O0VBRXZCLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLWNlbnRlciB7XHJcbiAgbWFyZ2luOiAxMjhweCBhdXRvIDBweCBhdXRvO1xyXG59XHJcblxyXG4uc3VjY2VzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card h-center\" style=\"width: 600px;\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Sign up</h5>\r\n\r\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errMessage\">\r\n        {{errMessage}}\r\n      </div>\r\n\r\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\"\r\n            placeholder=\"Enter name\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\"\r\n            placeholder=\"Enter email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"userType\">User Type</label>\r\n          <select id=\"userType\" class=\"form-control\" formControlName=\"userType\">\r\n            <option value=\"user\" selected>User</option>\r\n            <option value=\"driver\">Driver</option>\r\n          </select>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"success\" class=\"success\">\r\n  <img src=\"https://cdn2.iconfinder.com/data/icons/greenline/512/check-128.png\" alt=\"success image\" />\r\n  <h1 class=\"display-4\">Sucessfully registered</h1>\r\n  <a style=\"display:inline\" class=\"nav-link\" [routerLink]=\"['../login']\">Login here</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    //Store - Redux's store
    function SignupComponent(router, http, formBuilder) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.success = false;
        this.signupForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'userType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signupForm.value);
        this.http.post('http://localhost:5000/API/user/signup', this.signupForm.value).subscribe(function (result) {
            _this.success = true;
        }, function (err) {
            _this.errMessage = err.error.message;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<p>ddd</p>\r\n<p>ddd</p>\r\n<p>ddd</p>\r\n<p>ddd</p>\r\n<input [value]=\"message\" (input)=\"message=$event.target.value\">\r\n<input value=\"abc\" #myname>\r\n<button (click)=\"SayMyname(myname)\">say name</button>\r\n\r\n<p (click)=\"dosomething()\">Name : {{message}}</p> \r\n\r\n<ng-content></ng-content>\r\n\r\n\r\n<button (click)=\"getContent()\">get content child</button>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.message = 'Default';
        this.ontest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TestComponent.prototype.dosomething = function () {
        this.ontest.emit({
            name: 'thai',
            age: 36
        });
    };
    TestComponent.prototype.SayMyname = function (name) {
        console.log(name.value);
    };
    TestComponent.prototype.getContent = function () {
        console.log(this.contentchildObj.nativeElement.textContent);
    };
    TestComponent.prototype.ngOnChanges = function (change) {
        console.log("change");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TestComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TestComponent.prototype, "ontest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myname'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TestComponent.prototype, "myfullname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('contentchild1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestComponent.prototype, "contentchildObj", void 0);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Study\MWA_project_car_rental\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map