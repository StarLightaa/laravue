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
          v-for="notice in allNotices" 
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
            <div class="form-check" v-for="(category, index) in allCategories" :key="category.id">
              <input class="form-check-input" type="checkbox" :value="category.id" :id="'category'+index" v-model="userSelectedCategories.categories">
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
  import { mapGetters, mapActions } from 'vuex';
  import Notice from  './Notice.vue';
  export default {
    name: 'Notices',
    components: {
      Notice,
    },
    computed: mapGetters(["allNotices","allCategories","userSelectedCategories"]),
    data() {
      return {}
    },
    async mounted() {
      this.loadCategories();
      this.loadNotices();
    },
    watch: {
      userSelectedCategories: {
        handler: function () {
          this.loadNotices(this.userSelectedCategories);
        },
        deep: true
      }
    },
    methods: {
      ...mapActions(["loadNotices", "loadCategories", "changeSelectedCategories"]),
    }, 
  }
</script>
