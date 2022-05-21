<template>
  <div id="location-group" class="cursor-pointer py-1">
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
