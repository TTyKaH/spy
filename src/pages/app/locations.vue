<template>
  <div id="locations" class="wrap wrap-py flex flex-col gap-5">
    <div class="flex items-center">
      <input v-model="locationName" type="text" placeholder="название локации">
      <div class="p-2" @click="toggleListType">
        <svg
          v-if="isShowSimpleList"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round" stroke-linejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
    </div>
    <div class="overflow-y-auto">
      <ListViewsSimple v-if="isShowSimpleList" :locations-groups="locationsGroups" :location-name="locationName">
      </ListViewsSimple>
      <ListViewsFolder v-else :locations-groups="locationsGroups"></ListViewsFolder>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Locations',
  data() {
    return {
      isShowSimpleList: true,
      locationsGroups: [],
      locationName: ''
    }
  },
  mounted() {
    this.locationsGroups = this.$store.getters['locations/getLocations']
  },
  methods: {
    toggleListType() {
      this.isShowSimpleList = !this.isShowSimpleList
    }
  }
}
</script>
