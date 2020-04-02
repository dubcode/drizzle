<template>
  <div id="menu" class="block flex justify-center items-center h-full w-full p-4 bg-black duration-300 fixed z-40">
    <ul class="w-full">
      <li v-for="link in menu_links" :key="link.id" class="block">
        <nuxt-link :to="link.link" class="block text-white py-4 text-center text-4xl">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu_links: [
        {
          id: '1',
          link: '/',
          title: 'Home'
        },
        {
          id: '2',
          link: 'about',
          title: 'About'
        },
        {
          id: '3',
          link: 'contact',
          title: 'Contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
#header-state.inactive #menu {
  opacity: 0;
  pointer-events:none;
}
#header-state.active #menu {
  opacity: 1;
  pointer-events: all;
}
</style>
