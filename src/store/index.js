import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const favoriteBeersSaved = localStorage.getItem('favoriteBeers');

export default new Vuex.Store({
  namespaced: true,
  state: {
    favoriteBeers: (favoriteBeersSaved) ? JSON.parse(favoriteBeersSaved) : [],
  },
  mutations: {
    updateFavoriteBeers(state, favoriteBeers) {
      if (window.localStorage) { // if window localStorage is available, save favorite beers ids
        localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeers));
      } else {
        console.log('localStorage is not available');
        state.favoriteBeers = favoriteBeers;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
