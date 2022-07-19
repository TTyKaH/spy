<template>
  <div id="location-group" class="cursor-pointer py-4">
    <span class="flex justify-between items-center =">
      {{ group.groupName }}
      <Checkbox :is-checked="isChecked"></Checkbox>
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
    },
    selectedGroups: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    isChecked() {
      return this.selectedGroups.includes(this.group.groupName)
    }
  }
}
</script>
