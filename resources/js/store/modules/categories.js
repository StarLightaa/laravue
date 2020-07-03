import {http, httpFile} from '../../services/http_service';
export default {
  state: {
    categories:[],
    selected: { categories: [],},
  },
  actions: {
    async loadCategories({commit}) {
      const response = await http().get('/categories');
      commit('updateCategories',response.data);
    },
    changeSelectedCategories({commit}, selectedCategories) {
      commit('updateSelected',selectedCategories);
    },

  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    },
    updateSelected(state, selectedCategories) {
      state.selected = selectedCategories;
    }
  },
  getters: {
    allCategories(state) {
      return state.categories;
    },
    categoriesCount(state) {
      return state.categories.lenght;
    },
    userSelectedCategories(state) {
      return state.selected;
    }
  },
}