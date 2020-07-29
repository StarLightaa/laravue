<template>
  <div class="container">
    <h1 class="title">Список задач</h1>
    <h2 class="subtitle"> </h2>
    <div class="mb-5">
      <b-button variant="primary" v-b-modal.modal1>Добавить задачу</b-button>
      <b-button variant="danger">Удалить все задачи</b-button>

      <div>
        <form ref="form1" @submit.stop.prevent="handleSubmit">
            <b-form-group
              :state="nameState"
              label="Текст задачи"
              label-for="name-input"
              invalid-feedback="Пожалуйста заполните текст для новой задачи"
            >
              <b-form-input
                id="name-input"
                v-model="taskInput"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
          <b-button variant="primary" size="sm">TO:DO - Создать задачу</b-button>
      </div>
      <b-form-select v-model="selectedTaskList" :options="TaskListCombobox" size="sm" class="mt-3"></b-form-select>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table
          show-empty
          small
          stacked="md"
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          responsive="sm"
        >
          <template v-slot:cell(status)="row">
            <b-form-select v-model="row.item.status" :options="TaskListStatusCombobox" size="sm"></b-form-select>
          </template>

          <template v-slot:cell(priority)="row">
            <b-form-select v-model="row.item.priority" :options="TaskListPriorityCombobox" size="sm"></b-form-select>
          </template>

          <template v-slot:cell(deadline)="row">
            <b-form-datepicker v-model="row.item.deadline" size="sm"></b-form-datepicker>
          </template>

          <template v-slot:cell(edit)="row">
            <!-- <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
              Edit
            </b-button> -->
            <b-button variant="primary" v-b-modal.modal1 @click="itemToEdit=row.item">Edit</b-button>
            <!-- <b-button variant="primary" @click="info(row.item, row.index, $event.target)">Edit</b-button> -->
          </template>

          <template v-slot:cell(delete)="row">
            <b-button variant="danger" @click="deleteTask(row.item, row.index)">Delete</b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <!-- <TaskForm></TaskForm> -->
        <!-- Info modal -->
        <!-- <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
          <pre>{{ infoModal.content }}</pre>
        </b-modal> -->
        <b-modal
          id="modal1"
          ref="modal"
          title="Введите задачу"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              :state="nameState"
              label="Текст задачи"
              label-for="name-input"
              invalid-feedback="Пожалуйста заполните текст для новой задачи"
            >
              <b-form-input
                id="name-input"
                v-model="taskInput"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>

        <div>
          Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
          <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
        </div>
      </div>
    </div>

    <TaskForm></TaskForm>

  </div>
</template>

<script>
  import TaskForm from './TaskForm.vue';
  export default {
    components: {
      TaskForm,
    },
    data() {
      return {
        selectedTaskList: 'all',
        TaskListCombobox: [
          { value: 'todo', text: 'открытые' },
          { value: 'done', text: 'завершенные'},
          { value: 'all', text: 'все задачи'}
        ],
        TaskListStatusCombobox: [
          { value: 'now', text: 'В работе' },
          { value: 'pending', text: 'Ожидание'},
          { value: 'bugfix', text: 'Ошибка'}
        ],
        TaskListPriorityCombobox: [
          { value: 'hot', text: 'Срочный!' },
          { value: 'high', text: 'Высокий' },
          { value: 'normal', text: 'Нормальный'},
          { value: 'low', text: 'Низкий'}
        ],
        taskInput: '',
        nameState: null,
        submittedNames: [],
        itemToEdit: null,
        priorities:[
          { id:0, name: "Срочный"},
          { id:1, name: "Нормальный"},
          { id:2, name: "Низкий"},
        ],

        sortBy: 'age',
        sortDesc: false,
        fields: [
          { label: '#', key: 'id', sortable: true },
          { label: 'Задача', key: 'subject', sortable: true },
          { label: 'Статус', key: 'status', sortable: true },
          { label: 'Приоритет', key: 'priority', sortable: true },
          { label: 'Срок выполнения', key: 'deadline', sortable: true },
          { label: 'Изменена', key: 'updated_at', sortable: true },
          { label: 'Завершена',key: 'done', sortable: true },
          { label: 'Редактировать', key: 'edit', sortable: false },
          { label: 'Удалить', key: 'delete', sortable: false },
          { label: 'Дополнительно',key: 'links', sortable: false },
        ],
        items: [
          { id: 1, status: 'now', priority: 'normal', subject: 'Task Desc1', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 25th 2020, 16:23 pm', done: false, links:'TODO Modal Window for this'},
          { id: 2, status: 'pending', priority: 'high', subject: 'Task Description Text1', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: '2020-07-10',done: true, links:'fontAwesome Exist/Empty'},
          { id: 3, status: { name:"Ошибка"}, priority: 'normal', subject: 'Task Description Text2', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: '2020-09-10',done: true},
          { id: 4, status: { name:"Ожидание"}, priority: 'low', subject: 'Task Description4', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 30th 2020, 16:23 pm',done: false},
        ],
        itemsCopy: [
          { id: 1, status: { name:"В работе"}, priority: { name:"Нормальный"}, subject: 'Task Desc1', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 25th 2020, 16:23 pm', done: false},
          { id: 2, status: { name:"Ожидание"}, priority: { name:"Срочный"}, subject: 'Task Description Text1', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 26th 2020, 16:23 pm',done: true},
          { id: 3, status: { name:"Ошибка"}, priority: { name:"Низкий"}, subject: 'Task Description Text2', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 28th 2020, 16:23 pm',done: true},
          { id: 4, status: { name:"Ожидание"}, priority: { name:"Нормальный"}, subject: 'Task Description4', assignee: 'Igor Petrov', author: 'Igor Petrov', updated_at: 'July 5th 2020, 3:23 pm', deadline: 'July 30th 2020, 16:23 pm',done: false},
        ],

        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
      }
    },
    watch: {
      selectedTaskList: function() {
        let isDone = (this.selectedTaskList) === 'done' ? true : false;
        if(this.selectedTaskList !== 'all')
          this.filterTaskListByDone(isDone);
        else
          this.items = this.itemsCopy;
      },
    },
    methods:{
      deleteTask(item, index) {
        //console.log(item, index)
        this.items = this.items.filter(obj => {
            return obj.id != item.id;
        });
      },
      filterTaskListByDone(isDone) {
        this.items = this.itemsCopy.filter(elem => elem.done === isDone);
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.taskInput = 'q'
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        //this.submittedNames.push(this.name)
        // Hide the modal manually
        let newTask = { 
          id: 1, status: 0, priority: { name:"Нормальный"}, subject: this.taskInput, 
          updated_at: 'July 5th 2020, 3:23 pm', 
          deadline: 'July 25th 2020, 16:23 pm'};
        //this.items.push(newTask);
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>