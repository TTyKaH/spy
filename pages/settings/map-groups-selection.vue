<template>
  <div class="wrap wrap-py">
    <div v-for="(g, idx) in locations" :key="idx">
      {{ g.group }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: null,
    }
  },
  mounted() {
    this.locations = JSON.parse(localStorage.getItem('locations'))
  },
}
</script>
