<template>
  <div>
    <!-- Progress for data loading -->
    <div v-if="! dataLoaded" style="text-align: center;">
      <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="padding-bottom: 180px;"></v-progress-circular>
    </div>

    <!-- Display of the beers list -->
    <div v-show="dataLoaded && beers.length" style="padding-bottom: 60px;">
      <v-container fluid>
        <v-row>
          <v-col v-for="beer in beers" :key="beer.id" xl="3" lg="3" md="6" sm="6" xs="12" cols="12">
            <home-beers-beer :beer="beer" @updateFavorites="updateFavorites(beer.id)"></home-beers-beer>
          </v-col>
        </v-row>
      </v-container>

      <!-- Pagination -->
      <v-pagination v-model="currentPage" :length="totalPages" color="#0169aa"
                    @input="loadBeers()">
      </v-pagination>
    </div>
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
    };
  },
  created() {
    this.loadBeers(this.currentPage);
  },
  methods: {
    // load beers list for the current page
    loadBeers() {
      const apiUrl = `https://api.punkapi.com/v2/beers?page=${this.currentPage}&per_page=16`;
      ApiSrv.call('GET', apiUrl).then((response) => {
        this.beers = response;
        this.dataLoaded = true;
      }).catch((message) => {
        console.log(message);
      });
    },
    // Update favorite beers list
    updateFavorites(beerId) {
      const beers = this.$store.state.favoriteBeers;
      if (! beers.find((id) => id === beerId)) { // add beer to favorites
        beers.push(beerId);
      } else { // remove beer from favorites
        const index = beers.indexOf(beerId);
        if (index > -1) beers.splice(index, 1);
      }
      this.$store.commit('updateFavoriteBeers', beers);
    },
  },
};
</script>
