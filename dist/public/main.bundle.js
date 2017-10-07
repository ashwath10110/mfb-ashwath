webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">About</h4>\n  <div class=\"card-block\">\n    <ul>\n      <li><b>Author:</b> <a href=\"https://github.com/DavideViolante\" target=\"_blank\">Davide Violante</a></li>\n      <li><b>GitHub:</b> <a href=\"https://github.com/DavideViolante/Angular-Full-Stack\" target=\"_blank\">project repository</a></li>\n      <li><b>This project uses the MEAN stack:</b></li>\n      <ul>\n        <li><a href=\"http://www.mongoosejs.com\" target=\"_blank\"><b>M</b>ongoose.js</a> (<a href=\"https://www.mongodb.com\" target=\"_blank\">MongoDB</a>)</li>\n        <li><a href=\"http://www.expressjs.com\" target=\"_blank\"><b>E</b>xpress.js</a></li>\n        <li><a href=\"https://www.angular.io\" target=\"_blank\"><b>A</b>ngular 2+</a></li>\n        <li><a href=\"https://www.nodejs.org\" target=\"_blank\"><b>N</b>ode.js</a></li>\n      </ul>\n      <li><b>Other tools and technologies used:</b></li>\n      <ul>\n        <li><a href=\"https://cli.angular.io\" target=\"_blank\">Angular CLI</a></li>\n        <li><a href=\"http://www.getbootstrap.com\" target=\"_blank\">Bootstrap</a></li>\n        <li><a href=\"http://www.fontawesome.io\" target=\"_blank\">Font Awesome</a></li>\n        <li><a href=\"https://jwt.io\" target=\"_blank\">JSON Web Token</a></li>\n        <li><a href=\"https://github.com/auth0/angular2-jwt\" target=\"_blank\">Angular 2 JWT</a></li>\n        <li><a href=\"https://github.com/dcodeIO/bcrypt.js\" target=\"_blank\">Bcrypt.js</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../client/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../client/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../client/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../client/app/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Username</th>\n          <th>Email</th>\n          <th>Role</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"users.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no registered users.</td>\n        </tr>  \n      </tbody>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.username}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </td>\n        </tr>  \n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <app-navbar></app-navbar>\n  <app-tabs></app-tabs>\n\n  <router-outlet></router-outlet>\n<!-- <app-root1></app-root1> -->\n\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_exotic_vegetables_service__ = __webpack_require__("../../../../../client/app/services/exotic-vegetables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__exotic_vegetables_exotic_vegetables_component__ = __webpack_require__("../../../../../client/app/exotic-vegetables/exotic-vegetables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__items_items_component__ = __webpack_require__("../../../../../client/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__leafy_green_vegetables_leafy_green_vegetables_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tabs_tabs_component__ = __webpack_require__("../../../../../client/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__navbar_navbar_component__ = __webpack_require__("../../../../../client/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__footer_footer_component__ = __webpack_require__("../../../../../client/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__carousal_carousal_component__ = __webpack_require__("../../../../../client/app/carousal/carousal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__checkout_checkout_component__ = __webpack_require__("../../../../../client/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__leafy_green_vegetables_search_bar_search_bar_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__leafy_green_vegetables_filters_filters_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__leafy_green_vegetables_showcase_showcase_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__leafy_green_vegetables_cart_cart_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__leafy_green_vegetables_product_product_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__leafy_green_vegetables_product_thumbnail_product_thumbnail_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__leafy_green_vegetables_cart_preview_cart_preview_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__leafy_green_vegetables_data_shell_data_shell_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__leafy_green_vegetables_sort_filters_sort_filters_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__leafy_green_vegetables_data_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__leafy_green_vegetables_cart_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__leafy_green_vegetables_url_form_url_form_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { App1Component } from './leafy-green-vegetables/app.component';


















// import { AppModule1 } from './leafy-green-vegetables/app.module';
// import { DataService } from './leafy-green-vegetables/data.service';
// import { CartService } from './leafy-green-vegetables/cart.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cats_cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_22__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_23__exotic_vegetables_exotic_vegetables_component__["a" /* ExoticVegetablesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_28__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_25__leafy_green_vegetables_leafy_green_vegetables_component__["a" /* LeafyGreenVegetablesComponent */],
            __WEBPACK_IMPORTED_MODULE_32__leafy_green_vegetables_search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_33__leafy_green_vegetables_filters_filters_component__["a" /* FiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_34__leafy_green_vegetables_showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_35__leafy_green_vegetables_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_36__leafy_green_vegetables_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_37__leafy_green_vegetables_product_thumbnail_product_thumbnail_component__["a" /* ProductThumbnailComponent */],
            __WEBPACK_IMPORTED_MODULE_38__leafy_green_vegetables_cart_preview_cart_preview_component__["a" /* CartPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_39__leafy_green_vegetables_data_shell_data_shell_component__["a" /* DataShellComponent */],
            __WEBPACK_IMPORTED_MODULE_40__leafy_green_vegetables_sort_filters_sort_filters_component__["a" /* SortFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_43__leafy_green_vegetables_url_form_url_form_component__["a" /* UrlFormComponent */],
            __WEBPACK_IMPORTED_MODULE_31__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_30__carousal_carousal_component__["a" /* CarousalComponent */],
            __WEBPACK_IMPORTED_MODULE_29__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__items_items_component__["a" /* ItemsComponent */]
            // App1Component
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
            __WEBPACK_IMPORTED_MODULE_6__services_cat_service__["a" /* CatService */],
            __WEBPACK_IMPORTED_MODULE_7__services_exotic_vegetables_service__["a" /* ExoticVegetablesService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_41__leafy_green_vegetables_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_42__leafy_green_vegetables_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
        this.selectedTab = 'Home';
        this.currentUser = {
            name: 'Ashwath',
            tokenId: '123',
            tokenForLocalStorage: 'mfb-storage'
        };
    }
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Los Angeles\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Chicago\" style=\"width:100%;\">\n      </div>\n    \n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"New york\" style=\"width:100%;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarousalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarousalComponent = (function () {
    function CarousalComponent() {
    }
    CarousalComponent.prototype.ngOnInit = function () {
    };
    return CarousalComponent;
}());
CarousalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carousal',
        template: __webpack_require__("../../../../../client/app/carousal/carousal.component.html"),
        styles: [__webpack_require__("../../../../../client/app/carousal/carousal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarousalComponent);

//# sourceMappingURL=carousal.component.js.map

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current cats ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"cats.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no cats in the DB. Add a new cat below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of cats\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"cat.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new cat</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatsComponent = (function () {
    function CatsComponent(catService, formBuilder, http, toast) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.cat = {};
        this.cats = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (data) { return _this.cats = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CatsComponent.prototype.addCat = function () {
        var _this = this;
        this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.enableEditing = function (cat) {
        this.isEditing = true;
        this.cat = cat;
    };
    CatsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats();
    };
    CatsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats',
        template: __webpack_require__("../../../../../client/app/cats/cats.component.html"),
        styles: [__webpack_require__("../../../../../client/app/cats/cats.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], CatsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t<h1>PayU Screen</h1>\n</div>"

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../client/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../client/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckoutComponent);

//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../client/app/exotic-vegetables/exotic-vegetables.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Exotic Vegetables ({{leafyGreenVegetables.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"leafyGreenVegetables.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no Exotic Vegetables in the DB. Add a new Exotic Vegetables below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of leafyGreenVegetables\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteLeafyGreenVegetable(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editLeafyGreenVegetable(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"leafyGreenVegetable.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"leafyGreenVegetable.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new Exotic Vegetable</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addLeafyGreenVegetable()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/exotic-vegetables/exotic-vegetables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExoticVegetablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_exotic_vegetables_service__ = __webpack_require__("../../../../../client/app/services/exotic-vegetables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExoticVegetablesComponent = (function () {
    function ExoticVegetablesComponent(exoticVegetablesService, formBuilder, http, toast) {
        this.exoticVegetablesService = exoticVegetablesService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.leafyGreenVegetable = {};
        this.leafyGreenVegetables = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
    }
    ExoticVegetablesComponent.prototype.ngOnInit = function () {
        this.getLeafyGreenVegetables();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    ExoticVegetablesComponent.prototype.getLeafyGreenVegetables = function () {
        var _this = this;
        this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(function (data) { return _this.leafyGreenVegetables = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ExoticVegetablesComponent.prototype.addLeafyGreenVegetable = function () {
        var _this = this;
        this.exoticVegetablesService.addLeafyGreenVegetable(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.leafyGreenVegetables.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ExoticVegetablesComponent.prototype.enableEditing = function (leafyGreenVegetable) {
        this.isEditing = true;
        this.leafyGreenVegetable = leafyGreenVegetable;
    };
    ExoticVegetablesComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.leafyGreenVegetable = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getLeafyGreenVegetables();
    };
    ExoticVegetablesComponent.prototype.editLeafyGreenVegetable = function (leafyGreenVegetable) {
        var _this = this;
        this.exoticVegetablesService.editLeafyGreenVegetable(leafyGreenVegetable).subscribe(function (res) {
            _this.isEditing = false;
            _this.leafyGreenVegetable = leafyGreenVegetable;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ExoticVegetablesComponent.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetable) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(function (res) {
                var pos = _this.leafyGreenVegetables.map(function (elem) { return elem._id; }).indexOf(leafyGreenVegetable._id);
                _this.leafyGreenVegetables.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return ExoticVegetablesComponent;
}());
ExoticVegetablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats1',
        template: __webpack_require__("../../../../../client/app/exotic-vegetables/exotic-vegetables.component.html"),
        styles: [__webpack_require__("../../../../../client/app/exotic-vegetables/exotic-vegetables.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_exotic_vegetables_service__["a" /* ExoticVegetablesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_exotic_vegetables_service__["a" /* ExoticVegetablesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], ExoticVegetablesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=exotic-vegetables.component.js.map

/***/ }),

/***/ "../../../../../client/app/exotic-vegetables/exotic-vegetables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../client/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../client/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousal></app-carousal>\n\n<!-- <div class=\"col-md-6 col-md-offset-3\">\n    <h1>Home</h1>\n    <p>You're logged in with JWT!!</p>\n    <div>\n        Users from secure api end point:\n        <ul>\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n        </ul>\n    </div>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div> -->"

/***/ }),

/***/ "../../../../../client/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { User } from '../../_models/user';
// import { UserService } from '../../_services/user.service';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../client/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../client/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Items ({{leafyGreenVegetables.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>countPerKg</th>\n          <th>averageWeightPerPiece</th>\n          <th>price</th>\n          <th>available</th>\n          <th>description</th>\n          <th>imageForShowCase</th>\n          <th>imageForCart</th>\n          \n        </tr>\n      </thead>\n      <tbody *ngIf=\"leafyGreenVegetables.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no items in the DB. Add a new item below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of leafyGreenVegetables\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.type}}</td>\n          <td>{{cat.countPerKg}}</td>\n          <td>{{cat.averageWeightPerPiece}}</td>\n          <td>{{cat.price}}</td>\n          <td>{{cat.available}}</td>\n          <td>{{cat.description}}</td>\n          \n          <td><img [src]=\"cat.imageForShowCase\"/></td>\n          <td><img [src]=\"cat.imageForCart\"/></td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteLeafyGreenVegetable(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editLeafyGreenVegetable(leafyGreenVegetable)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"type\" [(ngModel)]=\"leafyGreenVegetable.type\" placeholder=\"type\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"countPerKg\" [(ngModel)]=\"leafyGreenVegetable.countPerKg\" placeholder=\"countPerKg\" required>\n              </div>                            \n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"averageWeightPerPiece\" [(ngModel)]=\"leafyGreenVegetable.averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"price\" [(ngModel)]=\"leafyGreenVegetable.price\" placeholder=\"price\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"available\" [(ngModel)]=\"leafyGreenVegetable.available\" placeholder=\"available\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"leafyGreenVegetable.description\" placeholder=\"description\" required>\n              </div>\n              \n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new Exotic Vegetable</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addLeafyGreenVegetable()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"type\" formControlName=\"type\" placeholder=\"type\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"countPerKg\" formControlName=\"countPerKg\" placeholder=\"countPerKg\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"averageWeightPerPiece\" formControlName=\"averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\">\n      </div>  \n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"price\" formControlName=\"price\" placeholder=\"price\">\n      </div>\n       <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"available\" formControlName=\"available\" placeholder=\"available\">\n      </div>\n       <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"description\" formControlName=\"description\" placeholder=\"description\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" ><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemsComponent = (function () {
    function ItemsComponent(exoticVegetablesService, formBuilder, http, toast) {
        this.exoticVegetablesService = exoticVegetablesService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.leafyGreenVegetable = {};
        this.leafyGreenVegetables = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.type = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.countPerKg = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.averageWeightPerPiece = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.price = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.available = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.description = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.imageHolder = [];
    }
    ItemsComponent.prototype.imageChange = function (input, i) {
        var _this = this;
        var files = (input.target.files[0]);
        this.imageHolder[i] = window.URL.createObjectURL(input.target.files[0]);
        var reader = new FileReader();
        reader.addEventListener("load", function (event) {
            _this.imageHolder[i] = event.target.result;
        }, false);
        reader.readAsDataURL(input.target.files[0]);
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.getLeafyGreenVegetables();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            type: this.type,
            countPerKg: this.countPerKg,
            averageWeightPerPiece: this.averageWeightPerPiece,
            price: this.price,
            available: this.available,
            description: this.description
        });
    };
    ItemsComponent.prototype.getLeafyGreenVegetables = function () {
        var _this = this;
        this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(function (data) { return _this.leafyGreenVegetables = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ItemsComponent.prototype.addLeafyGreenVegetable = function () {
        var _this = this;
        var cat = this.addCatForm.value;
        cat.imageForShowCase = this.imageHolder[1];
        cat.imageForCart = this.imageHolder[2];
        this.exoticVegetablesService.addLeafyGreenVegetable(cat).subscribe(function (res) {
            var newCat = res.json();
            _this.leafyGreenVegetables.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ItemsComponent.prototype.enableEditing = function (leafyGreenVegetable) {
        this.isEditing = true;
        this.leafyGreenVegetable = leafyGreenVegetable;
    };
    ItemsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.leafyGreenVegetable = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getLeafyGreenVegetables();
    };
    ItemsComponent.prototype.editLeafyGreenVegetable = function (cat) {
        var _this = this;
        cat.imageForShowCase = this.imageHolder[1];
        cat.imageForCart = this.imageHolder[2];
        this.exoticVegetablesService.editLeafyGreenVegetable(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.leafyGreenVegetable = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ItemsComponent.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetable) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(function (res) {
                var pos = _this.leafyGreenVegetables.map(function (elem) { return elem._id; }).indexOf(leafyGreenVegetable._id);
                _this.leafyGreenVegetables.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return ItemsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])("fileInput"),
    __metadata("design:type", Object)
], ItemsComponent.prototype, "fileInput", void 0);
ItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-items',
        template: __webpack_require__("../../../../../client/app/items/items.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/items.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], ItemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=items.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/items.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart-preview works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartPreviewComponent = (function () {
    function CartPreviewComponent() {
    }
    CartPreviewComponent.prototype.ngOnInit = function () {
    };
    return CartPreviewComponent;
}());
CartPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart-preview',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/cart-preview/cart-preview.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CartPreviewComponent);

//# sourceMappingURL=cart-preview.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService() {
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.productAdded$ = this.productAddedSource.asObservable();
    }
    CartService.prototype.addProductToCart = function (product) {
        var exists = false;
        var parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
        this.cartTotal += parsedPrice;
        //Search this product on the cart and increment the quantity
        this.products = this.products.map(function (_product) {
            if (_product.product.id == product.id) {
                _product.quantity++;
                exists = true;
            }
            return _product;
        });
        //Add a new product to the cart if it's a new product
        if (!exists) {
            product.parsedPrice = parsedPrice;
            this.products.push({
                product: product,
                quantity: 1
            });
        }
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.deleteProductFromCart = function (product) {
        var _this = this;
        this.products = this.products.filter(function (_product) {
            if (_product.product.id == product.id) {
                _this.cartTotal -= _product.product.parsedPrice * _product.quantity;
                return false;
            }
            return true;
        });
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.flushCart = function () {
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CartService);

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" [class.expanded]='expanded'>\n  <button [class.not-shown]='!products.length || expanded' type=\"button\" class=\"circle\" (click)=\"onCartClick()\">\n    <img src=\"../../assets/cart_white.svg\" alt=\"cart\" />\n    <div class=\"indicator\"><span>{{numProducts}}</span></div>\n  </button>\n  <div class=\"fill\" [style.height]=\"expanded ? expandedHeight : 'inherit'\" [class.not-shown]='!products.length' [class.animate-plop]='animatePlop' [class.shown]='animatePopout && !expanded'>\n    <div class=\"expanded-info\" [class.shown]='expanded'>\n      <h3>This is what you're gonna buy...</h3>\n      <div class=\"product\" *ngFor=\"let item of products\">\n        <div class=\"row\">\n          <div class=\"col-6-sm description\">\n            <p>{{item.quantity}} x {{item.product.name}}</p>\n          </div>\n          <div class=\"col-6-sm price\">\n            <p>{{item.quantity*item.product.parsedPrice | currency:'USD':true:'1.0-0' }}</p>\n          </div>\n        </div>\n        <button class=\"delete-btn\" (click) = 'deleteProduct(item.product)'>x</button>\n      </div>\n      <button type=\"button\" class=\"pay-btn\" (click) = 'checkout()'>Pay {{cartTotal | currency:'USD':true:'1.0-0'}}</button>\n    </div>\n    <button type=\"button\" class=\"close-btn\" *ngIf='expanded' (click)=\"onCartClick()\">Close</button>\n  </div>\n</div>\n<div class=\"overlay\" [class.shown]='expanded'>\n\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview {\n  position: relative; }\n  .preview .fill {\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.close-btn {\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 0.7em;\n  font-weight: 600;\n  text-decoration: underline;\n  opacity: 0.8; }\n  .close-btn:hover {\n    opacity: 1; }\n\n.pay-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 44px;\n  height: 44px;\n  padding: 0 25px;\n  border: none;\n  background-color: #EF364C;\n  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.32);\n  color: white;\n  font-weight: 600;\n  margin-top: 20px; }\n\n.expanded-info {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: white;\n  width: 80%;\n  margin: 0 auto; }\n  .expanded-info .product, .expanded-info h3, .expanded-info .pay-btn {\n    opacity: 0;\n    transform: translateY(10px);\n    -webkit-transform: translateY(10px);\n    transition: all 0.5s ease; }\n  .expanded-info .price {\n    text-align: right; }\n  .expanded-info.shown {\n    opacity: 1;\n    z-index: 3; }\n    .expanded-info.shown .product, .expanded-info.shown h3, .expanded-info.shown .pay-btn {\n      transform: translateY(0);\n      -webkit-transform: translateY(0); }\n    .expanded-info.shown h3 {\n      transition-delay: 0.2s;\n      opacity: 0.43; }\n    .expanded-info.shown .product {\n      transition-delay: 0.4s;\n      opacity: 1; }\n    .expanded-info.shown .pay-btn {\n      transition-delay: 0.6s;\n      opacity: 1; }\n  .expanded-info h3 {\n    font-weight: 400;\n    font-size: 16px;\n    margin-top: 30px; }\n  .expanded-info .product {\n    position: relative;\n    width: 95%; }\n    .expanded-info .product p {\n      margin: 0; }\n    .expanded-info .product:not(:last-child) {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n    .expanded-info .product .delete-btn {\n      position: absolute;\n      right: -28px;\n      top: 14px;\n      background: none;\n      border: none;\n      opacity: 0.6;\n      color: white;\n      font-weight: 600;\n      font-size: 0.8em; }\n      .expanded-info .product .delete-btn:hover {\n        opacity: 0.8; }\n\n.preview.expanded .fill {\n  width: 460px;\n  border-radius: 3px;\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.49); }\n  .preview.expanded .fill.animate-plop {\n    -webkit-transform: scale(1.02);\n    transform: scale(1.02); }\n\n.preview:not(.expanded) .fill:hover {\n  box-shadow: 0 2px 13px rgba(49, 46, 82, 0.65); }\n\n.preview .fill {\n  height: 40px;\n  width: 40px;\n  box-shadow: 0 2px 13px rgba(93, 78, 240, 0.55);\n  background: #5D4EF0;\n  border-radius: 50px;\n  z-index: 4;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .fill.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  .preview .fill.shown {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3); }\n  .preview .fill.animate-plop {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n\n.preview .circle {\n  height: 40px;\n  width: 40px;\n  border: none;\n  padding: 0;\n  border-radius: 50px;\n  position: relative;\n  z-index: 5;\n  background: none;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .circle img {\n    position: relative;\n    top: 3px;\n    left: -1px; }\n  .preview .circle.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n\n.preview .indicator {\n  background-color: #EF364C;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  color: white;\n  position: absolute;\n  top: -3px;\n  font-size: 0.6em;\n  right: 0;\n  font-weight: 700;\n  text-align: center; }\n  .preview .indicator span {\n    position: relative;\n    top: 1px; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  background-color: rgba(0, 0, 0, 0.7); }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .overlay.shown {\n    height: 100%;\n    opacity: 1;\n    z-index: 9; }\n  .pay-btn {\n    margin-top: 35px; }\n  .close-btn {\n    z-index: 90; }\n  .description p, .price p {\n    font-size: 1em; }\n  .expanded-info {\n    width: 90%; }\n    .expanded-info h3 {\n      font-size: 0.9em; }\n    .expanded-info .product .delete-btn {\n      right: -21px;\n      top: 10px; }\n  .preview {\n    position: fixed;\n    bottom: 3%;\n    right: 5%;\n    width: 13%;\n    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .preview .fill {\n      box-shadow: 0 2px 13px rgba(93, 78, 240, 0.75); }\n    .preview.expanded {\n      width: 90%;\n      margin: 0 auto;\n      bottom: 75%;\n      z-index: 800; }\n      .preview.expanded .fill {\n        width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OFFSET_HEIGHT = 170;
var PRODUCT_HEIGHT = 48;
var CartComponent = (function () {
    function CartComponent(cartService, changeDetectorRef) {
        this.cartService = cartService;
        this.products = [];
        this.numProducts = 0;
        this.animatePlop = false;
        this.animatePopout = false;
        this.expanded = false;
        this.cartTotal = 0;
        this.changeDetectorRef = changeDetectorRef;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expandedHeight = '0';
        this.cartService.productAdded$.subscribe(function (data) {
            _this.products = data.products;
            _this.cartTotal = data.cartTotal;
            _this.numProducts = data.products.reduce(function (acc, product) {
                acc += product.quantity;
                return acc;
            }, 0);
            //Make a plop animation
            if (_this.numProducts > 1) {
                _this.animatePlop = true;
                setTimeout(function () {
                    _this.animatePlop = false;
                }, 160);
            }
            else if (_this.numProducts == 1) {
                _this.animatePopout = true;
                setTimeout(function () {
                    _this.animatePopout = false;
                }, 300);
            }
            _this.expandedHeight = (_this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
            if (!_this.products.length) {
                _this.expanded = false;
            }
            _this.changeDetectorRef.detectChanges();
        });
    };
    CartComponent.prototype.deleteProduct = function (product) {
        this.cartService.deleteProductFromCart(product);
    };
    CartComponent.prototype.checkout = function () {
        console.log("To Checkout");
    };
    CartComponent.prototype.onCartClick = function () {
        this.expanded = !this.expanded;
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cart',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  data-shell works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataShellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataShellComponent = (function () {
    function DataShellComponent() {
    }
    DataShellComponent.prototype.ngOnInit = function () {
    };
    return DataShellComponent;
}());
DataShellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-shell',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/data-shell/data-shell.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], DataShellComponent);

//# sourceMappingURL=data-shell.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* DATA */]);
    };
    DataService.prototype.getRemoteData = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"toggle-btn\" (click)=\"sideShown = true\">Filters</button>\n<div class=\"filters\" [class.side-shown]=\"sideShown\">\n  <button type=\"button\" class=\"close-side-btn\" (click)=\"sideShown = false\">x</button>\n  <h5>Filter by categories</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"category-filter filter-wrapper\" *ngFor = 'let filter of categories'>\n      <label class=\"fake-checkbox\">\n        <input type=\"checkbox\" checked (change)='onInputChange($event, filter, \"category\")'>\n        <span class=\"square\"><span class=\"fill\"></span></span>\n        <span class=\"label\">{{filter.name}}</span>\n        <span></span>\n      </label>\n    </div>\n  </form>\n  <h5>Filter by price</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of priceFilters'>\n        <label class=\"fake-checkbox\">\n          <input type=\"radio\" name=\"price\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"price\")'>\n          <span class=\"circle\"><span class=\"fill\"></span></span>\n          <span class=\"label\">{{filter.name}}</span>\n          <span></span>\n        </label>\n    </div>\n  </form>\n  <h5>Custom filters</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of customFilters'>\n        <label class=\"fake-checkbox\">\n          <input type=\"radio\" name=\"custom\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"custom\")'>\n          <span class=\"circle\"><span class=\"fill\"></span></span>\n          <span class=\"label\">{{filter.name}}</span>\n          <span></span>\n        </label>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/filters/filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filters {\n  border: 1px solid #333333;\n  padding: 20px;\n  width: 100%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  padding-top: 1px;\n  position: relative; }\n\n.filter {\n  width: 100%;\n  background: #999999;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  height: 35px; }\n\n.fake-checkbox {\n  position: relative; }\n\n.filter-wrapper {\n  margin-bottom: 8px; }\n  .filter-wrapper label {\n    cursor: pointer; }\n  .filter-wrapper input[type=checkbox], .filter-wrapper input[type=radio] {\n    display: none; }\n    .filter-wrapper input[type=checkbox]:checked + .square, .filter-wrapper input[type=checkbox]:checked + .circle, .filter-wrapper input[type=radio]:checked + .square, .filter-wrapper input[type=radio]:checked + .circle {\n      opacity: 1; }\n    .filter-wrapper input[type=checkbox]:checked + .square .fill, .filter-wrapper input[type=checkbox]:checked + .circle .fill, .filter-wrapper input[type=radio]:checked + .square .fill, .filter-wrapper input[type=radio]:checked + .circle .fill {\n      opacity: 1; }\n    .filter-wrapper input[type=checkbox]:checked ~ .label, .filter-wrapper input[type=radio]:checked ~ .label {\n      opacity: 1; }\n  .filter-wrapper .square, .filter-wrapper .circle, .filter-wrapper .fill {\n    display: inline-block; }\n  .filter-wrapper .square, .filter-wrapper .circle {\n    height: 16px;\n    width: 16px;\n    border: 1px solid #5D4EF0;\n    position: relative;\n    opacity: 0.4; }\n    .filter-wrapper .square .fill, .filter-wrapper .circle .fill {\n      height: 10px;\n      width: 10px;\n      background-color: #5D4EF0;\n      transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n      position: absolute;\n      opacity: 0; }\n  .filter-wrapper .square {\n    border-radius: 3px; }\n    .filter-wrapper .square .fill {\n      border-radius: 2px; }\n  .filter-wrapper .circle {\n    border-radius: 50%; }\n    .filter-wrapper .circle .fill {\n      border-radius: 50%; }\n  .filter-wrapper .fill {\n    top: 3px;\n    left: 3px; }\n  .filter-wrapper .label {\n    text-transform: capitalize;\n    position: relative;\n    top: -4px;\n    margin-left: 7px;\n    opacity: 0.6;\n    transition: all 0.4s ease; }\n\nh5 {\n  text-transform: uppercase;\n  color: #bababa;\n  font-size: 0.8em;\n  font-weight: 600; }\n  h5:after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 1px;\n    margin-top: 3px;\n    background-color: #e8e8e8; }\n\n.toggle-btn {\n  display: none; }\n\n.close-side-btn {\n  display: none;\n  background: none;\n  border: none; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .close-side-btn {\n    display: block;\n    position: absolute;\n    color: #aaaaaa;\n    font-size: 1.2em;\n    font-weight: 300;\n    right: 18px;\n    top: 6px;\n    opacity: 0.7; }\n  .toggle-btn {\n    display: inline-block;\n    position: absolute;\n    left: -69px;\n    top: 11px;\n    background: white;\n    border-radius: 3px;\n    color: #5D4EF0;\n    padding: 4px 11px;\n    border: none;\n    font-size: 0.8em;\n    font-weight: 600;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4); }\n  .filters {\n    width: initial;\n    position: relative;\n    box-shadow: none;\n    border-radius: 0;\n    height: 100%;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .filters.side-shown {\n      -webkit-transform: translateX(-100%);\n      transform: translateX(-100%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiltersComponent = (function () {
    function FiltersComponent() {
        this.onFilterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showFilters = true;
        this.sideShown = false;
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.reset = function (customFilters, priceFilters) {
        var _this = this;
        this.customFilters = customFilters;
        this.priceFilters = priceFilters;
        this.showFilters = false;
        setTimeout(function () {
            _this.showFilters = true;
        });
    };
    FiltersComponent.prototype.onInputChange = function ($event, filter, type) {
        var change = $event.target.checked ? 1 : -1;
        this.onFilterChange.emit({
            type: type,
            filter: filter,
            isChecked: $event.target.checked,
            change: change
        });
    };
    return FiltersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "categories", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "customFilters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "priceFilters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FiltersComponent.prototype, "onFilterChange", void 0);
FiltersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filters',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/filters/filters.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/filters/filters.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FiltersComponent);

//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.component.html":
/***/ (function(module, exports) {

module.exports = "<cart></cart>\n<search-bar  #searchComponent (onSearchChange)='onSearchChange($event)'></search-bar>\n<showcase [products]='products'></showcase>"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafyGreenVegetablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_bar_search_bar_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeafyGreenVegetablesComponent = (function () {
    function LeafyGreenVegetablesComponent(dataService, cartService, exoticVegetablesService) {
        this.dataService = dataService;
        this.cartService = cartService;
        this.exoticVegetablesService = exoticVegetablesService;
        this.isLoading = true;
        this.isEditing = false;
        this.leafyGreenVegetable = {};
        this.leafyGreenVegetables = [];
        this.sortFilters = [
            { name: 'Name (A to Z)', value: 'name' },
            { name: 'Price (low to high)', value: 'priceAsc' },
            { name: 'Price (high to low)', value: 'priceDes' }
        ];
        this.customFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Available', value: 'available', checked: false },
            { name: 'Not Available', value: 'unavailable', checked: false },
            { name: 'Bestseller', value: 'bestseller', checked: false }
        ];
        this.priceFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Price > 30.000', value: 'more_30000', checked: false },
            { name: 'Price < 10.000', value: 'less_10000', checked: false }
        ];
        this.originalData = [];
    }
    LeafyGreenVegetablesComponent.prototype.getLeafyGreenVegetables = function () {
        var _this = this;
        this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(function (data) {
            debugger;
            // var x = {
            //   "id": 1,
            //   "name": "Lorem",
            //   "price": "60.000",
            //   "available": true,
            //   "best_seller": true,
            //   "categories": [
            //     1,
            //     4
            //   ],
            //   "img": "http://lorempixel.com/200/100/food/",
            //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
            // };
            // this.leafyGreenVegetables = data;
            _this.products = data;
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    LeafyGreenVegetablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLeafyGreenVegetables();
        this.dataService.getData().then(function (data) {
            _this.originalData = data;
            _this.mainFilter = {
                search: '',
                categories: _this.originalData.categories.slice(0),
                customFilter: _this.customFilters[0],
                priceFilter: _this.priceFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            // this.products = this.originalData.products.slice(0)
            // this.sortProducts('name')
        });
    };
    LeafyGreenVegetablesComponent.prototype.onURLChange = function (url) {
        var _this = this;
        this.dataService.getRemoteData(url).subscribe(function (data) {
            _this.originalData = data;
            _this.mainFilter = {
                search: '',
                categories: _this.originalData.categories.slice(0),
                customFilter: _this.customFilters[0],
                priceFilter: _this.priceFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            _this.products = _this.originalData.products.slice(0);
            _this.sortProducts('name');
            _this.filtersComponent.reset(_this.customFilters, _this.priceFilters);
            _this.searchComponent.reset();
            _this.cartService.flushCart();
        });
    };
    LeafyGreenVegetablesComponent.prototype.onSearchChange = function (search) {
        this.mainFilter.search = search.search;
        this.updateProducts({
            type: 'search',
            change: search.change
        });
    };
    LeafyGreenVegetablesComponent.prototype.onFilterChange = function (data) {
        if (data.type == 'category') {
            if (data.isChecked) {
                this.mainFilter.categories.push(data.filter);
            }
            else {
                this.mainFilter.categories = this.mainFilter.categories.filter(function (category) { return category.categori_id != data.filter.categori_id; });
            }
        }
        else if (data.type == 'custom') {
            this.mainFilter.customFilter = data.filter;
        }
        else if (data.type == 'price') {
            this.mainFilter.priceFilter = data.filter;
        }
        this.updateProducts({
            type: data.type,
            change: data.change
        });
    };
    LeafyGreenVegetablesComponent.prototype.updateProducts = function (filter) {
        var _this = this;
        var productsSource = this.originalData.products;
        var prevProducts = this.products;
        var filterAllData = true;
        if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
            productsSource = this.products;
            filterAllData = false;
        }
        //console.log('filtering ' + productsSource.length + ' products')
        this.products = productsSource.filter(function (product) {
            //Filter by search
            if (filterAllData || filter.type == 'search') {
                if (!product.name.match(new RegExp(_this.mainFilter.search, 'i'))) {
                    return false;
                }
            }
            //Filter by categories
            if (filterAllData || filter.type == 'category') {
                var passCategoryFilter_1 = false;
                product.categories.forEach(function (product_category) {
                    if (!passCategoryFilter_1) {
                        passCategoryFilter_1 = _this.mainFilter.categories.reduce(function (found, category) {
                            return found || product_category == category.categori_id;
                        }, false);
                    }
                });
                if (!passCategoryFilter_1) {
                    return false;
                }
            }
            //Filter by custom filters
            if (filterAllData || filter.type == 'custom') {
                var passCustomFilter = false;
                var customFilter = _this.mainFilter.customFilter.value;
                if (customFilter == 'all') {
                    passCustomFilter = true;
                }
                else if (customFilter == 'available' && product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'unavailable' && !product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'bestseller' && product.best_seller) {
                    passCustomFilter = true;
                }
                if (!passCustomFilter) {
                    return false;
                }
            }
            //Filter by price filters
            if (filterAllData || filter.type == 'price') {
                var passPriceFilter = false;
                var customFilter = _this.mainFilter.priceFilter.value;
                var productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
                if (customFilter == 'all') {
                    passPriceFilter = true;
                }
                else if (customFilter == 'more_30000' && productPrice > 30000) {
                    passPriceFilter = true;
                }
                else if (customFilter == 'less_10000' && productPrice < 10000) {
                    passPriceFilter = true;
                }
                if (!passPriceFilter) {
                    return false;
                }
            }
            return true;
        });
        //If the number of products increased after the filter has been applied then sort again
        //If the number of products remained equal, there's a high chance that the items have been reordered.
        if (prevProducts.length <= this.products.length && this.products.length > 1) {
            // this.sortProducts(this.currentSorting)
        }
        //These two types of filters usually add new data to the products showcase so a sort is necessary
        if (filter.type == 'custom' || filter.type == 'price') {
            this.sortProducts(this.currentSorting);
        }
    };
    LeafyGreenVegetablesComponent.prototype.sortProducts = function (criteria) {
        //console.log('sorting ' + this.products.length + ' products')
        this.products.sort(function (a, b) {
            var priceComparison = parseFloat(a.price.replace(/\./g, '').replace(',', '.')) - parseFloat(b.price.replace(/\./g, '').replace(',', '.'));
            if (criteria == 'priceDes') {
                return -priceComparison;
            }
            else if (criteria == 'priceAsc') {
                return priceComparison;
            }
            else if (criteria == 'name') {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
            else {
                //Keep the same order in case of any unexpected sort criteria
                return -1;
            }
        });
        this.currentSorting = criteria;
    };
    return LeafyGreenVegetablesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filtersComponent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__filters_filters_component__["a" /* FiltersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__filters_filters_component__["a" /* FiltersComponent */]) === "function" && _a || Object)
], LeafyGreenVegetablesComponent.prototype, "filtersComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchComponent'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__search_bar_search_bar_component__["a" /* SearchBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__search_bar_search_bar_component__["a" /* SearchBarComponent */]) === "function" && _b || Object)
], LeafyGreenVegetablesComponent.prototype, "searchComponent", void 0);
LeafyGreenVegetablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats2',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_items_service__["a" /* ItemsService */]) === "function" && _e || Object])
], LeafyGreenVegetablesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=leafy-green-vegetables.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n\n.main-container {\n  padding-top: 100px; }\n\n.filters-wrapper {\n  position: relative;\n  z-index: 90000; }\n\nsort-filters {\n  position: relative;\n  z-index: 20; }\n\ncart {\n  position: absolute;\n  top: -23px;\n  right: -57px;\n  z-index: 99999999; }\n\nsearch-bar {\n  position: relative;\n  top: -8px; }\n\nshowcase {\n  position: relative;\n  top: -39px;\n  z-index: 10; }\n\n.sort-filters-wrapper {\n  position: relative; }\n\nurl-form {\n  position: absolute;\n  top: -55px; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  url-form {\n    position: fixed;\n    bottom: 20px;\n    left: 10px; }\n  filters {\n    position: fixed;\n    top: 44px;\n    right: -100%;\n    width: 100%;\n    height: 100%; }\n  .sort-filters-wrapper {\n    position: fixed;\n    top: 44px;\n    left: 0;\n    width: 100%;\n    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n    padding-top: 10px;\n    background: #5D4EF0;\n    z-index: 200; }\n  .main-container {\n    padding-top: 34px; }\n  search-bar {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    left: 0;\n    z-index: 9000; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = {
    "categories": [
        {
            "categori_id": 1,
            "name": "drinks"
        },
        {
            "categori_id": 2,
            "name": "lunch"
        },
        {
            "categori_id": 3,
            "name": "food"
        },
        {
            "categori_id": 4,
            "name": "sea"
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "Lorem",
            "price": "60.000",
            "available": true,
            "best_seller": true,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 2,
            "name": "ipsum",
            "price": "20.000",
            "available": false,
            "best_seller": false,
            "categories": [
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 3,
            "name": "dolor",
            "price": "10.000",
            "available": true,
            "best_seller": true,
            "categories": [
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 4,
            "name": "sit",
            "price": "35.000",
            "available": false,
            "best_seller": false,
            "categories": [
                1,
                2
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 5,
            "name": "amet",
            "price": "12.000",
            "available": true,
            "best_seller": true,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 6,
            "name": "consectetur",
            "price": "120.000",
            "available": true,
            "best_seller": false,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 7,
            "name": "adipiscing",
            "price": "50.000",
            "available": false,
            "best_seller": false,
            "categories": [
                1,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 8,
            "name": "elit",
            "price": "2000",
            "available": true,
            "best_seller": false,
            "categories": [
                1,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 9,
            "name": "Maecenas",
            "price": "150.000",
            "available": true,
            "best_seller": true,
            "categories": [
                2,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 10,
            "name": "eu",
            "price": "200.000",
            "available": false,
            "best_seller": true,
            "categories": [
                2,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        }
    ]
};
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.unavailable]='!product.available'>\n  <div class=\"info\" >\n    <div class=\"img-wrapper\">\n      <img class=\"img\" [src]='product.imageForShowCase'>\n      <div class=\"img-placeholder\"></div>\n    </div>\n    <h5 class=\"title\">{{product.name}}</h5>\n    <p class=\"price\">$<span>{{product.price}}</span></p>\n    <div class=\"details\">\n      <div class=\"available\" *ngIf = 'product.available'>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-8-sm view-details-wrapper\">\n            <button type=\"button\" class=\"view\" (click)='onProductClick()'>View details</button>\n          </div>\n          <div class=\"col-4-sm add-cart-wrapper\">\n            <button type=\"button\" class=\"cart\" (click)=\"onAddToCart()\"><img src=\"../../assets/cart_primary.svg\" alt=\"\" /></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"not-available\" *ngIf = '!product.available'>\n        <hr>\n        <p>Not available</p>\n      </div>\n    </div>\n    <!--span class=\"category-name\" *ngFor='let category of product.categories'>{{category}}</span-->\n    <div class=\"detail-view\" [class.active]='detailViewActive'>\n      <div class=\"bg\" [class.shown]='detailViewActive'></div>\n      <div class=\"info-wrapper\">\n        <p class=\"d-holder d-title\">{{product.name}}</p>\n        <p class=\"d-holder d-price\">$ {{product.price}}</p>\n        <p class=\"d-holder d-description\">{{product.description}}</p>\n      </div>\n      <button type=\"button\" class=\"hide-detail-btn\" (click)='onProductClick()'>Click to hide</button>\n    </div>\n  </div>\n  <div class=\"bestseller-badge\" [class.in-detailed]='detailViewActive' *ngIf = 'product.best_seller'>\n    <span class=\"star left\">&nbsp;</span>\n    <span class=\"txt\">Bestseller</span>\n    <span class=\"star right\">&nbsp;</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  border-radius: 5px;\n  box-shadow: 0 5px 5px;\n  position: relative;\n  text-align: center;\n  display: block;\n  background-color: white;\n  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n\n.add-cart-wrapper, .view-details-wrapper {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.view-details-wrapper {\n  position: relative; }\n  .view-details-wrapper:after {\n    content: \"\";\n    width: 1px;\n    display: block;\n    position: absolute;\n    height: 28px;\n    background-color: #5D4EF0;\n    right: -3px;\n    top: -4px;\n    opacity: 0.2; }\n\n.hide-detail-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  z-index: 20;\n  background: none;\n  border: none;\n  color: white;\n  opacity: 0.6;\n  font-size: 0.7em;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  -webkit-transform: translateY(15px);\n  transform: translateY(15px);\n  transition-delay: 1.2s; }\n  .hide-detail-btn:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n.img-wrapper {\n  height: 85px;\n  position: relative;\n  overflow: hidden; }\n\n.details {\n  padding-bottom: 7px; }\n  .details hr {\n    width: 90%;\n    height: 0;\n    border-top: 1px solid #5D4EF0; }\n  .details button {\n    background: none;\n    border: none;\n    cursor: pointer; }\n  .details .view:hover, .details .cart:hover {\n    opacity: 0.8; }\n  .details .view {\n    text-transform: uppercase;\n    color: #5D4EF0;\n    font-size: 0.85em;\n    font-weight: 500;\n    position: relative;\n    top: -1px;\n    left: -2px; }\n  .details .cart {\n    position: relative;\n    top: 2px; }\n  .details .not-available hr {\n    border-top: 1px solid #999999; }\n  .details .not-available p {\n    margin: 0;\n    margin-top: -7px;\n    position: relative;\n    top: 2px;\n    text-transform: uppercase;\n    font-size: 0.85em;\n    font-weight: 500;\n    padding-top: 5px;\n    padding-bottom: 3px; }\n\n.img-placeholder, .img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0; }\n\n.img-placeholder {\n  z-index: 3;\n  height: 100%;\n  background: #dddddd; }\n\n.detail-view {\n  position: absolute;\n  z-index: 30;\n  border-radius: 5px;\n  overflow: hidden;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n  .detail-view.active {\n    pointer-events: all; }\n    .detail-view.active .hide-detail-btn {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    .detail-view.active .info-wrapper {\n      opacity: 1; }\n    .detail-view.active .bg {\n      -webkit-transform: scale(232);\n      transform: scale(232); }\n    .detail-view.active .d-holder {\n      opacity: 1;\n      -webkit-transform: translate(0);\n      transform: translate(0);\n      transition: all 0.5s ease; }\n    .detail-view.active .d-title {\n      transition-delay: 0.4s; }\n    .detail-view.active .d-price {\n      transition-delay: 0.5s; }\n    .detail-view.active .d-description {\n      transition-delay: 0.6s; }\n  .detail-view .d-holder {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    transition: all 0.1s ease; }\n  .detail-view .d-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    margin-bottom: 0;\n    margin-top: 5px; }\n  .detail-view .d-price {\n    margin-top: -7px;\n    font-size: 0.9em; }\n  .detail-view .d-description {\n    font-size: 0.9em;\n    line-height: 1.4em; }\n  .detail-view .info-wrapper {\n    position: relative;\n    z-index: 30;\n    color: white;\n    text-align: left;\n    padding-left: 14px;\n    padding-right: 14px;\n    height: 90%;\n    overflow: scroll; }\n  .detail-view .bg {\n    position: absolute;\n    bottom: -9px;\n    left: 43px;\n    height: 3px;\n    width: 3px;\n    border-radius: 50%;\n    z-index: 20;\n    background: #5D4EF0;\n    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.info {\n  position: relative; }\n\n.unavailable {\n  opacity: 0.3; }\n\n.img {\n  z-index: 5;\n  height: auto;\n  background-color: #eeeeee; }\n\n.title {\n  font-size: 1em;\n  margin-top: 18px;\n  font-weight: 600;\n  margin-bottom: 3px; }\n\n.price {\n  margin-bottom: 10px;\n  color: #999999;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 0; }\n\n.bestseller-badge {\n  position: absolute;\n  top: -10px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n  .bestseller-badge .txt, .bestseller-badge .star {\n    transition: all 0.35s ease; }\n  .bestseller-badge .txt {\n    position: relative;\n    top: 4px; }\n  .bestseller-badge .star {\n    position: absolute;\n    top: 2px; }\n    .bestseller-badge .star.left {\n      left: 8px; }\n    .bestseller-badge .star.right {\n      right: 14px; }\n  .bestseller-badge.in-detailed {\n    box-shadow: 0 2px 7px transparent;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    top: 9px;\n    right: -80%;\n    background-color: #5D4EF0; }\n    .bestseller-badge.in-detailed .right, .bestseller-badge.in-detailed .txt {\n      opacity: 0; }\n    .bestseller-badge.in-detailed .left {\n      left: 5px;\n      top: 2px; }\n\n.sad-face {\n  border-radius: 50%;\n  background-color: #aaaaaa;\n  height: 90px;\n  width: 90px; }\n\n.category-name {\n  display: inline-block;\n  margin-right: 10px; }\n\n.star:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: white; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .detail-view.active .bg {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .hide-detail-btn {\n    height: 32px;\n    -webkit-transform: translateY(32px);\n    transform: translateY(32px); }\n  .wrapper {\n    margin-bottom: -22px; }\n  .img-wrapper {\n    height: 123px; }\n  .detail-view .bg {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    left: 0;\n    bottom: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  .detail-view .info-wrapper {\n    padding: 10px 25px;\n    height: 78%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_model__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/shared/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductThumbnailComponent = (function () {
    function ProductThumbnailComponent(cartService) {
        this.cartService = cartService;
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
        this.detailViewActive = false;
    };
    ProductThumbnailComponent.prototype.onProductClick = function () {
        this.detailViewActive = !this.detailViewActive;
    };
    ProductThumbnailComponent.prototype.onAddToCart = function () {
        this.cartService.addProductToCart(this.product);
    };
    return ProductThumbnailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_model__["a" /* Product */]) === "function" && _a || Object)
], ProductThumbnailComponent.prototype, "product", void 0);
ProductThumbnailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-thumbnail',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/product-thumbnail/product-thumbnail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object])
], ProductThumbnailComponent);

var _a, _b;
//# sourceMappingURL=product-thumbnail.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  holi\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/product/product.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <input *ngIf = \"showSearch\" type=\"text\" name=\"name\" value=\"\" placeholder=\"Search...\" class=\"search-bar\" #search (keyup)='onSearchKeyup(search.value)' (keydown)='plop()'>\n  <svg [class.animate-plop]=\"animatePlop\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.227028918\">\n          <g id=\"Desktop-Copy\" transform=\"translate(-1056.000000, -215.000000)\" fill=\"#000000\">\n              <path d=\"M1071.89258,230.111648 L1067.68711,225.905991 C1068.66447,224.751345 1069.25486,223.2587 1069.25486,221.627431 C1069.25486,217.967248 1066.28761,215 1062.62743,215 C1058.96725,215 1056,217.967248 1056,221.627431 C1056,225.287614 1058.96725,228.254863 1062.62743,228.254863 C1064.2587,228.254863 1065.75134,227.664469 1066.90599,226.686923 L1071.11165,230.89258 C1071.25487,231.035807 1071.48923,231.035807 1071.63227,230.89258 L1071.89258,230.63227 C1072.03581,230.489043 1072.03581,230.254874 1071.89258,230.111648 L1071.89258,230.111648 Z M1057.10457,221.627431 C1057.10457,218.582127 1059.58213,216.104572 1062.62743,216.104572 C1065.67274,216.104572 1068.15029,218.582127 1068.15029,221.627431 C1068.15029,224.672736 1065.67274,227.150291 1062.62743,227.150291 C1059.58213,227.150291 1057.10457,224.672736 1057.10457,221.627431 L1057.10457,221.627431 Z\" id=\"Shape\"></path>\n          </g>\n      </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes plop-glass {\n  50% {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n  100% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); } }\n\n@keyframes plop-glass {\n  50% {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n  100% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); } }\n\n.wrapper {\n  position: relative;\n  display: block;\n  margin-left: auto; }\n\n.search-bar {\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  height: 35px;\n  border-radius: 20px;\n  border: none;\n  padding-left: 20px;\n  box-shadow: 0 3px 14px rgba(25, 25, 25, 0.05);\n  font-weight: 500;\n  position: relative;\n  left: -33px;\n  color: #999999;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .search-bar:focus {\n    box-shadow: 0 4px 11px rgba(93, 78, 240, 0.09);\n    font-weight: 500;\n    color: #5D4EF0;\n    width: 120%;\n    -webkit-transform: translateX(-15%);\n    transform: translateX(-15%); }\n    .search-bar:focus + svg path {\n      fill: #5D4EF0; }\n    .search-bar:focus + svg {\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2); }\n\nsvg.animate-plop {\n  -webkit-animation: plop-glass 0.1s ease forwards;\n  animation: plop-glass 0.1s ease forwards; }\n\n::-webkit-input-placeholder {\n  color: #cccccc; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #cccccc; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #cccccc; }\n\n:-ms-input-placeholder {\n  color: #cccccc; }\n\nsvg {\n  position: absolute;\n  right: 24px;\n  top: 3px;\n  height: 31px;\n  width: 15px;\n  transition: all 0.3s ease; }\n  svg path {\n    fill: #333333; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .search-bar {\n    left: 0;\n    border-radius: 0;\n    height: 43px; }\n    .search-bar:focus {\n      width: 100%;\n      -webkit-transform: translateX(0);\n      transform: translateX(0); }\n  svg {\n    top: 8px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.animatePlop = false;
        this.showSearch = true;
        this.onSearchChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.previousSearch = '';
    };
    /*
      This event will emit an object indicating the new search term, and:
        -1 if the search term length has descreased
        1 if the search term length has increased
        0 if the search term remained equal
    */
    SearchBarComponent.prototype.onSearchKeyup = function (search) {
        var change = 0;
        if (search.length > this.previousSearch.length) {
            change = 1;
        }
        else if (search.length < this.previousSearch.length) {
            change = -1;
        }
        this.previousSearch = search;
        if (change != 0) {
            this.onSearchChange.emit({ search: search, change: change });
        }
    };
    //Perform a plop animation on the search icon. This animation is executed on keydown just for visual reasons
    SearchBarComponent.prototype.plop = function () {
        var _this = this;
        this.animatePlop = true;
        setTimeout(function () {
            _this.animatePlop = false;
        }, 110);
    };
    SearchBarComponent.prototype.reset = function () {
        var _this = this;
        this.showSearch = false;
        setTimeout(function () {
            _this.showSearch = true;
        });
    };
    return SearchBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onSearchChange", void 0);
SearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search-bar',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/search-bar/search-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SearchBarComponent);

//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/shared/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\" *ngFor = 'let product of products'>\n    <product-thumbnail [product] = 'product'></product-thumbnail>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "product-thumbnail {\n  padding-left: 10px;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseComponent = (function () {
    function ShowcaseComponent(cartService) {
        this.cartService = cartService;
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    return ShowcaseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ShowcaseComponent.prototype, "products", void 0);
ShowcaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/showcase/showcase.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object])
], ShowcaseComponent);

var _a;
//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <label for=\"\">Ordered by</label>\n  <select (change)='onSelectChange($event)'>\n    <option *ngFor='let filter of filters' [value]=\"filter.value\">{{filter.name}}</option>\n  </select>\n  <div class=\"triangle\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: block;\n  height: 35px;\n  background: none;\n  font-size: 14px;\n  padding-left: 11px;\n  position: relative;\n  top: 4px; }\n  .wrapper label {\n    opacity: 0.8; }\n  .wrapper select {\n    color: #5D4EF0;\n    background: none;\n    border: none;\n    font-size: 13px;\n    margin-left: 2px;\n    font-weight: 500;\n    cursor: pointer;\n    width: 130px; }\n  .wrapper .triangle {\n    height: 0;\n    width: 0;\n    border-top: 4px solid #5D4EF0;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    display: inline-block;\n    position: relative;\n    top: -2px;\n    right: 14px;\n    pointer-events: none;\n    opacity: 0.3; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .wrapper label {\n    color: white; }\n  .wrapper select {\n    color: white; }\n  .wrapper .triangle {\n    border-top: 4px solid white; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortFiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortFiltersComponent = (function () {
    function SortFiltersComponent() {
        this.onSortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortFiltersComponent.prototype.ngOnInit = function () {
    };
    SortFiltersComponent.prototype.onSelectChange = function ($event) {
        this.onSortChange.emit($event.target.value);
    };
    return SortFiltersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SortFiltersComponent.prototype, "filters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SortFiltersComponent.prototype, "onSortChange", void 0);
SortFiltersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sort-filters',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/sort-filters/sort-filters.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SortFiltersComponent);

//# sourceMappingURL=sort-filters.component.js.map

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"fill\" [class.expanded]=\"expanded\">\n    <button type=\"button\" class=\"url-btn\" (click)=\"expanded = !expanded\">\n      <svg width=\"32px\" height=\"16px\" viewBox=\"0 0 32 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <path d=\"M31.409,3.798 L24.406,10.8 C23.633,11.573 22.379,11.573 21.604,10.8 L20.202,9.398 L27.209,2.395 L21.605,-3.209 L14.603,3.798 L13.2,2.395 C12.426,1.622 12.426,0.367 13.2,-0.407 L20.203,-7.41 C20.98,-8.187 22.231,-8.187 23.005,-7.41 L31.41,0.996 C32.188,1.77 32.188,3.021 31.409,3.798 L31.409,3.798 Z M17.4,12.204 L10.397,19.211 L4.79,13.603 L11.8,6.6 L10.397,5.197 C9.62,4.423 8.369,4.423 7.595,5.197 L0.588,12.204 C-0.189,12.977 -0.189,14.228 0.588,15.002 L8.998,23.411 C9.772,24.185 11.022,24.185 11.8,23.411 L18.802,16.404 C19.575,15.631 19.575,14.381 18.802,13.602 L17.4,12.204 L17.4,12.204 Z M10.397,13.603 C11.171,14.381 12.425,14.381 13.199,13.603 L21.604,5.198 C22.378,4.424 22.378,3.17 21.604,2.396 C20.831,1.623 19.576,1.623 18.802,2.396 L10.396,10.802 C9.62,11.574 9.62,12.829 10.397,13.603 L10.397,13.603 Z\" id=\"Shape\" fill=\"#FFFFFF\" transform=\"translate(15.999313, 7.999375) rotate(-315.000000) translate(-15.999313, -7.999375) \"></path>\n          </g>\n      </svg>\n    </button>\n    <input type=\"text\" #url placeholder=\"JSON File URL...\" class=\"url-input\">\n    <button type=\"button\" (click)='onSend(url.value)' class=\"send-btn\">\n      <svg width=\"33px\" height=\"33px\" viewBox=\"0 0 33 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <path d=\"M0.0377951225,31.4431498 L2.82385037,19.3824633 C2.93382623,18.8692426 3.37372969,18.4659978 3.92360902,18.3926805 L19.5035232,16.7797012 C19.9434267,16.7430425 19.9434267,16.0831873 19.5035232,16.0098701 L3.92360902,14.5068666 C3.37372969,14.470208 2.93382623,14.0669632 2.82385037,13.5537425 L0.0377951225,1.52971456 C-0.218815229,0.503273155 0.88094342,-0.339875143 1.83406758,0.136686938 L32.2973822,15.3866735 C33.2138477,15.8632356 33.2138477,17.182946 32.2973822,17.6595081 L1.83406758,32.8361774 C0.88094342,33.3127395 -0.218815229,32.4695912 0.0377951225,31.4431498 L0.0377951225,31.4431498 Z\" id=\"Shape\" fill=\"#FFFFFF\"></path>\n          </g>\n      </svg>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin-bottom: 20px;\n  position: relative; }\n\n.url-btn {\n  background: #EF364C;\n  border: none;\n  padding: 0;\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n  .url-btn svg {\n    height: 9px; }\n\n.fill {\n  width: 0px;\n  height: 36px;\n  width: 36px;\n  border-radius: 3px;\n  background-color: #EF364C;\n  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .fill.expanded {\n    width: 400px; }\n    .fill.expanded .url-input {\n      width: 80%;\n      color: white;\n      margin-left: 34px; }\n\n.url-input {\n  width: 0px;\n  position: absolute;\n  background: none;\n  border: none;\n  border-radius: 0;\n  margin-left: 0;\n  margin-left: 44px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.27);\n  background: rgba(255, 255, 255, 0.1);\n  position: relative;\n  top: 7px;\n  padding-left: 4px;\n  transition: all 0.5s ease; }\n  .url-input:focus {\n    border-bottom: 1px solid white; }\n\n.send-btn {\n  width: 0;\n  position: absolute;\n  height: 36px;\n  width: 36px;\n  z-index: 50;\n  top: 0;\n  border: none;\n  background: none; }\n  .send-btn svg {\n    height: 14px;\n    position: relative;\n    top: 3px; }\n\n::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4); }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.4); }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.4); }\n\n:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4); }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .wrapper {\n    margin-bottom: 20px;\n    position: absolute;\n    top: 152px; }\n  .fill.expanded {\n    width: 250px; }\n    .fill.expanded .url-input {\n      width: 168px;\n      top: 2px; }\n    .fill.expanded .send-btn {\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlFormComponent = (function () {
    function UrlFormComponent() {
        this.onURLChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expanded = false;
    }
    UrlFormComponent.prototype.ngOnInit = function () {
    };
    UrlFormComponent.prototype.onSend = function (url) {
        this.expanded = false;
        this.onURLChange.emit(url);
    };
    return UrlFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UrlFormComponent.prototype, "onURLChange", void 0);
UrlFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'url-form',
        template: __webpack_require__("../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.html"),
        styles: [__webpack_require__("../../../../../client/app/leafy-green-vegetables/url-form/url-form.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UrlFormComponent);

//# sourceMappingURL=url-form.component.js.map

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Login</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: '',
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-dark bg-primary\">\n    <div class=\"nav navbar-nav\">\n      <a routerLink=\"/\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <i class=\"fa fa-home\"></i> Home\n      </a>\n      <!-- <a routerLink=\"/cats\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\n        <i class=\"fa fa-list\"></i> Cats\n      </a>\n      <a routerLink=\"/exotic-vegetables\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\n        <i class=\"fa fa-list\"></i> Exotic Vegetables\n      </a> -->\n      <a routerLink=\"/login\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-sign-in\"></i> Login\n      </a>\n      <a routerLink=\"/register\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-user-plus\"></i> Register\n      </a>\n      <a routerLink=\"/account\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-user\"></i> Account ({{auth.currentUser.username}})\n      </a>\n      <a routerLink=\"/admin\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\n        <i class=\"fa fa-lock\"></i> Admin\n      </a>\n      <a routerLink=\"/items\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\n        <i class=\"fa fa-lock\"></i> items\n      </a>\n      <a routerLink=\"/logout\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-sign-out\"></i> Logout\n      </a>\n    </div>\n  </nav>\n\n\n  <!-- <nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n      <a class=\"btn btn-success btn-lg pull-right\" (click)=\"openCart($event)\">\n        <span class=\"badge\">{{_cartService.itemsInCart.totalCount}}</span>\n        <span>{{_cartService.itemsInCart.costOfCart}}</span> \n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Home</a></li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1 <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Page 1-1</a></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n        <li><a href=\"#\">Page 2</a></li>\n        <li><a href=\"#\">Page 3</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n -->\n\n"

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CartService } from './../../services/cart/cart.service';
var NavbarComponent = (function () {
    function NavbarComponent(router, auth
        // public _cartService: CartService
    ) {
        this.router = router;
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openCart = function (event) {
        // this.router.navigate(['/cart']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../client/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Register</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <div class=\"input-group\" [ngClass]=\"setClassUsername()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" formControlName=\"role\">\n          <option value=\"\" selected disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('[a-zA-Z0-9_-\\s]*')]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../client/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leafy_green_vegetables_leafy_green_vegetables_component__ = __webpack_require__("../../../../../client/app/leafy-green-vegetables/leafy-green-vegetables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkout_checkout_component__ = __webpack_require__("../../../../../client/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__exotic_vegetables_exotic_vegetables_component__ = __webpack_require__("../../../../../client/app/exotic-vegetables/exotic-vegetables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__items_items_component__ = __webpack_require__("../../../../../client/app/items/items.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { App1Component } from './leafy-green-vegetables/leafy-green-vegetables.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_11__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'cats', component: __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__["a" /* CatsComponent */] },
    { path: 'exotic-vegetables', component: __WEBPACK_IMPORTED_MODULE_15__exotic_vegetables_exotic_vegetables_component__["a" /* ExoticVegetablesComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_16__items_items_component__["a" /* ItemsComponent */] },
    // { path: 'leafy-green-vegetables', component: App1Component },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'leafy-green-vegetables', component: __WEBPACK_IMPORTED_MODULE_9__leafy_green_vegetables_leafy_green_vegetables_component__["a" /* LeafyGreenVegetablesComponent */] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/notfound' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardAdmin);

var _a, _b;
//# sourceMappingURL=auth-guard-admin.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    return AuthGuardLogin;
}());
AuthGuardLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardLogin);

var _a, _b;
//# sourceMappingURL=auth-guard-login.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatService = (function () {
    function CatService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CatService.prototype.getCats = function () {
        return this.http.get('/api/cats').map(function (res) { return res.json(); });
    };
    CatService.prototype.countCats = function () {
        return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
    };
    CatService.prototype.addCat = function (cat) {
        return this.http.post('/api/cat', JSON.stringify(cat), this.options);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
    };
    CatService.prototype.editCat = function (cat) {
        return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
    };
    CatService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/cat/" + cat._id, this.options);
    };
    return CatService;
}());
CatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatService);

var _a;
//# sourceMappingURL=cat.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/exotic-vegetables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExoticVegetablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExoticVegetablesService = (function () {
    function ExoticVegetablesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    ExoticVegetablesService.prototype.getLeafyGreenVegetables = function () {
        return this.http.get('/api/leafy-green-vegetables').map(function (res) { return res.json(); });
    };
    ExoticVegetablesService.prototype.countLeafyGreenVegetables = function () {
        return this.http.get('/api/leafy-green-vegetables/count').map(function (res) { return res.json(); });
    };
    ExoticVegetablesService.prototype.addLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.post('/api/leafy-green-vegetables', JSON.stringify(leafyGreenVegetables), this.options);
    };
    ExoticVegetablesService.prototype.getLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.get("/api/leafy-green-vegetables/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
    };
    ExoticVegetablesService.prototype.editLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.put("/api/leafy-green-vegetables/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
    };
    ExoticVegetablesService.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.delete("/api/leafy-green-vegetables/" + leafyGreenVegetables._id, this.options);
    };
    return ExoticVegetablesService;
}());
ExoticVegetablesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ExoticVegetablesService);

var _a;
//# sourceMappingURL=exotic-vegetables.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsService = (function () {
    function ItemsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    ItemsService.prototype.getLeafyGreenVegetables = function () {
        return this.http.get('/api/items').map(function (res) { return res.json(); });
    };
    ItemsService.prototype.countLeafyGreenVegetables = function () {
        return this.http.get('/api/items/count').map(function (res) { return res.json(); });
    };
    ItemsService.prototype.addLeafyGreenVegetable = function (leafyGreenVegetables) {
        debugger;
        return this.http.post('/api/items', JSON.stringify(leafyGreenVegetables), this.options);
    };
    ItemsService.prototype.getLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.get("/api/items/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
    };
    ItemsService.prototype.editLeafyGreenVegetable = function (leafyGreenVegetables) {
        debugger;
        return this.http.put("/api/items/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
    };
    ItemsService.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.delete("/api/items/" + leafyGreenVegetables._id, this.options);
    };
    return ItemsService;
}());
ItemsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ItemsService);

var _a;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, this.options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "condition", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/loading/loading.component.scss")]
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  z-index: 999;\n  position: fixed;\n  bottom: 15px;\n  left: 25%;\n  width: 50%;\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.scss")]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/***\nBootstrap Line Tabs by @keenthemes\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\nLicensed under MIT\n***/\n\n/* Tabs panel */\n.tabbable-panel {\n  border:1px solid #eee;\n  padding: 10px;\n}\n\n/* Default mode */\n.tabbable-line > .nav-tabs {\n  border: none;\n  margin: 0px;\n}\n.tabbable-line > .nav-tabs > li {\n  margin-right: 2px;\n}\n.tabbable-line > .nav-tabs > li > a {\n  border: 0;\n  margin-right: 0;\n  color: #737373;\n}\n.tabbable-line > .nav-tabs > li > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {\n  border-bottom: 4px solid #fbcdcf;\n}\n.tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {\n  border: 0;\n  background: none !important;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {\n  margin-top: 0px;\n}\n.tabbable-line > .nav-tabs > li.active {\n  border-bottom: 4px solid #f3565d;\n  position: relative;\n}\n.tabbable-line > .nav-tabs > li.active > a {\n  border: 0;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.active > a > i {\n  color: #404040;\n}\n.tabbable-line > .tab-content {\n  margin-top: -3px;\n  background-color: #fff;\n  border: 0;\n  border-top: 1px solid #eee;\n  padding: 15px 0;\n}\n.portlet .tabbable-line > .tab-content {\n  padding-bottom: 0;\n}\n\n/* Below tabs mode */\n\n.tabbable-line.tabs-below > .nav-tabs > li {\n  border-top: 4px solid transparent;\n}\n.tabbable-line.tabs-below > .nav-tabs > li > a {\n  margin-top: 0;\n}\n.tabbable-line.tabs-below > .nav-tabs > li:hover {\n  border-bottom: 0;\n  border-top: 4px solid #fbcdcf;\n}\n.tabbable-line.tabs-below > .nav-tabs > li.active {\n  margin-bottom: -2px;\n  border-bottom: 0;\n  border-top: 4px solid #f3565d;\n}\n.tabbable-line.tabs-below > .tab-content {\n  margin-top: -10px;\n  border-top: 0;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"tabbable-panel\">\n\t\t\t<div class=\"tabbable-line\">\n\t\t\t\t<ul class=\"nav nav-tabs nav-justified\">\n\t\t\t\t\t<li [ngClass]=\"{'active': (appService.selectedTab=='exotic-vegetables')}\" (click)=\"openTab($event, 'exotic-vegetables')\"><a id=\"id1\">exotic-vegetables</a></li>\n\t\t\t\t\t<li [ngClass]=\"{'active': (appService.selectedTab=='leafy-green-vegetables')}\" (click)=\"openTab($event, 'leafy-green-vegetables')\"><a>leafy-green-vegetables</a></li>\n\t\t\t\t\t<li [ngClass]=\"{'active': (appService.selectedTab=='fresh-fruits')}\" (click)=\"openTab($event, 'fresh-fruits')\"><a>fresh-fruits</a></li>\n\t\t\t\t\t<li [ngClass]=\"{'active': (appService.selectedTab=='fresh-vegetables')}\" (click)=\"openTab($event, 'fresh-vegetables')\"><a>fresh-vegetables</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = (function () {
    function TabsComponent(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    TabsComponent.prototype.ngOnInit = function () {
        // this.appService.selectedTab = ''
    };
    TabsComponent.prototype.openTab = function (event, option) {
        console.log(option);
        this.appService.selectedTab = option;
        this.router.navigate(['/' + option]);
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../client/app/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../client/app/tabs/tabs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object])
], TabsComponent);

var _a, _b;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map