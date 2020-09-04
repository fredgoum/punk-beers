import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoriteBeers: [],
  },
  mutations: {
    updateFavoriteBeers(state, newFavoriteBeers) {
      state.favoriteBeers = newFavoriteBeers;
    },
  },
  actions: {
  },
  modules: {
  },
});
