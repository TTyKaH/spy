<template>
  <div id="location-group" class="cursor-pointer py-4">
    <span class="flex justify-between items-center">{{ group.groupName }}
      <div class="field" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'LocationGroup',
  props: {
    group: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  border: 1px solid #dfdfdf;
  display: block;
  width: 25px;
  height: 25px;
}
</style>
