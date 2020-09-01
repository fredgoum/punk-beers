<template>
    <!-- Navigation bar  -->
    <v-app-bar dense elevate-on-scroll color="#faf6dc" style="border-bottom: 5px solid #0169aa !important;">
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
          <font-awesome-icon :icon="['fas', 'heart']" color="red" size="2x"/>
          <span style="margin-left: 3px;">Favoris</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>
