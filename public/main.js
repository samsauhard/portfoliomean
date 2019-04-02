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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _pages_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/documents/documents.component */ "./src/app/pages/documents/documents.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
















var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About' } },
    { path: 'project', component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"], data: { title: 'Project' } },
    { path: 'documents', component: _pages_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__["DocumentsComponent"], data: { title: 'Documents' } },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], data: { title: 'Services' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], data: { title: 'Contact' } },
    { path: 'contact/contact-list', component: _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"], data: { title: 'Contact List' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'contact/contact-list/add', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_11__["ContactDetailsComponent"], data: { title: 'Add Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'contact/contact-list/edit/:id', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_11__["ContactDetailsComponent"], data: { title: 'Edit Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'contact/contact-list/delete/:id', component: _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_12__["ContactDeleteComponent"], data: { title: 'Add Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"] }
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

module.exports = "\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

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
    }
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
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _pages_documents_documents_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/documents/documents.component */ "./src/app/pages/documents/documents.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");

























function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _pages_project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"],
                _pages_documents_documents_component__WEBPACK_IMPORTED_MODULE_14__["DocumentsComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"],
                _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_17__["ContactDeleteComponent"],
                _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_18__["ContactDetailsComponent"],
                _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_19__["ContactListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGVsZXRlL2NvbnRhY3QtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeleteComponent", function() { return ContactDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDeleteComponent = /** @class */ (function () {
    function ContactDeleteComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        this.deleteContact(this.contact);
    };
    ContactDeleteComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contactListService.deleteContact(contact).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/contact/contact-list']);
            }
            else {
                _this.router.navigate(['/contact/contact-list']);
            }
        });
    };
    ContactDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-delete',
            template: __webpack_require__(/*! ./contact-delete.component.html */ "./src/app/contacts/contact-delete/contact-delete.component.html"),
            styles: [__webpack_require__(/*! ./contact-delete.component.css */ "./src/app/contacts/contact-delete/contact-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDeleteComponent);
    return ContactDeleteComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content for the Details Page -->\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"FirstNameTextField\">First Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"FirstNameTextField\"\n                  placeholder=\"Enter First Name\"\n                  name=\"firstName\"\n                  [(ngModel)]=\"contact.firstName\"\n                  value=\"{{ contact.firstName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"LastNameTextField\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"LastNameTextField\"\n                  placeholder=\"Enter Last Name\"\n                  name=\"lastName\"\n                  [(ngModel)]=\"contact.lastName\"\n                  value=\"{{ contact.lastName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"AgeTextField\">Age</label>\n                  <input type=\"number\" class=\"form-control\"\n                  id=\"AgeTextField\"\n                  placeholder=\"Enter Age\"\n                  name=\"age\"\n                  [(ngModel)]=\"contact.age\"\n                  value=\"{{ contact.age }}\"\n                  required>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fas fa-edit\"></i> {{ title }}</button>\n              <a routerLink=\"/contact/contact-list\" class=\"btn btn-warning\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n          </form>\n\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        if (this.title === 'Edit Contact') {
            this.getContact(this.contact);
        }
    };
    ContactDetailsComponent.prototype.getContact = function (contact) {
        var _this = this;
        this.contactListService.getContact(contact).subscribe(function (data) {
            _this.contact = data.contact;
        });
    };
    ContactDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case 'Add Contact':
                this.contactListService.addContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
            case 'Edit Contact':
                this.contactListService.editContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
        }
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contacts/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>Contact List</h1>\n          <a class=\"btn btn-primary\" routerLink=\"/contact/contact-list/add\" role=\"button\">\n          <i class=\"fas fa-plus-circle\"></i> Add a Contact</a>\n          <br>\n          <table class=\"table table-bordered table-striped table-hover\">\n              <!-- Header Row-->\n              <tr>\n                  <th class=\"text-center\">First Name</th>\n                  <th class=\"text-center\">Last Name</th>\n                  <th class=\"text-center\">Age</th>\n                  <th class=\"text-center\"></th>\n                  <th class=\"text-center\"></th>\n              </tr>\n\n              <!-- Repeatable Template Row -->\n                  <tr *ngFor=\"let contact of contacts\">\n                      <td class=\"text-center\">{{ contact.firstName }}</td>\n                      <td class=\"text-center\">{{ contact.lastName }}</td>\n                      <td class=\"text-center\">{{ contact.age }}</td>\n\n                      <td class=\"text-center\">\n                      <a routerLink=\"/contact/contact-list/edit/{{ contact._id }}\"\n                          class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i> Edit</a>\n                      </td>\n\n                      <td class=\"text-center\">\n                              <a routerLink=\"/contact/contact-list/delete/{{ contact._id }}\" (click)=\"onDeleteClick()\"\n                                  class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i> Delete</a>\n                              </td>\n                  </tr>\n          </table>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactListService, flashMessage, router) {
        this.contactListService = contactListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = new Array();
        this.displayContactList();
    };
    ContactListComponent.prototype.onDeleteClick = function () {
        if (!confirm('Are You Sure?')) {
            this.router.navigate(['/home']);
        }
    };
    ContactListComponent.prototype.displayContactList = function () {
        var _this = this;
        this.contactListService.getList().subscribe(function (data) {
            if (data.success) {
                _this.contacts = data.contactList;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactListComponent);
    return ContactListComponent;
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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"jumbotron\">\n\n             <h1 class=\"display-8\">About Me</h1>\n            <br><hr><br>\n\n            I  am a Computer Science graduate currently enrolled in a full time Software Engineering program at Centennial College and also working as a freelancer on Fiverr. I am a highly motivated and continuous learner with a mindset of innovation and perfection. I find myself comfortable with html, css, sql/no sql databases and writing code in C++, Java, Python and C# as well. I am familiar with mean and mern stack development which is highly in demand these days. I have worked as a trainee for 4 months and have 8 months of Software Development experience in Fortune 500 firm. My goal is to take technology and innovation to a higher level.<br><br>\n        <a href=\"assets/Content/Sauhard_Resume_NewGrad.docx\"><i class=\"fas fa-file-alt\"></i> Resume </a>\n\n\n\n\n\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent(route) {
        return _super.call(this, route) || this;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" style=\"padding-left: 4%;padding-top: 3%\">\n  <div class=\"jumbotron\">\nThis is a Secure Page for Registered Users\n\n  <div class=\"row\">\n    <div class=\"col col-md-6\">\n      <div class=\"card\">\n        <h5 class=\"card-header alert-success\">Secure</h5>\n        <div class=\"card-body\">\n          <a *ngIf=\"isLoggedIn()\" routerLink=\"contact-list\" class=\"btn btn-primary\"><i class=\"fas fa-users fa-lg\"></i> Contact List</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(route, authService) {
        var _this = _super.call(this, route) || this;
        _this.authService = authService;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ContactComponent);
    return ContactComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/documents/documents.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/documents/documents.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/documents/documents.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/documents/documents.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n      <div class=\"jumbotron\" style=\"align-content: left;\">\n      <h1 class=\"display-8\" style=\"padding-left: 6%\"> Documents</h1> \n        <br>\n        <br>\n        <div style=\"display: flex;\">\n            <br>\n            <div class=\"card\" style=\"width: 18rem;margin-left: 5%;\">\n                    <img class=\"card-img-top\" src=\"assets/Content/bookcase-books-bookshelves-159711.jpg\" alt=\"Educational Documents\">\n                    <div class=\"card-body\"  style =\"display: inline-table;\">\n                      <h5 class=\"card-title\">Educational Documents</h5>\n                      <p class=\"card-text\">Link to All the Documents</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                      <li class=\"list-group-item\"><a href=\"assets/Content/D (1).jpg\" class=\"card-link\">Marksheet 1</a></li>\n\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/D (2).jpg\" class=\"card-link\">Marksheet 2</a></li>\n\t\t\t\t\t    <li class=\"list-group-item\"><a href=\"assets/Content/D (3).jpg\" class=\"card-link\">Marksheet 3</a></li>\n\t\t\t\t\t\t <li class=\"list-group-item\"><a href=\"assets/Content/D (4).jpg\" class=\"card-link\">Marksheet 4</a></li>\n\t\t\t\t\t\t  <li class=\"list-group-item\"><a href=\"assets/Content/D (5).jpg\" class=\"card-link\">Marksheet 5</a></li>\n\t\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/D (6).jpg\" class=\"card-link\">Marksheet 6</a></li>\n\t\t\t\t\t\t    <li class=\"list-group-item\"><a href=\"assets/Content/D (7).jpg\" class=\"card-link\">Marksheet 7</a></li>\n\t\t\t\t\t\t\t <li class=\"list-group-item\"><a href=\"assets/assets/assets/Content/D (8).jpg\" class=\"card-link\">Marksheet 8</a></li>\n\t\t\t\t\t\t\t  <li class=\"list-group-item\"><a href=\"assets/Content/D (9).jpg\" class=\"card-link\">Marksheet High School</a></li>\n\t\t\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/D (11).jpg\" class=\"card-link\">Marksheet Secondary School</a></li>\n\t\t\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/D (10).jpg\" class=\"card-link\">B.Tech Degree</a></li>\n                    </ul>\n\n\n                  </div>\n                  <div class=\"card\" style=\"width: 18rem;margin-left: 4%;\">\n                        <img class=\"card-img-top\" src=\"assets/Content/adidas-ball-field-46798.jpg\" alt=\"Scrape Therapists\">\n                        <div class=\"card-body\" style =\"display: inline-table;\">\n                          <h5 class=\"card-title\">Sports Certificates</h5>\n                          <p class=\"card-text\">All Sport Certificates</p>\n                        </div>\n                        <ul class=\"list-group list-group-flush\">\n                         <li class=\"list-group-item\"><a href=\"assets/Content/S (1).jpg\" class=\"card-link\">Sports</a></li>\n                         <li class=\"list-group-item\"><a href=\"assets/Content/S (2).jpg\" class=\"card-link\">Sports</a></li>\n                          <li class=\"list-group-item\"><a href=\"assets/Content/S (3).jpg\" class=\"card-link\">Sports</a></li>\n                        </ul>\n                        <div class=\"card-body\">\n                  \n                          \n                        </div>\n    \n                      </div>\n\n                      <div class=\"card\" style=\"width: 18rem;margin-left: 4%;\">\n                            <img class=\"card-img-top\" src=\"assets/Content/close-up-contract-document-48148.jpg\" alt=\"Know Cannabis\">\n                            <div class=\"card-body\"  style =\"display: inline-table;\">\n                              <h5 class=\"card-title\">Other Certificates</h5>\n                              <p class=\"card-text\">Certificates for additional participation in other activities</p>\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                               <li class=\"list-group-item\"><a href=\"Content/O (1).jpg\" class=\"card-link\">Others</a></li>\n\t\t\t\t\t\t\t     <li class=\"list-group-item\"><a href=\"assets/Content/O (2).jpg\" class=\"card-link\">Others</a></li>\n\t\t\t\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/O (3).jpg\" class=\"card-link\">Others</a></li>\n\t\t\t\t\t\t\t\t     <li class=\"list-group-item\"><a href=\"assets/Content/O (4).jpg\" class=\"card-link\">Others</a></li>\n\t\t\t\t\t\t\t\t\t   <li class=\"list-group-item\"><a href=\"assets/Content/O (5).jpg\" class=\"card-link\">Others</a></li>\n\t\t\t\t\t\t\t\t\t     <li class=\"list-group-item\"><a href=\"assets/Content/O (6).jpg\" class=\"card-link\">Others</a></li>\n                            </ul>\n                            <div class=\"card-body\">\n                            \n                            </div>\n        \n                          </div>\n\n                        \n\n\n       \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/documents/documents.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/documents/documents.component.ts ***!
  \********************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/pages/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/pages/documents/documents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"jumbotron\" style=\"padding-left: 18%\">\n        <h1 class=\"display-8\" style=\"padding-left: 20%\">MISSION STATEMENT</h1>\n      <hr>\n      Computer Science graduate currently working as a freelancer.\n       Highly motivated and continuous\tlearner with a mindset of innovation and perfection. \n      <br>\n      <br>\n\n       o\tA good listener and team worker with an ability to lead a team and communicate efficiently with peers.<br>\no\tAbility to analyze a problem and find an optimal solution for the problem.<br><br><br>\n\n      \n    </div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(route) {
        return _super.call(this, route) || this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n          <h1>Please Login</h1>\n          <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n              <fieldset class=\"form-group\">\n                  <label for=\"username\">Username:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.username\"\n                  name=\"username\" placeholder=\"Enter Username\"\n                  id=\"username\" required autofocus autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"password\">Password:</label>\n                  <input type=\"password\" class=\"form-control\"\n                  [(ngModel)]=\"user.password\"\n                  name=\"password\" placeholder=\"Enter Password\"\n                  id=\"password\" required autocomplete=\"off\">\n                  or\n                  <a routerLink=\"/register\">Register Here</a>\n              </fieldset>\n              <fieldset class=\"form-group text-right\">\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n                  <a routerLink=\"/home\">\n                      <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                  </a>\n              </fieldset>\n          </form>\n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/home']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pages/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pages/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\" style=\"align-content: left;\">\n    <br>\n    <br>\n    <h1 class=\"display-8\" style=\"padding-left: 6%\"> Projects</h1> \n\n    <div style=\"display: flex;\">\n        <br>\n        <div class=\"card\" style=\"width: 18rem;margin-left: 5%;\">\n                <img class=\"card-img-top\" src=\"assets/Content/blur-bud-cannabis-1466335.jpg\" alt=\"Know Cannabis\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Know Cannabis</h5>\n                  <p class=\"card-text\">An App for Canadians to Learn about Cannabis</p>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\">API</li>\n                  <li class=\"list-group-item\">C#</li>\n                  <li class=\"list-group-item\">Swagger</li>\n                </ul>\n                <div class=\"card-body\">\n                  <a href=\"https://github.com/samsauhard/CannabisWeb\" class=\"card-link\">Github</a>\n                  \n                </div>\n\n              </div>\n              <div class=\"card\" style=\"width: 18rem;margin-left: 4%;\">\n                    <img class=\"card-img-top\" src=\"assets/Content/ai-codes-coding-97077.jpg\" alt=\"Scrape Therapists\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Scrape Data</h5>\n                      <p class=\"card-text\">Scrape the list of all the therapists in France</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                      <li class=\"list-group-item\">Python</li>\n                      <li class=\"list-group-item\">Selenium Webdriver</li>\n                      <li class=\"list-group-item\">URL LIB</li>\n                    </ul>\n                    <div class=\"card-body\">\n                      <a href=\"https://github.com/samsauhard/scrape-therapists\" class=\"card-link\">Github</a>\n                      \n                    </div>\n\n                  </div>\n\n                  <div class=\"card\" style=\"width: 18rem;margin-left: 4%;\">\n                        <img class=\"card-img-top\" src=\"assets/Content/art-blue-skies-clouds-335907.jpg\" alt=\"Know Cannabis\">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">AWS Lambda</h5>\n                          <p class=\"card-text\">An Image Rekognition Program to Tag Images</p>\n                        </div>\n                        <ul class=\"list-group list-group-flush\">\n                          <li class=\"list-group-item\">AWS</li>\n                          <li class=\"list-group-item\">Lambda</li>\n                          <li class=\"list-group-item\">Image Rekognition</li>\n                        </ul>\n                        <div class=\"card-body\">\n                          <a href=\"https://github.com/samsauhard/AWS_Lambda_ImageRekog\" class=\"card-link\">Github</a>\n                          \n                        </div>\n    \n                      </div>\n\n                    \n\n\n   \n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n          <h1>Please Register</h1>\n          <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n              <fieldset class=\"form-group\">\n                  <label for=\"username\">Username:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.username\"\n                  name=\"username\" placeholder=\"Enter Username\"\n                  id=\"username\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"password\">Password:</label>\n                  <input type=\"password\" class=\"form-control\"\n                  [(ngModel)]=\"user.password\"\n                  name=\"password\" placeholder=\"Enter Password\"\n                  id=\"password\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"email\">Email:</label>\n                  <input type=\"email\" class=\"form-control\"\n                  [(ngModel)]=\"user.email\"\n                  name=\"email\" placeholder=\"Enter Email\"\n                  id=\"email\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"displayName\">Dispaly Name:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.displayName\"\n                  name=\"displayName\" placeholder=\"Enter Display Name\"\n                  id=\"displayName\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group text-right\">\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Register\">\n                  <a routerLink=\"/home\">\n                      <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                  </a>\n              </fieldset>\n          </form>\n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n    <div class=\"container-fluid text-center\">\r\n              <h2>SERVICES</h2>\r\n              <h4>Offered by Me</h4>\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-off\"></span>\r\n                  <h4>MEAN/MERN Stack development</h4>\r\n                  <p>MongoDB, Express, Angular/React and Node is in trend these days.I provide high quality development using MEAN/MERN stack</p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-heart\"></span>\r\n                  <h4>Java</h4>\r\n                  <p>Getting a old style secure and easy application is what java applicaions are famous for.</p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-lock\"></span>\r\n                  <h4>Python Scripts</h4>\r\n                  <p>Get you tasks automated by me just with few lines of code using pthon</p>\r\n                </div>\r\n              </div>\r\n              <br><br>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-leaf\"></span>\r\n                  <h4>Hardware Codes</h4>\r\n                  <p>Get your robot working according to your requirements. Especially with Raspberry Pi.</p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-certificate\"></span>\r\n                  <h4>C++</h4>\r\n                  <p>Fast and Easy Code to build complex applications.</p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <span class=\"glyphicon glyphicon-wrench\"></span>\r\n                  <h4 style=\"color:#303030;\">RAP</h4>\r\n                  <p>Check on the Stripes Yea.  on the Stripes Yea. Thats what I like yea. what I like yea.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-8\">{{title}}</h1>\n  </div>\n"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(route) {
        this.route = route;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer font-small blue pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container-fluid text-center text-md-left\" style=\"padding-left:200px;\">\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-6 mt-md-0 mt-3\">\n\n        <!-- Content -->\n        <h3 class=\"text-uppercase\">Hobbies</h3><br>\n        <p><b>Soccer</b>&nbsp;&nbsp;&nbsp;&nbsp;\tGlory Glory Man United<br>\n          <b>Rap</b>&nbsp;&nbsp;&nbsp;&nbsp;\tKeep Your Bars Tight<br>\n          <b>Music</b>&nbsp;&nbsp;&nbsp;&nbsp;Music\tJay-z Tupac and Biggie</p>\n\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a routerLink=\"/about\">About</a>\n            </li>\n            <li>\n              <a routerLink=\"/contact\">Contact</a>\n            </li>\n            <li>\n              <a routerLink=\"/services\">Services</a>\n            </li>\n            <li>\n              <a routerLink=\"/project\">Projects</a>\n            </li>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n      \n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">{{copy}}\n    <a href=\"#\"> SAUHARD </a> {{year}}\n  </div>\n  <!-- Copyright -->\n\n</footer>\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.copy = '© 2018 Copyright:';
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <nav class=\"navbar navbar-expand-lg navbar-white bg-white\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <img src=\"Content/bc0ffdc4-48db-4d3c-b18d-329ec4e74963.png\" alt=\"\">\n</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">\n              <i class=\"fas fa-lg fa-igloo\"></i> Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\"\n              ><i class=\"fa fa-lg fa-info\"></i> About</a\n            >\n          </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/project\"\n                ><i class=\"fa fa-lg fa-briefcase\"></i> Project</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/documents\"\n              ><i class=\"fab fa-dochub\"></i>Documents</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/services\"\n              ><i class=\"fa fa-lg fa-birthday-cake\"></i> Services</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact\"\n              ><i class=\"fa fa-lg fa-phone\"></i> Contact</a\n            >\n\n          </li>\n          <li *ngIf=\"isLoggedIn()\" class=\"navbar-text text-success ml-5 mr-5 d-none d-lg-inline\"><i class=\"fas fa-lg fa-user\"></i>\n            Welcome, {{ user.displayName }}</li>\n  \n          <li *ngIf=\"isLoggedIn()\" class=\"nav-item\"><a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"nav-link\">\n            <i class=\"fas fa-lg fa-sign-out-alt\"></i> Logout</a></li>\n  \n          <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\">\n            <i class=\"fas fa-lg fa-sign-in-alt\"></i> Login</a></li> \n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return result;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.endpoint = 'https://portfoliomean.herokuapp.com/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + 'register', user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + 'login', user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + 'logout', this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/contact-list.service.ts ***!
  \**************************************************/
/*! exports provided: ContactListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListService", function() { return ContactListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var ContactListService = /** @class */ (function () {
    function ContactListService(http) {
        this.http = http;
        this.authToken = null;
        //private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/contact-list/';
        this.endpoint = 'https://portfoliomean.herokuapp.com/api/contact-list/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ContactListService.prototype.getList = function () {
        this.loadToken();
        return this.http.get(this.endpoint, this.httpOptions);
    };
    ContactListService.prototype.getContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'edit/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.addContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'add', contact, this.httpOptions);
    };
    ContactListService.prototype.editContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
    };
    ContactListService.prototype.deleteContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'delete/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    ContactListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactListService);
    return ContactListService;
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

module.exports = __webpack_require__(/*! E:\AssignmnetPortfoliowebsie-master\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map