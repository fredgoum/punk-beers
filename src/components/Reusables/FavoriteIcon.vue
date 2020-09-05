<template>
  <font-awesome-icon :icon="['fas', 'heart']" :color="isFavorite ? '#0169aa' : 'gray'" size="lg"
                      style="cursor: pointer;"
                      @click="setFavorite()">
  </font-awesome-icon>
</template>

<script>
export default {
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    setFavorite() {
      this.isFavorite = ! this.isFavorite;
      this.$emit('set-favorite', this.isFavorite);
    },
  },
};
</script>
