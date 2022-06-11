<template>
  <div id="app">
    <!-- <NuxtLink to="/">home</NuxtLink> -->
    <Nuxt />
  </div>
</template>

<script>
import Placeholder from '~/components/Placeholder.vue'
export default {
  components: [Placeholder],
  mounted() {
    setTimeout(() => {
      document.getElementsByClassName('disclaimer')[0].remove()
    }, 1000)
  }
}
</script>

<!-- display none -->
