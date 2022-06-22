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
      return this.$store.getters['theme/dark']
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: var(--bg-color-main);
}
</style>
