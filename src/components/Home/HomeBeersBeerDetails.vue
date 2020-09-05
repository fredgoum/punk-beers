<template>
  <div v-if="dataLoaded">
    <!-- Navigation bar  -->
    <navigation></navigation>

    <!-- Content Page  -->
    <div style="display: flex; background-color: #faf6dc; font-size: 13px; border: 1px solid #0169aa;">
      <!-- Beer image -->
      <div style="text-align: center; background-color: white; width: 60%;">
        <img alt="Beer Image" :src="beer.image_url" style="height: 420px; margin: 10px;">
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
import Navigation from '@/components/Navigation/Navigation.vue';
import About from '@/components/About/About.vue';
import ApiSrv from '@/js/services/ApiSrv';

export default {
  components: {
    Navigation,
    About,
  },

  data() {
    return {
      beer: {},
      dataLoaded: false,
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
};
</script>
