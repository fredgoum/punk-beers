<template>
  <div class="beerpreview">
    <div style="display: flex; background-color: #faf6dc; height: 120px;">
      <div style="width: 90%;">
        <!-- Beer image -->
        <router-link :to="beerLink(beer)" style="">
          <div style="background-color: #fdfdfd;">
            <img :src="beer.image_url" alt="Beer Image" style="height: 100px;">
          </div>
        </router-link>
        <!-- Beer name  -->
        <div style="background-color: #faf6dc;">{{ beer.name }}</div>
      </div>

      <!-- Btn add/remove beer from favorites -->
      <div style="width: 10%; margin-top: 3px;">
        <font-awesome-icon :icon="['fas', 'heart']" :color="isFavorite ? '#0169aa' : 'gray'" size="lg" style="cursor: pointer;"
          @click="updateFavorites()">
        </font-awesome-icon>
      </div>

      <!-- Display action message -->
      <v-snackbar v-model="snackbar" :color="isFavorite ? '#006400' : '#EC241E'" shaped right timeout=1500>
        <span v-if="isFavorite">Beer added to favorites</span>
        <span v-else>Beer remove from favorites</span>
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<style scoped>
  .beerpreview {
    border-radius: 10px;
    border-top-left-radius: 0;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    overflow: hidden;
    text-align: center;
    font-size: 13px;
  }
</style>

<script>
import commonfunctions from '@/js/commonfunctions';

export default {
  props: {
    beer: { required: true, type: Object },
  },
  data() {
    return {
      isFavorite: false,
      snackbar: false,
    };
  },
  methods: {
    // return beer route link
    beerLink() {
      return `beer/${this.beer.id}/${commonfunctions.slugify(this.beer.name)}`;
    },
    // Update favorite beers list
    updateFavorites() {
      this.isFavorite = ! this.isFavorite;
      this.snackbar = true;
      this.$emit('updateFavorites');
    },
  },
};
</script>
