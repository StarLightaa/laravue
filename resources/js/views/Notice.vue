<template>
  <div class="card mb-4">
    <div class="card-body">
      <h2 class="card-title">{{ notice.title }}</h2>
      <p class="card-text">
        {{ notice.body }}
      </p>
      <!-- <a href="#" class="btn btn-primary btn-sm">Редактировать</a> -->
      <router-link class="btn btn-primary btn-sm" 
        :to="{
          name: 'notice-edit', 
          params: { notice_id: notice.id, notice:notice}
        }"   
      >Редактировать</router-link>
      <a href="#" class="btn btn-danger btn-sm">Удалить</a>
    </div>
    <div class="card-footer text-muted">
      Posted on January 1, 2020 by
      <a href="#">Start Bootstrap</a>
    </div>

    <div class="card-footer text-muted">
      <span>Создана {{ notice.created_at}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Notice',
      props: ['notice'],
      methods: {
        // editNotice: async function() {
        //     try {
        //         const formData = new FormData();
        //         formData.append('name', this.editCategoryData.name);
        //         formData.append('image', this.editCategoryData.image);
        //         formData.append('_method', 'put');

        //         const response = await categoryService.updateCategory(this.editCategoryData.id, formData);
        //         this.categories.map(category => {
        //             if(category.id == response.data.id) {
        //                 for(let key in response.data) {
        //                     category[key] = response.data[key];
        //                 }
        //             }
        //         });

        //         this.hideEditCategoryModal();
        //         this.flashMessage.success({
        //             message: 'Category updated successfully!',
        //             time: 3000
        //         });
        //     } catch(error) {
        //         this.flashMessage.error({
        //             message: error.response.data.message,
        //             time: 3000
        //         });
        //     }
        // },
      }
    }
</script>