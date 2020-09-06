<template>
  <div>
    <!-- Navigation bar  -->
    <navigation></navigation>

    <!-- Content Page  -->
    <div v-if="dataLoaded" style="margin-top: 60px;">
      <div style="display: flex; background-color: #faf6dc; font-size: 13px; border: 1px solid #0169aa;">
        <!-- Beer image -->
        <div style="position: relative; background-color: white; width: 60%; ">
          <div style="text-align: center;">
            <img alt="Beer Image" :src="beer.image_url" style="height: 420px; margin: 10px;">
          </div>
          <div style="position: absolute; top: 8px; right: 30px;">

              <!-- Btn add/remove beer from favorites -->
              <favorite-icon :beer="beer" @set-favorite="updateFavorites"></favorite-icon>

          </div>
        </div>
        <!-- Beer details -->
        <div style="width: 40%; margin: 10px;">
          <span style="font-size: 20px;"><strong>{{ beer.name }}</strong></span>
          <div style="margin-top: 5px;">
            <div>Description :</div>
            <div>{{ beer.description }}</div>
          </div>
          <div style="margin-top: 10px;">
            <div style="height: 25px; background-color: #e6cd70; text-align: center;">
              Beer Details
            </div>
            <div class="description-lane">
              <span>Tagline</span>
              <span>{{ beer.tagline }}</span>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>First brewed</span>
              <span>{{ beer.first_brewed }}</span>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>Attenuation level</span>
              <span>{{ beer.attenuation_level }}</span>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>Volume</span>
              <div>
                <span>{{ beer.volume.value }}</span> /
                <span>{{ beer.volume.unit }}</span>
              </div>
            </div>
            <div class="description-lane">
              <span>Boil volume</span>
              <div>
                <span>{{ beer.boil_volume.value }}</span> /
                <span>{{ beer.boil_volume.unit }}</span>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>Yeast</span>
              <span>{{ beer.yeast }}</span>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>PH</span>
              <span>{{ beer.ph }}</span>
            </div>
            <v-divider></v-divider>
            <div class="description-lane">
              <span>Fermentation</span>
              <div>
                <span>{{ beer.method.fermentation.temp.value }}</span> /
                <span>{{ beer.method.fermentation.temp.unit }}</span>
              </div>
            </div>
            <v-divider></v-divider>
          </div>
        </div>
      </div>

      <!-- Navigation prev/next -->
      <div style="margin-top: 25px; text-align: center;">
        <v-btn :disabled="beer.id === 1" rounded
              style="background-color: #0169aa; color: white; width: 130px; margin-right: 10px;"
              @click="loadPreviousBeer()">
          Previous
        </v-btn>
        <v-btn rounded style="background-color: #0169aa; color: white; width: 130px;"
              @click="loadNextBeer()">
          Next
        </v-btn>
      </div>

      <!-- Display saving message -->
      <saving-bar :snackbar="snackbar" :is-favorite="isFavorite"></saving-bar>
    </div>

    <!-- Footer page -->
    <about></about>
  </div>
</template>

<style>
  .description-lane {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import ApiSrv from '@/js/services/ApiSrv';
import Navigation from '@/components/Navigation/Navigation.vue';
import About from '@/components/About/About.vue';
import FavoriteIcon from '@/components/Reusables/FavoriteIcon.vue';
import SavingBar from '@/components/Reusables/SavingBar.vue';

export default {
  components: {
    Navigation,
    About,
    FavoriteIcon,
    SavingBar,
  },

  data() {
    return {
      beer: {},
      dataLoaded: false,
      isFavorite: false,
      snackbar: { value: false },
    };
  },
  created() {
    const beerId = parseInt(this.$route.params.id, 10);
    const apiUrl = `https://api.punkapi.com/v2/beers/${beerId}`;
    ApiSrv.call('GET', apiUrl).then((response) => {
      const data = response[0];
      this.beer = data;
      this.dataLoaded = true;
    }).catch((message) => {
      console.log(message);
    });
  },
  methods: {
    loadPreviousBeer() {
      const previousBeerId = this.beer.id - 1;
      this.apiCall(previousBeerId);
    },
    loadNextBeer() {
      const nextBeerId = this.beer.id + 1;
      this.apiCall(nextBeerId);
    },
    // Get api data of beer
    apiCall(beerId) {
      const apiUrl = `https://api.punkapi.com/v2/beers/${beerId}`;
      ApiSrv.call('GET', apiUrl).then((response) => {
        const data = response[0];
        this.beer = data;
        this.dataLoaded = true;
      }).catch((message) => {
        console.log(message);
      });
    },
    // Update favorite beers list
    updateFavorites(value) {
      this.isFavorite = value;
      this.snackbar.value = true;

      const beerId = parseInt(this.$route.params.id, 10);
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
