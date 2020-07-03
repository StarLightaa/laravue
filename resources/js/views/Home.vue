<template>
  <div>
    <Navbar />
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Navbar from '../components/Navbar.vue';
  import Footer from  '../components/Footer.vue';
  export default {
    components: {
      Navbar,
      Footer,
    },
    async mounted() {
      // Базовый компонент, в основе всех View, загрузим Vuex тут
      this.loadNotices();
      this.loadCategories();
    },
    methods: {
      ...mapActions(["loadNotices","loadCategories"]),
    }, 
  }
</script>