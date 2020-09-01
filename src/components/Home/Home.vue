<template>
  <div>
    <navigation></navigation>
    <about></about>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation/Navigation.vue';
import About from '@/components/About/About.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    About,
  },
};
</script>
