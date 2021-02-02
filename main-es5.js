function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _read_csvdata_read_csvdata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./read-csvdata/read-csvdata.component */
    "./src/app/read-csvdata/read-csvdata.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'parseCSV';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-read-csvdata");
        }
      },
      directives: [_read_csvdata_read_csvdata_component__WEBPACK_IMPORTED_MODULE_1__["ReadCSVDataComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _read_csvdata_read_csvdata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./read-csvdata/read-csvdata.component */
    "./src/app/read-csvdata/read-csvdata.component.ts");
    /* harmony import */


    var _read_csvdata_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./read-csvdata/filter.pipe */
    "./src/app/read-csvdata/filter.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _read_csvdata_read_csvdata_component__WEBPACK_IMPORTED_MODULE_4__["ReadCSVDataComponent"], _read_csvdata_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _read_csvdata_read_csvdata_component__WEBPACK_IMPORTED_MODULE_4__["ReadCSVDataComponent"], _read_csvdata_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/read-csvdata/filter.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/read-csvdata/filter.pipe.ts ***!
    \*********************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppReadCsvdataFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //Used default filter pipe available in angular


    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) return [];
          if (!searchText) return items;
          return items.filter(function (item) {
            return Object.keys(item).some(function (key) {
              return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/read-csvdata/read-csvdata.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/read-csvdata/read-csvdata.component.ts ***!
    \********************************************************/

  /*! exports provided: ReadCSVDataComponent */

  /***/
  function srcAppReadCsvdataReadCsvdataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadCSVDataComponent", function () {
      return ReadCSVDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _read_csvdataModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./read-csvdataModal */
    "./src/app/read-csvdata/read-csvdataModal.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/read-csvdata/filter.pipe.ts");

    var _c0 = ["fileReader"];

    function ReadCSVDataComponent_input_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadCSVDataComponent_input_8_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReadCSVDataComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pin Code / Date : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReadCSVDataComponent_div_11_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.searchText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchText);
      }
    }

    function ReadCSVDataComponent_table_14_th_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadCSVDataComponent_table_14_th_3_Template_i_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onSortClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var headerObject_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](headerObject_r12);
      }
    }

    function ReadCSVDataComponent_table_14_tr_5_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18);
      }
    }

    function ReadCSVDataComponent_table_14_tr_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReadCSVDataComponent_table_14_tr_5_p_15_Template, 2, 1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var record_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r15.orderId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r15.customerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r15.deliveryPincode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r15.orderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", record_r15.items);
      }
    }

    function ReadCSVDataComponent_table_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReadCSVDataComponent_table_14_th_3_Template, 3, 1, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReadCSVDataComponent_table_14_tr_5_Template, 16, 5, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.headerData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx_r3.records, ctx_r3.searchText));
      }
    }

    function ReadCSVDataComponent_ng_template_16_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results found for the entered search criteria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReadCSVDataComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReadCSVDataComponent_ng_template_16_p_0_Template, 2, 0, "p", 14);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchText != null);
      }
    }

    var ReadCSVDataComponent = /*#__PURE__*/function () {
      function ReadCSVDataComponent() {
        _classCallCheck(this, ReadCSVDataComponent);

        this.title = 'Angular7AppReadCSV';
        this.records = [];
        this.sortDir = 1;
        this.list = [];
        this.sortReverse = false;
        this.sortArr('orderId');
      }

      _createClass(ReadCSVDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reset",
        value: function reset() {
          this.fileReset();
        }
      }, {
        key: "uploadListener",
        value: function uploadListener($event) {
          var _this = this;

          var text = [];
          var files = $event.srcElement.files;

          if (this.isValidCSVFile(files[0])) {
            var input = $event.target;
            var reader = new FileReader();
            reader.readAsText(input.files[0]);

            reader.onload = function () {
              var csvData = reader.result;
              var csvRecordsArray = csvData.split(/\r\n|\n/);

              var headersRow = _this.getHeaderArray(csvRecordsArray);

              _this.headerData = _this.getHeaderArray(csvRecordsArray);
              _this.records = _this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
              _this.list = _this.records;

              var _iterator = _createForOfIteratorHelper(_this.list),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var listItem = _step.value;
                  var tempItem1 = listItem.items;
                  var tempItem2 = listItem.orderDate;
                  tempItem1 = tempItem1.replaceAll(":", "-");
                  tempItem1 = tempItem1.split(";");
                  tempItem2 = tempItem2.replaceAll("-", "/");
                  listItem.items = [];
                  listItem.items = tempItem1;
                  listItem.orderDate = [];
                  listItem.orderDate = tempItem2;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            };

            reader.onerror = function () {
              console.log('Error occured while reading');
            };
          } else {
            alert("Only CSV files are accepted");
            this.fileReset();
          }
        }
      }, {
        key: "getDataRecordsArrayFromCSVFile",
        value: function getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength) {
          var csvArr = [];

          for (var i = 1; i < csvRecordsArray.length; i++) {
            var rowData = csvRecordsArray[i].split(',');

            if (rowData.length == headerLength) {
              var csvData = new _read_csvdataModal__WEBPACK_IMPORTED_MODULE_1__["CSVRecord"]();
              csvData.orderId = rowData[0].trim();
              csvData.customerId = rowData[1].trim();
              csvData.deliveryPincode = rowData[2].trim();
              csvData.orderDate = rowData[3].trim();
              csvData.items = rowData[4].trim();
              csvArr.push(csvData);
            }
          }

          return csvArr;
        }
      }, {
        key: "isValidCSVFile",
        value: function isValidCSVFile(file) {
          return file.name.endsWith(".csv");
        }
      }, {
        key: "getHeaderArray",
        value: function getHeaderArray(csvRecordsArr) {
          var headers = csvRecordsArr[0].split(',');
          var headerArray = [];

          for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
          }

          console.log("Header Array", headerArray);
          return headerArray;
        }
      }, {
        key: "fileReset",
        value: function fileReset() {
          this.csvReader.nativeElement.value = "";
          this.records = [];
          this.searchText = null;
        }
      }, {
        key: "onSortClick",
        value: function onSortClick(event) {
          console.log(event);
          console.log(event.target.parentElement.firstChild.data);
          var sortCol = event.target.parentElement.firstChild.data;
          var target = event.currentTarget,
              classList = target.classList;

          if (classList.contains('fa-chevron-up')) {
            classList.remove('fa-chevron-up');
            classList.add('fa-chevron-down');
            this.sortDir = -1;
          } else {
            classList.add('fa-chevron-up');
            classList.remove('fa-chevron-down');
            this.sortDir = 1;
          }

          this.sortArr(sortCol);
        }
      }, {
        key: "sortArr",
        value: function sortArr(colName) {
          var _this2 = this;

          this.records.sort(function (a, b) {
            a = a[colName].toLowerCase();
            b = b[colName].toLowerCase();
            return a.localeCompare(b) * _this2.sortDir;
          });
        }
      }]);

      return ReadCSVDataComponent;
    }();

    ReadCSVDataComponent.ɵfac = function ReadCSVDataComponent_Factory(t) {
      return new (t || ReadCSVDataComponent)();
    };

    ReadCSVDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReadCSVDataComponent,
      selectors: [["app-read-csvdata"]],
      viewQuery: function ReadCSVDataComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.csvReader = _t.first);
        }
      },
      decls: 18,
      vars: 7,
      consts: [[1, "container"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv", 3, "change"], ["fileReader", ""], ["type", "button", "value", "Reset", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "borderBlack", 4, "ngIf", "ngIfElse"], ["noRes", ""], ["type", "button", "value", "Reset", 3, "click"], [1, "row"], [1, "col-md-2"], ["type", "text", "placeholder", "Filter", 1, "form-control", "col-md-4", 3, "ngModel", "ngModelChange"], [1, "borderBlack"], [4, "ngFor", "ngForOf"], [1, "my-icon", "fa", "fa-chevron-up", 3, "click"], [4, "ngIf"]],
      template: function ReadCSVDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ant Stack POC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReadCSVDataComponent_Template_input_change_4_listener($event) {
            return ctx.uploadListener($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReadCSVDataComponent_input_8_Template, 1, 0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReadCSVDataComponent_div_11_Template, 5, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReadCSVDataComponent_table_14_Template, 7, 5, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReadCSVDataComponent_ng_template_16_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 4, ctx.records, ctx.searchText).length > 0)("ngIfElse", _r4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
      styles: ["table.borderBlack[_ngcontent-%COMP%] {  \r\n    border: 1px solid #000;  \r\n    width: 100%;  \r\n    text-align: center !important;  \r\n    border-collapse: collapse;\r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.borderBlack[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {  \r\n    border: 1px solid #000;  \r\n    padding: 5px 4px;\r\n    text-align: center;  \r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {  \r\n    font-size: 14px; \r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {  \r\n    background: #cfcfcf;  \r\n    border-bottom: 1px solid #000; \r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {  \r\n    font-size: 15px;  \r\n    font-weight: 700;  \r\n    color: #000;  \r\n    text-align: center;  \r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {  \r\n    font-size: 14px;  \r\n    font-weight: 700;  \r\n    color: #000;  \r\n    border-top: 1px solid #000  \r\n}  \r\n  \r\ntable.borderBlack[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {  \r\n    font-size: 14px  \r\n}  \r\n  \r\n.my-icon[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: gray;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZC1jc3ZkYXRhL3JlYWQtY3N2ZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlYWQtY3N2ZGF0YS9yZWFkLWNzdmRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmJvcmRlckJsYWNrIHsgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDsgIFxyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyAgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59ICBcclxuICBcclxudGFibGUuYm9yZGVyQmxhY2sgdGQsICBcclxudGFibGUuYm9yZGVyQmxhY2sgdGggeyAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAgXHJcbiAgICBwYWRkaW5nOiA1cHggNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbn0gIFxyXG4gIFxyXG50YWJsZS5ib3JkZXJCbGFjayB0Ym9keSB0ZCB7ICBcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbn0gIFxyXG4gIFxyXG50YWJsZS5ib3JkZXJCbGFjayB0aGVhZCB7ICBcclxuICAgIGJhY2tncm91bmQ6ICNjZmNmY2Y7ICBcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyBcclxufSAgXHJcbiAgXHJcbnRhYmxlLmJvcmRlckJsYWNrIHRoZWFkIHRoIHsgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4OyAgXHJcbiAgICBmb250LXdlaWdodDogNzAwOyAgXHJcbiAgICBjb2xvcjogIzAwMDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbn0gIFxyXG4gIFxyXG50YWJsZS5ib3JkZXJCbGFjayB0Zm9vdCB7ICBcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgIFxyXG4gICAgY29sb3I6ICMwMDA7ICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwICBcclxufSAgXHJcbiAgXHJcbnRhYmxlLmJvcmRlckJsYWNrIHRmb290IHRkIHsgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4ICBcclxufSAgXHJcblxyXG4ubXktaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadCSVDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-read-csvdata',
          templateUrl: './read-csvdata.component.html',
          styleUrls: ['./read-csvdata.component.css']
        }]
      }], function () {
        return [];
      }, {
        csvReader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileReader']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/read-csvdata/read-csvdataModal.ts":
  /*!***************************************************!*\
    !*** ./src/app/read-csvdata/read-csvdataModal.ts ***!
    \***************************************************/

  /*! exports provided: CSVRecord */

  /***/
  function srcAppReadCsvdataReadCsvdataModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSVRecord", function () {
      return CSVRecord;
    });

    var CSVRecord = function CSVRecord() {
      _classCallCheck(this, CSVRecord);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\parseCSV\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map