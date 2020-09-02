<template>
  <div>
    <!-- App navigation bar -->
    <navigation></navigation>
    <!-- App content -->
    <home-beers></home-beers>
    <!-- App footer -->
    <about></about>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation/Navigation.vue';
import About from '@/components/About/About.vue';
import HomeBeers from './HomeBeers.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    About,
    HomeBeers,
  },
};
</script>
