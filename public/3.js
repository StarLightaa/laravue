(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notices.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Notices.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notice_service */ "./resources/js/services/notice_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notice',
  data: function data() {
    return {
      noticeData: {}
    };
  },
  methods: {
    createNotice: function () {
      var _createNotice = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('title', 'test title');
                formData.append('body', 'test body');
                _context.prev = 3;
                _context.next = 6;
                return _services_notice_service__WEBPACK_IMPORTED_MODULE_1__["createNotice"](formData);

              case 6:
                response = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0); // switch(error.response.status) {
                //     case 422:
                //         this.errors = error.response.data.errors;
                //         break;
                //     default:
                //         this.flashMessage.error({
                //             message: 'Some error occurred. Please try again!',
                //             time: 3000
                //         });
                //         break;
                // }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      function createNotice() {
        return _createNotice.apply(this, arguments);
      }

      return createNotice;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notices.vue?vue&type=template&id=1909d968&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Notices.vue?vue&type=template&id=1909d968& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("main", [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-8 col-md-10 mx-auto" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      return _vm.createNotice()
                    }
                  }
                },
                [_vm._v("Create notice")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary float-right",
                  attrs: { href: "#" }
                },
                [_vm._v("Older Posts →")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      {
        staticClass: "masthead",
        staticStyle: { "background-image": "url('img/home-bg.jpg')" }
      },
      [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-8 col-md-10 mx-auto" }, [
              _c("div", { staticClass: "site-heading" }, [
                _c("h1", [_vm._v("Заметки")])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "post-preview" }, [
      _c("a", { attrs: { href: "post.html" } }, [
        _c("h2", { staticClass: "post-title" }, [
          _vm._v(
            "\n                Man must explore, and this is exploration at its greatest\n              "
          )
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "post-subtitle" }, [
          _vm._v(
            "\n                Problems look mighty small from 150 miles up\n              "
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "post-meta" }, [
        _vm._v("Posted by\n              "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")]),
        _vm._v("\n              on September 24, 2019")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: 'Bearer '
    }
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: 'Bearer ',
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/services/notice_service.js":
/*!*************************************************!*\
  !*** ./resources/js/services/notice_service.js ***!
  \*************************************************/
/*! exports provided: createNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotice", function() { return createNotice; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createNotice(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/notices', data);
}

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    apiURL: 'http://127.0.0.1:8000/api',
    serverPath: 'http://127.0.0.1:8000'
  },
  mutations: {},
  actions: {}
}));

/***/ }),

/***/ "./resources/js/views/Notices.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Notices.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notices.vue?vue&type=template&id=1909d968& */ "./resources/js/views/Notices.vue?vue&type=template&id=1909d968&");
/* harmony import */ var _Notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notices.vue?vue&type=script&lang=js& */ "./resources/js/views/Notices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Notices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Notices.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Notices.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Notices.vue?vue&type=template&id=1909d968&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Notices.vue?vue&type=template&id=1909d968& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notices.vue?vue&type=template&id=1909d968& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notices.vue?vue&type=template&id=1909d968&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notices_vue_vue_type_template_id_1909d968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);