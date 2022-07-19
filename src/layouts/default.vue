<template>
  <div
    id="app"
    :class="isDarkTheme ? 'dark-theme' : 'light-theme'">
    <transition name="default">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.isDarkTheme ? '#0f172a' : '#fcfcfc'
        }
      ]
    }
  },
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
