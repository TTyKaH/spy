<template>
  <img src="@/assets/images/placeholder.jpg" :width="w" :height="h" class="opacity-50" :class="{ 'mx-auto': center }" alt="">
</template>

<script>
export default {
  props: {
    w: {
      type: Number,
      default: 100
    },
    h: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>
