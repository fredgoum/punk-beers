<template>
  <v-snackbar v-model="snackbar.value" :color="isFavorite ? '#006400' : '#EC241E'" right shaped timeout=1500>
    <span v-if="isFavorite">Beer added to favorites</span>
    <span v-else>Beer remove from favorites</span>
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="snackbar.value = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: { default: null, type: Object },
    isFavorite: { default: false, type: Boolean },
  },
};
</script>
