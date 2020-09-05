<template>
  <!-- Navigation bar  -->
  <v-app-bar dense color="#faf6dc" style="border-bottom: 5px solid #0169aa !important;">
    <router-link to="/">
      <img src="../../images/logo.png" alt="logo app" style="height: 36px;">
    </router-link>

    <!-- List of beers -->
    <v-toolbar-items>
      <v-btn text to="/">Punk Beers</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <!-- Favorite beers -->
    <v-toolbar-items>
      <v-btn text to="/favorites">
        <font-awesome-icon :icon="['fas', 'heart']" color="#0169aa" size="2x"/>
        <span style="margin-left: 3px;">Favorites</span>
        <strong style="margin: 3px; color: white; background-color: green;">
          <span style="margin: 3px;">{{ favoriteBeerslength() }}</span>
        </strong>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    favoriteBeerslength() {
      return this.$store.state.favoriteBeers.length;
    },
  },
};
</script>
