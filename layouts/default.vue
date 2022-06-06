<template>
  <div id="app">
    <!-- <NuxtLink to="/">home</NuxtLink> -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.getElementsByClassName('disclaimer')[0].remove()
    }, 1000)
  }
}
</script>
