<template>
  <div class="card my-4">
    <h5 class="card-header">Categories</h5>
    <div class="card-body">
      <div class="form-check" v-for="(category, index) in categories" :key="category.id">
        <input class="form-check-input" type="checkbox" :value="category.id" :id="'category'+index" v-model="selected.categories">
        <label class="form-check-label" :for="'category' + index">
            {{ category.name }} ({{ 1 }})
        </label>
      </div>
      <!-- <div class="row">
        <ul class="list-unstyled mb-0">
          <li v-for="category in categories" :key="category.id">
            <a href="#">{{ category.name }}</a>
          </li>

          <li>
            <button @click="noticesByCategory('js')">JavaScript</button>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
  import * as categoryService from '../services/category_service';

  export default {
    name: 'Categories',
    data() {
      return {
        categories: [],
        selected: {
          categories: [],
        }
      }
    },
    mounted() {
      this.loadCategories();
    },
    watch: {
      selected: {
        handler: function () {
          this.noticesByCategory();
        },
        deep: true
      }
    },
    methods: {
      loadCategories: async function() {
        try {
          const response = await categoryService.loadCategories();
          this.categories = response.data;
        } catch(error) {
            alert('Some error occurred')
        }
      },
      noticesByCategory: async function(category_code) {
        try {
          // let formData = new FormData();
          // formData.append('category_code', category_code);
          // const response = await categoryService.noticesByCategory(category_code,formData);
          //this.notices = response.data;
          const response = await categoryService.noticesByCategory(category_code,this.selected);
        } catch(error) {
            alert('Some error occurred')
        }
      },
    }, 
  }
</script>


