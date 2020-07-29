<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
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
  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        taskInput: 'qqq',
        nameState: null,
        submittedNames: [],
        form1: {
          title:'',
        },
      }
    },
    methods:{
      // info(item, index, button) {
      //   this.infoModal.title = `Row index: ${index}`
      //   this.infoModal.content = JSON.stringify(item, null, 2)
      //   this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      // },
      // resetInfoModal() {
      //   this.infoModal.title = ''
      //   this.infoModal.content = ''
      // },
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