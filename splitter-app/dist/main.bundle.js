webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__occasion_detail_occasion_detail_component__ = __webpack_require__("../../../../../src/app/occasion-detail/occasion-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__occasion_list_occasion_list_component__ = __webpack_require__("../../../../../src/app/occasion-list/occasion-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//pathMatch: 'full' is needed because there's a routing bug in this version of angular
//see: https://github.com/angular/angular/issues/20752
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__occasion_list_occasion_list_component__["a" /* OccasionListComponent */], pathMatch: 'full' },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__occasion_detail_occasion_detail_component__["a" /* OccasionDetailComponent */], pathMatch: 'full' }
    // { path: 'detail', component: OccasionDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.select-box{\n  width: 60px;\n  font-size: 15px;\n}\n.mat-option > span > img{\n  width: 20px;\n  height: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span routerLink=\"/\">Splitter</span>\n      <span class=\"fill-remaining-space\"></span>\n      <mat-select [(ngModel)]=\"selectedItem\" [(value)]=\"selectedItem\" (ngModelChange)=\"getSelectedValue(selectedItem)\" class=\"select-box currency-selector\" placeholder=\"EUR\">\n        <mat-option class=\"select-option\" *ngFor=\"let currency of currencies\" [value]=\"currency.value\">\n          {{ currency.viewValue }} <img [style.width.px]=\"16\" [style.height.px]=\"16\" [src]=\"currency.imageUrl\" />\n        </mat-option>\n      </mat-select>\n      <button mat-button>About</button>\n      <button mat-button>Contact</button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_currency_service__ = __webpack_require__("../../../../../src/services/currency.service.ts");
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
    function AppComponent(currencyService) {
        this.currencyService = currencyService;
        this.title = 'app';
        /*
          * image urls have to be the relative paths from index.html
          * images have to be in assets/icon folder
        */
        this.currencies = [
            { value: 'EUR', viewValue: 'EUR ', imageUrl: 'assets/icon/european-union.png' },
            { value: 'USD', viewValue: 'USD ', imageUrl: 'assets/icon/united-states.png' },
            { value: 'JPY', viewValue: 'JPY ', imageUrl: 'assets/icon/japan.png' }
        ];
        this.selectedItem = "EUR";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        window.localStorage.setItem("currency", this.selectedItem);
        window.localStorage.setItem("currencyRate", "1");
    };
    AppComponent.prototype.getSelectedValue = function (selectedItem) {
        console.log('selected currency: ', selectedItem);
        //save selected value as selected currency in local storage
        window.localStorage.setItem("currency", selectedItem);
        this.currencyService.fetchCurrencies();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_currency_service__["a" /* CurrencyService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__occasion_service__ = __webpack_require__("../../../../../src/app/occasion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__occasion_occasion_component__ = __webpack_require__("../../../../../src/app/occasion/occasion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__occasion_list_occasion_list_component__ = __webpack_require__("../../../../../src/app/occasion-list/occasion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__occasion_detail_occasion_detail_component__ = __webpack_require__("../../../../../src/app/occasion-detail/occasion-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__split_service__ = __webpack_require__("../../../../../src/app/split.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_currency_service__ = __webpack_require__("../../../../../src/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__convertcurrency_pipe__ = __webpack_require__("../../../../../src/app/convertcurrency.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__occasion_occasion_component__["a" /* OccasionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__occasion_list_occasion_list_component__["a" /* OccasionListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__occasion_detail_occasion_detail_component__["a" /* OccasionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__convertcurrency_pipe__["a" /* ConvertcurrencyPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__occasion_service__["a" /* OccasionService */], __WEBPACK_IMPORTED_MODULE_12__split_service__["a" /* SplitService */], __WEBPACK_IMPORTED_MODULE_13__services_currency_service__["a" /* CurrencyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/convertcurrency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertcurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//When you set 'pure' to false, Angular updates the data inside the pipe each cycle.
var ConvertcurrencyPipe = (function () {
    function ConvertcurrencyPipe() {
    }
    ConvertcurrencyPipe.prototype.transform = function (totalSpending) {
        var currency = window.localStorage.getItem("currency");
        var currencyRate = window.localStorage.getItem("currencyRate");
        if (currency == "USD") {
            var convertedSpending = (totalSpending * parseFloat(currencyRate));
            var roundedSpending = (Math.round(convertedSpending * 100) / 100).toFixed(2);
            var convertedSpendingStr = '' + roundedSpending + ' $';
        }
        else if (currency == "JPY") {
            var convertedSpending = (totalSpending * parseFloat(currencyRate));
            var roundedSpending = (Math.round(convertedSpending * 100) / 100).toFixed(2);
            var convertedSpendingStr = '' + roundedSpending + ' ¥';
        }
        else {
            var convertedSpending = (totalSpending * parseFloat(currencyRate));
            var roundedSpending = (Math.round(convertedSpending * 100) / 100).toFixed(2);
            var convertedSpendingStr = '' + roundedSpending + ' €';
        }
        return convertedSpendingStr;
    };
    ConvertcurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'convertcurrency',
            pure: false
        })
    ], ConvertcurrencyPipe);
    return ConvertcurrencyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
//handles imports for material design components
//https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OCCASIONS; });
var OCCASIONS = [
    {
        id: 1,
        name: 'Chickendinner',
        description: 'The Hound eats every fucking chicken in this room.',
        participants: [
            {
                name: 'Sandor',
                credit: 15
            },
            {
                name: 'Arya',
                credit: 5
            }
        ],
        totalSpending: 20.00,
        items: [
            {
                name: 'Chicken',
                amount: 15.00,
                payer: { name: 'Sandor', credit: 15 }
            },
            {
                name: 'A smaller Chicken',
                amount: 5.00,
                payer: { name: 'Arya', credit: 5 }
            }
        ],
        transactions: [],
        date: '03.05.1014'
    },
    {
        id: 2,
        name: 'Red Wedding',
        description: 'They Freys invite the Starks to a Wedding',
        participants: [
            {
                name: 'Robb',
                credit: 0
            },
            {
                name: 'Catelyn',
                credit: 0
            },
            {
                name: 'Walder',
                credit: 600
            },
            {
                name: 'Roose',
                credit: 66.66
            }
        ],
        totalSpending: 666.66,
        items: [
            {
                name: 'Crossbows',
                amount: 600.00,
                payer: { name: 'Walder', credit: 600 }
            },
            {
                name: 'Dagger',
                amount: 66.66,
                payer: { name: 'Roose', credit: 66.66 }
            }
        ],
        transactions: [],
        date: '21.08.1013'
    },
    {
        id: 3,
        name: 'Hiking Trip in the North',
        description: 'The boys go on a hiking adventure to catch a zombie',
        participants: [
            {
                name: 'Jon',
                credit: 800.00
            },
            {
                name: 'Beric',
                credit: 0
            },
            {
                name: 'Gendry',
                credit: 200.00
            },
            {
                name: 'Tormund',
                credit: 0
            }
        ],
        totalSpending: 1000.00,
        items: [
            {
                name: 'Warhammer',
                amount: 200.00,
                payer: { name: 'Gendry', credit: 200.00 }
            },
            {
                name: 'Dragonglass',
                amount: 800.00,
                payer: { name: 'Jon', credit: 800.00 }
            }
        ],
        transactions: [],
        date: '04.12.1017'
    }
];


/***/ }),

/***/ "../../../../../src/app/occasion-detail/occasion-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-wrapper {\n  padding: 30px;\n}\n.occasion-form {\n  width: 100%;\n}\n.item-form-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n}\n.item-edit-forms {\n  margin: 0 10px 0 10px;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.item-edit-forms-shorten {\n  width: 40px;\n}\n.item-list-adder {\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.mat-card {\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/occasion-detail/occasion-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrapper\">\n  <h2>{{ occasion.name }}</h2>\n  <mat-card>\n    <mat-form-field class=\"occasion-form\">\n      <input [(ngModel)]=\"occasion.name\" matInput placeholder=\"Name\">\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"occasion-form\">\n      <textarea [(ngModel)]=\"occasion.description\" matInput placeholder=\"Description\"></textarea>\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"occasion-form\">\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let participant of occasion.participants\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(participant)\">\n          {{participant.name}}\n          <mat-icon matChipRemove *ngIf=\"participant.credit === 0\">cancel</mat-icon>\n        </mat-chip>\n        <input placeholder=\"New participant...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\n      </mat-chip-list>\n    </mat-form-field>\n  </mat-card>\n  <mat-card>\n    <mat-card-title>Transactions</mat-card-title>\n    <div>\n\n      <form class=\"item-form-wrapper\">\n        <mat-form-field class=\"item-edit-forms\">\n          <input required [(ngModel)]=\"newItemName\" matInput placeholder=\"Transacion name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n\n        <mat-form-field class=\"item-edit-forms\">\n          <mat-select required [(ngModel)]=\"newItemPayer\" placeholder=\"Payer\" [ngModelOptions]=\"{standalone: true}\">\n            <mat-option *ngFor=\"let participant of occasion.participants\" [value]=\"participant.name\">\n              {{ participant.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"item-edit-forms\">\n          <input required [(ngModel)]=\"newItemAmount\" name=\"newItemAmount\" matInput type=\"number\" name=\"price\" value=\"0.00\" min=\"0.01\" placeholder=\"Price\">\n        </mat-form-field>\n\n        <button class=\"item-edit-forms item-edit-forms-shorten\" mat-raised-button color=primary (click)=\"submitItem()\">Submit</button>\n      </form>\n    </div>\n\n    <div class=\"mat-elevation-z8\">\n      <mat-table #table [(dataSource)]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.name}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"payer\">\n          <mat-header-cell *matHeaderCellDef> Payer </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.payer.name}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"amount\">\n          <mat-header-cell *matHeaderCellDef> Amount </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.amount | convertcurrency }}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"delete\">\n          <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\" (click)=\"deleteItem(item)\">\n            <mat-icon>cancel</mat-icon>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </mat-card>\n\n  <mat-card *ngIf=\"occasion.transactions.length > 0\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let transaction of occasion.transactions\"> {{transaction.debtor.name}} owes {{transaction.creditor.name}} {{transaction.amount | convertcurrency }} </mat-list-item>\n    </mat-list>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/occasion-detail/occasion-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__split_service__ = __webpack_require__("../../../../../src/app/split.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__occasion_service__ = __webpack_require__("../../../../../src/app/occasion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OccasionDetailComponent = (function () {
    function OccasionDetailComponent(route, service, location, splitService) {
        this.route = route;
        this.service = service;
        this.location = location;
        this.splitService = splitService;
        this.displayedColumns = ['name', 'payer', 'amount', 'delete'];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["c" /* COMMA */]];
    }
    OccasionDetailComponent.prototype.update = function () {
        console.log('i bims, das update');
        this.occasion.transactions = this.splitService.split(this.occasion);
        this.occasion.totalSpending = this.splitService.getTotalAmount(this.occasion);
        console.log(this.occasion);
        console.log(this.occasion.transactions);
    };
    OccasionDetailComponent.prototype.ngOnInit = function () {
        this.getOccasion();
        this.items = this.occasion.items;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatTableDataSource */](this.items);
        this.update();
    };
    OccasionDetailComponent.prototype.getOccasion = function () {
        var _this = this;
        // += converts string to number
        var id = +this.route.snapshot.paramMap.get('id');
        this.service.getOccasion(id)
            .subscribe(function (occasion) { return _this.occasion = occasion; });
    };
    OccasionDetailComponent.prototype.submitItem = function () {
        var _this = this;
        var newItemParticipant;
        console.log(this.newItemPayer);
        var currencyRate = +window.localStorage.getItem('currencyRate');
        console.log(currencyRate);
        this.occasion.participants.forEach(function (participant) {
            if (participant.name === _this.newItemPayer) {
                _this.newItemAmount = (_this.newItemAmount / currencyRate);
                participant.credit += _this.newItemAmount;
                console.log('credit: ' + participant.credit);
                console.log('nemitemamount:' + _this.newItemAmount);
                newItemParticipant = participant;
            }
        });
        var newItem = {
            name: this.newItemName,
            amount: this.newItemAmount,
            payer: newItemParticipant
        };
        console.log(newItem);
        this.occasion.items.push(newItem);
        console.log(this.occasion.items);
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatTableDataSource */](this.items);
        this.update();
    };
    OccasionDetailComponent.prototype.deleteItem = function (item) {
        var index = this.occasion.items.indexOf(item);
        if (index >= 0) {
            this.occasion.items.splice(index, 1);
            this.occasion.participants.forEach(function (participant) {
                if (participant.name === item.payer.name) {
                    participant.credit -= item.amount;
                }
            });
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatTableDataSource */](this.items);
        }
        this.update();
    };
    OccasionDetailComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        var newPerson = {
            name: event.value,
            credit: 0
        };
        if ((value || '').trim()) {
            this.occasion.participants.push(newPerson);
            this.update();
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    OccasionDetailComponent.prototype.remove = function (participant) {
        var index = this.occasion.participants.indexOf(participant);
        if (index >= 0) {
            this.occasion.participants.splice(index, 1);
            this.update();
        }
    };
    OccasionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-occasion-detail',
            template: __webpack_require__("../../../../../src/app/occasion-detail/occasion-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/occasion-detail/occasion-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__occasion_service__["a" /* OccasionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__split_service__["a" /* SplitService */]])
    ], OccasionDetailComponent);
    return OccasionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/occasion-list/occasion-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n\n\n.add-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/occasion-list/occasion-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Your Splits</h2>\n<ul>\n  <app-occasion *ngFor=\"let occasion of occasions\" [occasion]=\"occasion\"></app-occasion>\n</ul>\n\n<button (click)=\"addNewOccasion()\" class=\"add-btn\" mat-fab>\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/occasion-list/occasion-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__occasion_service__ = __webpack_require__("../../../../../src/app/occasion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OccasionListComponent = (function () {
    function OccasionListComponent(occasionService, router) {
        this.occasionService = occasionService;
        this.router = router;
    }
    OccasionListComponent.prototype.ngOnInit = function () {
        this.getOccasions();
    };
    OccasionListComponent.prototype.getOccasions = function () {
        var _this = this;
        this.occasionService.getOccasions()
            .subscribe(function (occasions) { return _this.occasions = occasions; });
    };
    OccasionListComponent.prototype.addNewOccasion = function () {
        //shitty hack because we're using mock data
        var id = this.occasions.length + 1;
        //no proper date formatting in javascript in 2017???
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var formattedDate = day + '.' + month + '.' + year;
        var newOccasion = {
            id: id,
            name: 'Enter a name here...',
            description: 'Enter a description here...',
            participants: [],
            totalSpending: 0.00,
            items: [],
            transactions: [],
            date: formattedDate
        };
        this.router.navigate(['/detail/' + id]);
        this.occasions.push(newOccasion);
    };
    OccasionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-occasion-list',
            template: __webpack_require__("../../../../../src/app/occasion-list/occasion-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/occasion-list/occasion-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__occasion_service__["a" /* OccasionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], OccasionListComponent);
    return OccasionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/occasion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data__ = __webpack_require__("../../../../../src/app/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OccasionService = (function () {
    function OccasionService() {
    }
    OccasionService.prototype.getOccasions = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* OCCASIONS */]);
    };
    OccasionService.prototype.getOccasion = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* OCCASIONS */].find(function (occasion) { return occasion.id === id; }));
    };
    OccasionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OccasionService);
    return OccasionService;
}());



/***/ }),

/***/ "../../../../../src/app/occasion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Occasion; });
var Occasion = (function () {
    function Occasion() {
    }
    return Occasion;
}());



/***/ }),

/***/ "../../../../../src/app/occasion/occasion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occasion-card {\n  width: 400px;\n  margin: 20px;\n  display: inline-block;\n}\n\n.title-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n/*sorry für das important aber angular überschreibt die styles irgendwie...*/\n.mat-card-subtitle {\n  margin-top: 0 !important;\n}\n\n.open-button {\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/occasion/occasion.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"occasion-card\">\n  <mat-card-header>\n    <div class=\"title-wrapper\">\n      <mat-card-title><b>{{ occasion.name }}</b></mat-card-title>\n      <span class=\"occasion-card-spending\">{{ occasion.totalSpending | convertcurrency }} </span>\n      <mat-card-subtitle>{{ occasion.date }}</mat-card-subtitle>\n    </div>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{ occasion.description }}\n    </p>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let participant of occasion.participants\">{{ participant.name }}</mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n  <mat-card-actions>\n    <a class=\"open-button\" routerLink=\"/detail/{{ occasion.id }}\">\n      <button mat-raised-button color=primary>Open</button>\n    </a>\n    <button mat-raised-button color=warn (click)=\"deleteOccasion(occasion)\">Delete</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/occasion/occasion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__occasion_service__ = __webpack_require__("../../../../../src/app/occasion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__occasion__ = __webpack_require__("../../../../../src/app/occasion.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OccasionComponent = (function () {
    function OccasionComponent(occasionService) {
        this.occasionService = occasionService;
    }
    OccasionComponent.prototype.ngOnInit = function () {
    };
    OccasionComponent.prototype.deleteOccasion = function (occasion) {
        var _this = this;
        this.occasionService.getOccasions().subscribe(function (occasions) { return _this.occasions = occasions; });
        console.log(this.occasions);
        var index = this.occasions.indexOf(occasion);
        if (index >= 0) {
            this.occasions.splice(index, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__occasion__["a" /* Occasion */])
    ], OccasionComponent.prototype, "occasion", void 0);
    OccasionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-occasion',
            template: __webpack_require__("../../../../../src/app/occasion/occasion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/occasion/occasion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__occasion_service__["a" /* OccasionService */]])
    ], OccasionComponent);
    return OccasionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/split.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplitService = (function () {
    function SplitService() {
    }
    SplitService.prototype.split = function (occ) {
        var personsWithCredit = [];
        var personsWithDept = [];
        var persons = occ.participants;
        var result = [];
        //The contribution is the amount of money, that finally every Person should have paid
        var contribution = this.getTotalAmount(occ) / occ.participants.length;
        for (var i = 0; i < persons.length; i++) {
            var person = Object.assign({}, persons[i]);
            //set 'contribution' as dept for everyone
            person.credit = person.credit - contribution;
            //sort person according to whether they have postive or negative credit
            if (person.credit >= 0) {
                personsWithCredit.push(person);
            }
            else {
                personsWithDept.push(person);
            }
        }
        //if there is no one with dept, we are done
        if (personsWithDept.length == 0) {
            return result;
        }
        var indexCreditor = 0;
        var indexDeptor = 0;
        while (indexCreditor < personsWithCredit.length
            && indexDeptor < personsWithDept.length) {
            var creditor = personsWithCredit[indexCreditor];
            var debtor = personsWithDept[indexDeptor];
            //if debt and credit are equal simply balance it. Then increment bot indices
            if (Math.abs(debtor.credit) == Math.abs(creditor.credit)) {
                var transaction = { debtor: debtor, creditor: creditor, amount: Math.round(Math.abs(debtor.credit) * 100) / 100 };
                result.push(transaction);
                debtor.credit = 0;
                creditor.credit = 0;
                indexCreditor++;
                indexDeptor++;
            }
            else if (Math.abs(debtor.credit) < Math.abs(creditor.credit)) {
                var transaction = { debtor: debtor, creditor: creditor, amount: Math.round(Math.abs(debtor.credit) * 100) / 100 };
                result.push(transaction);
                creditor.credit += debtor.credit;
                debtor.credit = 0;
                indexDeptor++;
            }
            else {
                var transaction = { debtor: debtor, creditor: creditor, amount: Math.round(Math.abs(creditor.credit) * 100) / 100 };
                result.push(transaction);
                debtor.credit += creditor.credit;
                creditor.credit = 0;
                indexCreditor++;
            }
        }
        return result;
    };
    SplitService.prototype.getTotalAmount = function (occ) {
        var totalAmount = 0;
        for (var i = 0; i < occ.items.length; i++) {
            totalAmount += occ.items[i].amount;
        }
        return totalAmount;
    };
    SplitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SplitService);
    return SplitService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/services/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import httpclient where i want to use it, not in modules

var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
    }
    CurrencyService.prototype.fetchCurrencies = function () {
        var currency = window.localStorage.getItem("currency");
        this.http.get("https://api.fixer.io/latest?symbols=" + currency).subscribe(function (data) {
            var results = data["rates"];
            if (results.USD != undefined) {
                console.log("US Kurs ", results.USD);
                window.localStorage.setItem("currencyRate", results.USD);
            }
            else if (results.JPY != undefined) {
                console.log("Yen-Kurs", results.JPY);
                window.localStorage.setItem("currencyRate", results.JPY);
            }
            else {
                window.localStorage.setItem("currencyRate", "1");
            }
        });
    };
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map