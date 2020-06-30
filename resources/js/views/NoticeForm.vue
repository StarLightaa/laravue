<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <b-form @submit.prevent="onSubmit()">
          <b-form-group id="input-group-title" label="Заголовок:" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="form.title"
              required
              placeholder="Введите заголовок"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="textarea-group-body" label="Текст:" label-for="textarea-body">
            <b-form-textarea
              id="textarea-body"
              v-model="form.body"
              placeholder="Введите текст"
              rows="3"
            ></b-form-textarea>
          </b-form-group>

          <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group> -->

          <b-button type="submit" variant="primary">Сохранить</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
  import * as noticeService from '../services/notice_service';
  export default {
    data() {
      return {
        form: {
          title: '',
          body: '',
        },
        edited: false
      }
    },
    mounted() {
      this.isEdit();
    },
    methods: {
      isEdit() {
        if(!this.$route.params.notice_id)
          return;
        if(!this.$route.params.notice)
          this.$router.push('/notices');
        let notice = this.$route.params.notice;
        if(notice) {
          this.form.title = notice.title,
          this.form.body = notice.body,
          this.edited = true
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
      onSubmit: async function() {
        let formData = new FormData();
        formData.append('title', this.form.title);
        formData.append('body', this.form.body);

        try{
          if(!this.edited) {
            const response = await noticeService.createNotice(formData);
          } else {
            formData.append('_method', 'put');
            const response = await noticeService.updateNotice(this.$route.params.notice_id,formData);
          } 
            //this.$router.push('/notices');
        } catch(error) {
            console.log(error);
            // switch(error.response.status) {
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
        }
      },
    }
  }
</script>