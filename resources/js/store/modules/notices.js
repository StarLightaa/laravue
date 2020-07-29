import {http, httpFile} from '../../services/http_service';
export default {
  state: {
    notices:[],
  },
  actions: {
    async loadNotices({commit}, selectedCategories) {
      const response = await http().get('/notices',{ params: selectedCategories });
      commit('updateNotices',response.data);
    },
    async searchNotices({commit}, searchString) {
      const response = await http().get('/search',{ params:{ search: searchString } } );
      commit('updateNotices',response.data);
    },

  },
  mutations: {
    updateNotices(state, notices) {
      state.notices = notices;
    }
  },
  getters: {
    allNotices(state) {
      return state.notices;
    },
    noticesCount(state) {
      return state.notices.lenght;
    }
  },
}