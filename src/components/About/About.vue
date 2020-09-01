<template>
  <v-footer app class="font-weight-medium" color="#dcdace">
    <v-col cols="12" style="text-align: center;">
      <span>Copyright </span>
      <font-awesome-icon :icon="['fas', 'copyright']"/>
      {{ new Date().getFullYear() }} - <strong>Punk beers</strong>
    </v-col>
  </v-footer>
</template>
