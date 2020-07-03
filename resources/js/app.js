import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
