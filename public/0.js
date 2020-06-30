(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NoticeForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NoticeForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        title: '',
        body: ''
      },
      edited: false
    };
  },
  mounted: function mounted() {
    this.isEdit();
  },
  methods: {
    isEdit: function isEdit() {
      if (!this.$route.params.notice_id) return;
      if (!this.$route.params.notice) this.$router.push('/notices');
      var notice = this.$route.params.notice;

      if (notice) {
        this.form.title = notice.title, this.form.body = notice.body, this.edited = true;
      }
    },
    // isEdit() {
    //   bool isEdit = this.$route.params.notice_id !== null;
    //   if(isEdit) {
    //     this.form.title = notice.title,
    //     this.form.body = notice.body
    //   }
    //   return isEdit;
    // },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('title', this.form.title);
                formData.append('body', this.form.body);
                _context.prev = 3;

                if (this.edited) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return _services_notice_service__WEBPACK_IMPORTED_MODULE_1__["createNotice"](formData);

              case 7:
                response = _context.sent;
                _context.next = 14;
                break;

              case 10:
                formData.append('_method', 'put');
                _context.next = 13;
                return _services_notice_service__WEBPACK_IMPORTED_MODULE_1__["updateNotice"](this.$route.params.notice_id, formData);

              case 13:
                _response = _context.sent;

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
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

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 16]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-8" },
        [
          _c(
            "b-form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit()
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-title",
                    label: "Заголовок:",
                    "label-for": "input-title"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-title",
                      required: "",
                      placeholder: "Введите заголовок"
                    },
                    model: {
                      value: _vm.form.title,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "title", $$v)
                      },
                      expression: "form.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "textarea-group-body",
                    label: "Текст:",
                    "label-for": "textarea-body"
                  }
                },
                [
                  _c("b-form-textarea", {
                    attrs: {
                      id: "textarea-body",
                      placeholder: "Введите текст",
                      rows: "3"
                    },
                    model: {
                      value: _vm.form.body,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "body", $$v)
                      },
                      expression: "form.body"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Сохранить")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            { staticClass: "mt-3", attrs: { header: "Form Data Result" } },
            [_c("pre", { staticClass: "m-0" }, [_vm._v(_vm._s(_vm.form))])]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/NoticeForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/NoticeForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoticeForm.vue?vue&type=template&id=43ef6c1b& */ "./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b&");
/* harmony import */ var _NoticeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoticeForm.vue?vue&type=script&lang=js& */ "./resources/js/views/NoticeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoticeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NoticeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NoticeForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/NoticeForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoticeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NoticeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NoticeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoticeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NoticeForm.vue?vue&type=template&id=43ef6c1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NoticeForm.vue?vue&type=template&id=43ef6c1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoticeForm_vue_vue_type_template_id_43ef6c1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);