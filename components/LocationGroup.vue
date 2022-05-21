<template>
  <div id="location-group" class="cursor-pointer">
    {{ group.group }}
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
