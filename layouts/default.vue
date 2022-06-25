<template>
  <div
    id="app"
    :class="isDarkTheme ? 'dark-theme' : 'light-theme'">
    <Nuxt />
  </div>
</template>

<script>
import Placeholder from '~/components/Placeholder.vue'
export default {
  components: [Placeholder],
  computed: {
    isDarkTheme() {
      // Это костыль, так как themefromStore нужен только для придания реактивности вычисляемому свойству
      const themefromStore = this.$store.getters['theme/dark']
      const themeFromLocalStorage = localStorage.getItem('isDarkTheme')
      if (themeFromLocalStorage === 'true' || themefromStore === true) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: var(--bg-color-main);
}
</style>
