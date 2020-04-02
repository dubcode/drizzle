<template>
  <div id="header-state" class="block" :class="{'active': menuClose, 'inactive': !menuClose}">
    <header class="block fixed z-50 w-full pt-1" :class="{'active': menuClose, 'inactive': !menuClose}">
      <div class="flex w-full mx-auto my-0 px-10 pt-3">
        <div class="flex-grow text-gray-700 w-0">
          <Icons />
        </div>
        <div class="flex-none w-8">
          <Logo />
        </div>
        <div class="flex flex-grow justify-end items-center w-0">
          <Nav />
          <Hamburger :menu-close="menuClose" @toggle="menuClose = !menuClose" />
        </div>
      </div>
      <div class="block w-full text-center text-white text-2xl font-bold">
        DRIZZLE
      </div>
    </header>
    <Menu />
  </div>
</template>

<script>
import Icons from '~/components/Icons.vue'
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Hamburger from '~/components/Hamburger.vue'
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Icons,
    Logo,
    Nav,
    Hamburger,
    Menu
  },
  props: {
    menuClose: Boolean
  }
}
</script>
