<template>
  <div>
    <navigation></navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation/Navigation.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
  },
};
</script>
