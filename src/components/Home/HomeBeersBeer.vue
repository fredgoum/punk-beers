<template>
  <div>
      <div class="beerpreview">
        <div style="display: flex; background-color: #faf6dc; ">
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
        </div>
      </div>
  </div>
</template>

<style scoped>
.beerpreview {
  border-radius: 10px;
  border-top-left-radius: 0;
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
  methods: {
    // return beer route link
    beerLink() {
      return `beer/${this.beer.id}/${commonfunctions.slugify(this.beer.name)}`;
    },
  },
};
</script>
