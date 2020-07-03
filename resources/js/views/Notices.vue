<template>
    <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8">

        <h1 class="my-4">
          <small></small>
        </h1>

        <Notice
          v-for="notice in notices" 
          :key="notice.id"
          :notice = "notice"
        ></Notice>

        <!-- Pagination -->
        <ul class="pagination justify-content-center mb-4">
          <li class="page-item">
            <a class="page-link" href="#">&larr; Older</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>

      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">

        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-append">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="form-check" v-for="(category, index) in categories" :key="category.id">
              <input class="form-check-input" type="checkbox" :value="category.id" :id="'category'+index" v-model="selected.categories">
              <label class="form-check-label" :for="'category' + index">
                  {{ category.name }} ({{ category.notices_count }})
              </label>
            </div>
          </div>
        </div>

        <!-- Side Widget -->
        <div class="card my-4">
          <h5 class="card-header">Действиями с заметками</h5>
          <div class="card-body">
            <!-- <button class="btn btn-primary" @click="createNotice()">Новая заметка</button> -->
            <router-link :to="{ name: 'notice-create'}" class="btn btn-primary">Новая заметка</router-link>
          </div>
        </div>

      </div>

    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
  import * as noticeService from '../services/notice_service';
  import * as categoryService from '../services/category_service';
  import Notice from  './Notice.vue';
  import Categories from './Categories.vue';
  export default {
    name: 'Notices',
    components: {
      Notice,
      Categories,
    },
    data() {
      return {
        notices: [],
        categories: [],
        selected: {
          categories: [],
        }
      }
    },
    mounted() {
      this.loadNotices();
      this.loadCategories();
    },
    watch: {
      selected: {
        handler: function () {
          this.loadNotices();
        },
        deep: true
      }
    },
    methods: {
      loadNotices: async function() {
        try {
          const response = await noticeService.loadNotices(this.selected);
          this.notices = response.data;
        } catch(error) {
            alert('Some error occurred')
        }
      },
      loadCategories: async function() {
        try {
          const response = await categoryService.loadCategories();
          this.categories = response.data;
        } catch(error) {
            alert('Some error occurred')
        }
      },
    }, 
  }
</script>
