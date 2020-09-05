<template>
  <div v-show="dataLoaded && beers.length" style="padding-bottom: 60px;">
    <!-- Display of the beers list -->
    <v-container fluid>
      <v-row>
        <v-col v-for="beer in beers" :key="beer.id" xl="3" lg="3" md="3" sm="4" xs="6" cols="12">
          <home-beers-beer :beer="beer" @updateFavorites="updateFavorites(beer.id)"></home-beers-beer>
        </v-col>
      </v-row>
    </v-container>

    <!-- Pagination -->
    <v-pagination v-model="currentPage" :length="totalPages" color="#0169aa"
                  @input="loadBeers()">
    </v-pagination>
  </div>
</template>

<script>
import ApiSrv from '@/js/services/ApiSrv';
import HomeBeersBeer from './HomeBeersBeer.vue';

export default {
  components: {
    HomeBeersBeer,
  },

  data() {
    return {
      beers: [],
      dataLoaded: false,
      currentPage: 1,
      totalPages: 10,
      favoriteBeers: [],
    };
  },
  created() {
    this.loadBeers();
  },
  methods: {
    // load beers list for the current page
    loadBeers() {
      this.apiCall(this.currentPage);
    },
    // load api data of beers
    apiCall(currentPage) {
      const apiUrl = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=16`;
      ApiSrv.call('GET', apiUrl).then((response) => {
        this.beers = response;
        this.dataLoaded = true;
      }).catch((message) => {
        console.log(message);
      });
    },
    // Update favorite beers list
    updateFavorites(beerId) {
      if (! this.favoriteBeers.find((id) => id === beerId)) { // add beer to favorites
        this.favoriteBeers.push(beerId);
      } else { // remove beer from favorites
        const index = this.favoriteBeers.indexOf(beerId);
        if (index > -1) this.favoriteBeers.splice(index, 1);
      }
      this.$store.commit('updateFavoriteBeers', this.favoriteBeers);
    },
  },
};
</script>
