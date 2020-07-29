(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaskForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  components: {},
  data: function data() {
    return {
      taskInput: 'qqq',
      nameState: null,
      submittedNames: [],
      form1: {
        title: ''
      }
    };
  },
  methods: {
    // info(item, index, button) {
    //   this.infoModal.title = `Row index: ${index}`
    //   this.infoModal.content = JSON.stringify(item, null, 2)
    //   this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    // },
    // resetInfoModal() {
    //   this.infoModal.title = ''
    //   this.infoModal.content = ''
    // },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.taskInput = 'q';
      this.nameState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      } // Push the name to submitted names
      //this.submittedNames.push(this.name)
      // Hide the modal manually


      var newTask = {
        id: 1,
        status: 0,
        priority: {
          name: "Нормальный"
        },
        subject: this.taskInput,
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 25th 2020, 16:23 pm'
      }; //this.items.push(newTask);

      this.$nextTick(function () {
        _this.$bvModal.hide('modal-prevent-closing');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm.vue */ "./resources/js/views/TaskForm.vue");
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
  components: {
    TaskForm: _TaskForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selectedTaskList: 'all',
      TaskListCombobox: [{
        value: 'todo',
        text: 'открытые'
      }, {
        value: 'done',
        text: 'завершенные'
      }, {
        value: 'all',
        text: 'все задачи'
      }],
      TaskListStatusCombobox: [{
        value: 'now',
        text: 'В работе'
      }, {
        value: 'pending',
        text: 'Ожидание'
      }, {
        value: 'bugfix',
        text: 'Ошибка'
      }],
      TaskListPriorityCombobox: [{
        value: 'hot',
        text: 'Срочный!'
      }, {
        value: 'high',
        text: 'Высокий'
      }, {
        value: 'normal',
        text: 'Нормальный'
      }, {
        value: 'low',
        text: 'Низкий'
      }],
      taskInput: '',
      nameState: null,
      submittedNames: [],
      itemToEdit: null,
      priorities: [{
        id: 0,
        name: "Срочный"
      }, {
        id: 1,
        name: "Нормальный"
      }, {
        id: 2,
        name: "Низкий"
      }],
      sortBy: 'age',
      sortDesc: false,
      fields: [{
        label: '#',
        key: 'id',
        sortable: true
      }, {
        label: 'Задача',
        key: 'subject',
        sortable: true
      }, {
        label: 'Статус',
        key: 'status',
        sortable: true
      }, {
        label: 'Приоритет',
        key: 'priority',
        sortable: true
      }, {
        label: 'Срок выполнения',
        key: 'deadline',
        sortable: true
      }, {
        label: 'Изменена',
        key: 'updated_at',
        sortable: true
      }, {
        label: 'Завершена',
        key: 'done',
        sortable: true
      }, {
        label: 'Редактировать',
        key: 'edit',
        sortable: false
      }, {
        label: 'Удалить',
        key: 'delete',
        sortable: false
      }, {
        label: 'Дополнительно',
        key: 'links',
        sortable: false
      }],
      items: [{
        id: 1,
        status: 'now',
        priority: 'normal',
        subject: 'Task Desc1',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 25th 2020, 16:23 pm',
        done: false,
        links: 'TODO Modal Window for this'
      }, {
        id: 2,
        status: 'pending',
        priority: 'high',
        subject: 'Task Description Text1',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: '2020-07-10',
        done: true,
        links: 'fontAwesome Exist/Empty'
      }, {
        id: 3,
        status: {
          name: "Ошибка"
        },
        priority: 'normal',
        subject: 'Task Description Text2',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: '2020-09-10',
        done: true
      }, {
        id: 4,
        status: {
          name: "Ожидание"
        },
        priority: 'low',
        subject: 'Task Description4',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 30th 2020, 16:23 pm',
        done: false
      }],
      itemsCopy: [{
        id: 1,
        status: {
          name: "В работе"
        },
        priority: {
          name: "Нормальный"
        },
        subject: 'Task Desc1',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 25th 2020, 16:23 pm',
        done: false
      }, {
        id: 2,
        status: {
          name: "Ожидание"
        },
        priority: {
          name: "Срочный"
        },
        subject: 'Task Description Text1',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 26th 2020, 16:23 pm',
        done: true
      }, {
        id: 3,
        status: {
          name: "Ошибка"
        },
        priority: {
          name: "Низкий"
        },
        subject: 'Task Description Text2',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 28th 2020, 16:23 pm',
        done: true
      }, {
        id: 4,
        status: {
          name: "Ожидание"
        },
        priority: {
          name: "Нормальный"
        },
        subject: 'Task Description4',
        assignee: 'Igor Petrov',
        author: 'Igor Petrov',
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 30th 2020, 16:23 pm',
        done: false
      }],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    };
  },
  watch: {
    selectedTaskList: function selectedTaskList() {
      var isDone = this.selectedTaskList === 'done' ? true : false;
      if (this.selectedTaskList !== 'all') this.filterTaskListByDone(isDone);else this.items = this.itemsCopy;
    }
  },
  methods: {
    deleteTask: function deleteTask(item, index) {
      //console.log(item, index)
      this.items = this.items.filter(function (obj) {
        return obj.id != item.id;
      });
    },
    filterTaskListByDone: function filterTaskListByDone(isDone) {
      this.items = this.itemsCopy.filter(function (elem) {
        return elem.done === isDone;
      });
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.taskInput = 'q';
      this.nameState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      } // Push the name to submitted names
      //this.submittedNames.push(this.name)
      // Hide the modal manually


      var newTask = {
        id: 1,
        status: 0,
        priority: {
          name: "Нормальный"
        },
        subject: this.taskInput,
        updated_at: 'July 5th 2020, 3:23 pm',
        deadline: 'July 25th 2020, 16:23 pm'
      }; //this.items.push(newTask);

      this.$nextTick(function () {
        _this.$bvModal.hide('modal-prevent-closing');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { id: "modal-prevent-closing", title: "Введите задачу" },
          on: { hidden: _vm.resetModal, ok: _vm.handleOk }
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.handleSubmit($event)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    state: _vm.nameState,
                    label: "Текст задачи",
                    "label-for": "name-input",
                    "invalid-feedback":
                      "Пожалуйста заполните текст для новой задачи"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "name-input",
                      state: _vm.nameState,
                      required: ""
                    },
                    model: {
                      value: _vm.taskInput,
                      callback: function($$v) {
                        _vm.taskInput = $$v
                      },
                      expression: "taskInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h1", { staticClass: "title" }, [_vm._v("Список задач")]),
      _vm._v(" "),
      _c("h2", { staticClass: "subtitle" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-5" },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal.modal1",
                  modifiers: { modal1: true }
                }
              ],
              attrs: { variant: "primary" }
            },
            [_vm._v("Добавить задачу")]
          ),
          _vm._v(" "),
          _c("b-button", { attrs: { variant: "danger" } }, [
            _vm._v("Удалить все задачи")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "form",
                {
                  ref: "form1",
                  on: {
                    submit: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.handleSubmit($event)
                    }
                  }
                },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        state: _vm.nameState,
                        label: "Текст задачи",
                        "label-for": "name-input",
                        "invalid-feedback":
                          "Пожалуйста заполните текст для новой задачи"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "name-input",
                          state: _vm.nameState,
                          required: ""
                        },
                        model: {
                          value: _vm.taskInput,
                          callback: function($$v) {
                            _vm.taskInput = $$v
                          },
                          expression: "taskInput"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-button", { attrs: { variant: "primary", size: "sm" } }, [
                _vm._v("TO:DO - Создать задачу")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-form-select", {
            staticClass: "mt-3",
            attrs: { options: _vm.TaskListCombobox, size: "sm" },
            model: {
              value: _vm.selectedTaskList,
              callback: function($$v) {
                _vm.selectedTaskList = $$v
              },
              expression: "selectedTaskList"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("b-table", {
              attrs: {
                "show-empty": "",
                small: "",
                stacked: "md",
                items: _vm.items,
                fields: _vm.fields,
                "sort-by": _vm.sortBy,
                "sort-desc": _vm.sortDesc,
                responsive: "sm"
              },
              on: {
                "update:sortBy": function($event) {
                  _vm.sortBy = $event
                },
                "update:sort-by": function($event) {
                  _vm.sortBy = $event
                },
                "update:sortDesc": function($event) {
                  _vm.sortDesc = $event
                },
                "update:sort-desc": function($event) {
                  _vm.sortDesc = $event
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(status)",
                  fn: function(row) {
                    return [
                      _c("b-form-select", {
                        attrs: {
                          options: _vm.TaskListStatusCombobox,
                          size: "sm"
                        },
                        model: {
                          value: row.item.status,
                          callback: function($$v) {
                            _vm.$set(row.item, "status", $$v)
                          },
                          expression: "row.item.status"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "cell(priority)",
                  fn: function(row) {
                    return [
                      _c("b-form-select", {
                        attrs: {
                          options: _vm.TaskListPriorityCombobox,
                          size: "sm"
                        },
                        model: {
                          value: row.item.priority,
                          callback: function($$v) {
                            _vm.$set(row.item, "priority", $$v)
                          },
                          expression: "row.item.priority"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "cell(deadline)",
                  fn: function(row) {
                    return [
                      _c("b-form-datepicker", {
                        attrs: { size: "sm" },
                        model: {
                          value: row.item.deadline,
                          callback: function($$v) {
                            _vm.$set(row.item, "deadline", $$v)
                          },
                          expression: "row.item.deadline"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "cell(edit)",
                  fn: function(row) {
                    return [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal1",
                              modifiers: { modal1: true }
                            }
                          ],
                          attrs: { variant: "primary" },
                          on: {
                            click: function($event) {
                              _vm.itemToEdit = row.item
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      )
                    ]
                  }
                },
                {
                  key: "cell(delete)",
                  fn: function(row) {
                    return [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.deleteTask(row.item, row.index)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ]
                  }
                },
                {
                  key: "row-details",
                  fn: function(row) {
                    return [
                      _c("b-card", [
                        _c(
                          "ul",
                          _vm._l(row.item, function(value, key) {
                            return _c("li", { key: key }, [
                              _vm._v(_vm._s(key) + ": " + _vm._s(value))
                            ])
                          }),
                          0
                        )
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "modal",
                attrs: { id: "modal1", title: "Введите задачу" },
                on: { hidden: _vm.resetModal, ok: _vm.handleOk }
              },
              [
                _c(
                  "form",
                  {
                    ref: "form",
                    on: {
                      submit: function($event) {
                        $event.stopPropagation()
                        $event.preventDefault()
                        return _vm.handleSubmit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          state: _vm.nameState,
                          label: "Текст задачи",
                          "label-for": "name-input",
                          "invalid-feedback":
                            "Пожалуйста заполните текст для новой задачи"
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            id: "name-input",
                            state: _vm.nameState,
                            required: ""
                          },
                          model: {
                            value: _vm.taskInput,
                            callback: function($$v) {
                              _vm.taskInput = $$v
                            },
                            expression: "taskInput"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _vm._v("\n        Sorting By: "),
              _c("b", [_vm._v(_vm._s(_vm.sortBy))]),
              _vm._v(", Sort Direction:\n        "),
              _c("b", [
                _vm._v(_vm._s(_vm.sortDesc ? "Descending" : "Ascending"))
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("TaskForm")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/TaskForm.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/TaskForm.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm.vue?vue&type=template&id=07ed5388& */ "./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388&");
/* harmony import */ var _TaskForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskForm.vue?vue&type=script&lang=js& */ "./resources/js/views/TaskForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TaskForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TaskForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/TaskForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388&":
/*!************************************************************************!*\
  !*** ./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskForm.vue?vue&type=template&id=07ed5388& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskForm.vue?vue&type=template&id=07ed5388&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskForm_vue_vue_type_template_id_07ed5388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tasks.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Tasks.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=f579aa02& */ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=f579aa02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);