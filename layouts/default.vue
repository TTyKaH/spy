<template>
  <div
    id="app"
    :class="dark ? 'dark-theme' : 'light-theme'">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Placeholder from '~/components/Placeholder.vue'
export default {
  components: [Placeholder, mapGetters],
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style lang="scss">
#app {
  background-color: var(--bg-color-main);
}
</style>
