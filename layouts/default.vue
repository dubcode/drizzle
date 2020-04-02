<template>
  <!-- wrapper start -->
  <div id="app" class="block opacity-75">
    <Header />
    <nuxt />
  </div>
  <!-- wrapper end -->
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
body {
  background: #000;
  font-family: 'Montserrat', sans-serif;
}
</style>
