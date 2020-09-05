<template>
  <div class="beerpreview">
    <div style="display: flex; background-color: #faf6dc; height: 120px;">
      <div style="width: 90%;">
        <!-- Beer image -->
        <router-link :to="beerLink(beer)">
          <div style="background-color: #fdfdfd;">
            <img :src="beer.image_url" alt="Beer Image" style="height: 100px;">
          </div>
        </router-link>
        <!-- Beer name  -->
        <div style="background-color: #faf6dc;">{{ beer.name }}</div>
      </div>

      <!-- Btn add/remove beer from favorites -->
      <div style="width: 10%; margin-top: 3px;">
        <favorite-icon @set-favorite="updateFavorites"></favorite-icon>
      </div>

      <!-- Display saving message -->
      <saving-bar :snackbar="snackbar" :is-favorite="isFavorite"></saving-bar>
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
import FavoriteIcon from '@/components/Reusables/FavoriteIcon.vue';
import SavingBar from '@/components/Reusables/SavingBar.vue';

export default {
  components: {
    FavoriteIcon,
    SavingBar,
  },

  props: {
    beer: { required: true, type: Object },
  },
  data() {
    return {
      isFavorite: false,
      snackbar: { value: false },
    };
  },
  methods: {
    // return beer route link
    beerLink() {
      return `beer/${this.beer.id}/${commonfunctions.slugify(this.beer.name)}`;
    },
    // Update favorite beers list
    updateFavorites(value) {
      this.isFavorite = value;
      this.snackbar.value = true;
      this.$emit('updateFavorites');
    },
  },
};
</script>
