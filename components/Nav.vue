<template>
  <div id="nav" class="hidden lg:block float-right mr-2">
    <ul>
      <li v-for="link in nav_links" :key="link.id" class="inline-block mr-6">
        <nuxt-link :to="link.link" class="text-white text-xs uppercase">
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
      nav_links: [
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
