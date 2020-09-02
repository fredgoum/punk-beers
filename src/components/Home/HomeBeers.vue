<template>
  <!-- Display of the beers list -->
  <div v-show="dataLoaded && beers.length">
    <v-container fluid>
      <v-row>
        <v-col v-for="beer in beers" :key="beer.id" xl="3" lg="3" md="3" sm="4" xs="6" cols="12">
          <home-beers-beer :beer="beer"></home-beers-beer>
        </v-col>
      </v-row>
    </v-container>
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
    };
  },
  created() {
    ApiSrv.call('GET').then((response) => {
      this.beers = response;
      this.dataLoaded = true;
    }).catch((message) => {
      console.log(message);
    });
  },
};
</script>
