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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materials/materials.component */ "./src/app/materials/materials.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'materials',
        component: _materials_materials_component__WEBPACK_IMPORTED_MODULE_4__["MaterialsComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
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

module.exports = "h2\r\n{\r\n  padding: 30px;\r\n}\r\n\r\n.h2__span\r\n{\r\n  font-size: 1.3em;\r\n  font-weight: 700;\r\n}\r\n\r\n.h2__span--pink\r\n{\r\n    color: #f38ab6;\r\n }\r\n\r\n.h2__span--green\r\n{\r\n  color: #d4e52e;\r\n}\r\n\r\nimg\r\n\r\n  { border-top: 2px solid #f38ab6;\r\n    border-bottom: 2px solid #f38ab6;}\r\n\r\n.nav-link\r\n{\r\n  background-color: #d4e52e;\r\n  widows: 50px;\r\n  margin: 20px 30px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  color: black;\r\n  }\r\n\r\n.nav-link:hover\r\n  {\r\n    background-color: #d3e52eb6;\r\n    color: black;\r\n\r\n  }\r\n\r\n.nav-pills .nav-link.active\r\n  {\r\n    background-color: #f38ab6;\r\n    color: white;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div style=\"text-align:center\">\n  <h2>\n   <span class=\"h2__span h2__span--pink\">Witamy</span> na platformie z <span class=\"h2__span h2__span--green\">materiałami do nauki</span> programowania dla <span class=\"h2__span h2__span--pink\">dzieci</span>!\n\n  </h2>\n  <img width=\"100%\" alt=\"\" src=\"../assets/img/background1.jpg\">\n</div>\n\n\n<ul class=\"nav nav-pills justify-content-center\">\n  <li class= \"nav-item\">\n    <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\">O mnie</a>\n  </li>\n  <li class= \"nav-item\">\n    <a class=\"nav-link\" routerLink=\"materials\" routerLinkActive=\"active\">Materiały</a>\n  </li>\n  <li class= \"nav-item\">\n    <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active\">Kontakt</a>\n  </li>\n  <li class= \"nav-item\">\n    <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active\">Zaloguj</a>\n  </li>\n</ul>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Edukacja';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materials/materials.component */ "./src/app/materials/materials.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contact_rective_form_rective_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/rective-form/rective-form.component */ "./src/app/contact/rective-form/rective-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _materials_materials_component__WEBPACK_IMPORTED_MODULE_4__["MaterialsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _contact_rective_form_rective_form_component__WEBPACK_IMPORTED_MODULE_7__["RectiveFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-col-style\r\n{\r\n  display:-ms-inline-grid;\r\n  display:inline-grid;\r\n}\r\n\r\n\r\nlabel\r\n{\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Jeżeli masz jakieś pytania, zapraszamy do kontaktu ;-) Chętnie odpowiemy</h3>\n\n<app-rective-form ></app-rective-form>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/rective-form/rective-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/rective-form/rective-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/rective-form/rective-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/contact/rective-form/rective-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" conteiner justify-content-center\">\n<form class=\" row justify-content-center\" [formGroup]='contactForm' (ngSubmit)=\"onSubmit()\">\n  <div class = \"form-col-style col-4\" >\n\n    <label for=\"topic\">Temat:</label>\n    <input  type=\"text\" id=\"topic\" name=\"topic\" formControlName=\"topic\">\n    <div *ngIf=\"contactForm.get('topic').invalid && contactForm.get('topic').dirty\">Pole wymagane</div>\n\n\n    <label for=\"message\">Wiadomość:</label>\n    <textarea  rows=\"4\" cols=\"50\" id=\"message\" name=\"message\" formControlName=\"message\" ></textarea>\n    <div *ngIf=\"contactForm.get('message').invalid && contactForm.get('message').dirty\">Pole wymagane</div>\n    <div *ngIf=\"contactForm.get('message').errors && contactForm.get('message').errors.minlength\">Za krotka wiadomość</div>\n\n    <label for=\"name\">Name:</label>\n    <input  type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\">\n    <div *ngIf=\"contactForm.get('name').invalid && contactForm.get('name').dirty\">Pole wymagane</div>\n\n    <label for=\"email\">E-mail:</label>\n    <input   type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" email>\n    <div *ngIf=\"contactForm.get('email').invalid && contactForm.get('email').dirty\">Pole wymagane</div>\n    <div *ngIf=\"contactForm.get('email').errors && contactForm.get('email').errors.email &&\n    contactForm.get('email').dirty \">Zły adres e-mail</div>\n  </div>\n  <div class = \" form-col-style col-4\">\n    <label for=\"toys\">Ktore z wymienionych zabawek do nauki programowania są Ci znane?</label>\n    <select   name=\"toys\" id=\"toys\" formControlName=\"toys\">\n      <option *ngFor=\"let toys of toys\" value=\"toys\">{{toys}}</option>\n    </select>\n\n    <div>\n      <label for=\"like\">Czy Twoje dziecko lubi informatykę?</label>\n      <input  [value]=\"true\"  type=\"radio\" name=\"like\" id=\"like\" formControlName=\"like\"> Tak\n      <input  [value]=\"false\" type=\"radio\" name=\"like\" id=\"like\" formControlName=\"like\"> Nie\n    </div>\n\n    <label for=\"questions\">Czego jeszcze chcesz nauczyć swoje dziecko?</label>\n    <div formArrayName=\"questions\">\n      <div *ngFor=\"let question of contactForm.get('questions')['controls']; let i = index\">\n       {{i+1}} <input type=\"text\" [formControlName]=\"i\">\n      </div>\n      <div *ngIf=\"contactForm.get('questions').errors && contactForm.get('questions').errors['forbbidentoy']\">Zakazany kurs</div>\n      <button type=\"button\" (click)='addQuestion()'>Dodaj</button>\n    </div>\n  </div>\n\n  <div class=\" col-6\">\n  <button type=\"submit\" [disabled]=\"contactForm.invalid\" >Wyslij</button>\n  <button type=\"button\" (click)=\"onReset()\" >reset</button>\n</div>\n\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/rective-form/rective-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/rective-form/rective-form.component.ts ***!
  \****************************************************************/
/*! exports provided: RectiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectiveFormComponent", function() { return RectiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RectiveFormComponent = /** @class */ (function () {
    function RectiveFormComponent() {
        this.message = new ReactiveMessage();
        this.toys = ['LEGO mindstorn', 'Dash i Dot', 'Scottie Go', 'BeCreo'];
    }
    RectiveFormComponent.prototype.ngOnInit = function () {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            topic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            toys: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.toys[0]),
            like: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            questions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)], this.questionsValidator)
        });
    };
    RectiveFormComponent.prototype.addQuestion = function () {
        var arr = this.contactForm.get('questions');
        arr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
    };
    RectiveFormComponent.prototype.questionsValidator = function (control) {
        var arr = control.value;
        if (arr.includes('nic')) {
            return { 'forbbidentoy': true };
        }
    };
    RectiveFormComponent.prototype.onSubmit = function () {
        console.log(this.contactForm);
        this.message.topic = this.contactForm.value.topic; // this.contactForm.get('topic').value
        this.message.message = this.contactForm.value.message;
        this.message.name = this.contactForm.value.name;
        this.message.email = this.contactForm.value.email;
        this.message.course = this.contactForm.value.course;
        this.message.like = this.contactForm.value.like;
    };
    RectiveFormComponent.prototype.onReset = function () {
        this.contactForm.reset({
            topic: 'Fajny kurs',
            toy: this.toys[2]
        });
    };
    RectiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rective-form',
            template: __webpack_require__(/*! ./rective-form.component.html */ "./src/app/contact/rective-form/rective-form.component.html"),
            styles: [__webpack_require__(/*! ./rective-form.component.css */ "./src/app/contact/rective-form/rective-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RectiveFormComponent);
    return RectiveFormComponent;
}());

var ReactiveMessage = /** @class */ (function () {
    function ReactiveMessage(topic, message, name, email, course, like) {
        if (course === void 0) { course = 'Dash i Dot'; }
        this.topic = topic;
        this.message = message;
        this.name = name;
        this.email = email;
        this.course = course;
        this.like = like;
    }
    return ReactiveMessage;
}());


/***/ }),

/***/ "./src/app/materials/materials.component.css":
/*!***************************************************!*\
  !*** ./src/app/materials/materials.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/materials/materials.component.html":
/*!****************************************************!*\
  !*** ./src/app/materials/materials.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  materials works!\n</p>\n"

/***/ }),

/***/ "./src/app/materials/materials.component.ts":
/*!**************************************************!*\
  !*** ./src/app/materials/materials.component.ts ***!
  \**************************************************/
/*! exports provided: MaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function() { return MaterialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialsComponent = /** @class */ (function () {
    function MaterialsComponent() {
    }
    MaterialsComponent.prototype.ngOnInit = function () {
    };
    MaterialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-materials',
            template: __webpack_require__(/*! ./materials.component.html */ "./src/app/materials/materials.component.html"),
            styles: [__webpack_require__(/*! ./materials.component.css */ "./src/app/materials/materials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialsComponent);
    return MaterialsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paulina\Documents\GitHub\Edukacja\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map