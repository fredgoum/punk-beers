<template>
  <font-awesome-icon :icon="['fas', 'heart']" :color="isFavorite ? '#0169aa' : 'gray'" size="lg"
                      style="cursor: pointer;"
                      @click="setFavorite()">
  </font-awesome-icon>
</template>

<script>
export default {
  props: {
    beer: { default: null, type: Object },
  },
  computed: {
    isFavorite() { return ! ! this.$store.state.favoriteBeers.find((id) => id === this.beer.id); },
  },
  methods: {
    setFavorite() {
      this.$emit('set-favorite', ! this.isFavorite);
    },
  },
};
</script>
