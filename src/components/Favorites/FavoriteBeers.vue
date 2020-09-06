<template>
  <div>
    <!-- Navigation bar -->
    <navigation></navigation>

    <!-- Progress for data loading -->
    <div v-if="! dataLoaded" style="text-align: center;">
      <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="padding-bottom: 180px;"></v-progress-circular>
    </div>

    <!-- Content Page -->
    <div v-show="dataLoaded && beers.length" style="padding-bottom: 60px;">
      <v-container fluid>
        <v-row>
          <v-col v-for="beer in beers" :key="beer.id" xl="3" lg="3" md="3" sm="4" xs="6" cols="12">
            <!-- Favorite Beers list -->
            <home-beers-beer :beer="beer" @updateFavorites="updateFavorites(beer.id)"></home-beers-beer>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-if="noFavorites" style="text-align: center; margin: 80px;">
      <span>You have no favorites</span>
    </div>

    <!-- Footer page -->
    <about></about>
  </div>
</template>

<script>
import ApiSrv from '@/js/services/ApiSrv';
import Navigation from '@/components/Navigation/Navigation.vue';
import HomeBeersBeer from '@/components/Home/HomeBeersBeer.vue';
import About from '@/components/About/About.vue';

export default {
  components: {
    Navigation,
    HomeBeersBeer,
    About,
  },
  data() {
    return {
      beers: [],
      noFavorites: false,
      dataLoaded: false,
      favoriteBeersId: this.$store.state.favoriteBeers,
    };
  },
  created() {
    // Get favorite beers api data
    ApiSrv.getBeersList(this.favoriteBeersId).then((response) => {
      this.beers = response;
      this.dataLoaded = true;
    }).catch((message) => {
      console.log(message);
    });

    if (! this.$store.state.favoriteBeers.length) {
      this.noFavorites = true;
    }
  },
  methods: {
    // Update favorite beers list
    updateFavorites(beerId) {
      if (! this.favoriteBeersId.find((id) => id === beerId)) { // add beer to favorites
        this.favoriteBeersId.push(beerId);
      } else { // remove beer from favorites
        const index = this.favoriteBeersId.indexOf(beerId);
        if (index > -1) this.favoriteBeersId.splice(index, 1);
      }
      this.$store.commit('updateFavoriteBeers', this.favoriteBeersId);
    },
  },
};
</script>
