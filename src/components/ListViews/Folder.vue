<template>
  <div id="folder-view">
    <div>
      <TransitionGroup v-if="processedList.length" name="default" mode="out-in">
        <div
          v-for="(group, idx) in processedList" :key="idx">
          <template v-if="group.locations.length">
            <div class="border-b border-t p-1 pt-2">
              <b>{{ group.groupName }}</b>
            </div>
            <div class="py-1">
              <div v-for="(location, idx) in group.locations" :key="idx + 'location'" class="pl-5">
                {{'- ' + location}}
              </div>
            </div>
          </template>
        </div>
      </TransitionGroup>
      <div v-else class="text-center p-1 pt-2">
        <img src="" alt="">
        <span>Ничего не найдено</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FolderView',
  props: {
    locationsGroups: {
      type: Array,
      default: () => {
        return []
      }
    },
    locationName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      processedList: []
    }
  },
  watch: {
    locationName() {
      console.log('сработал вотчер')
      this.setLocationsList(this.locationsGroups)
      this.filterLocations()
      this.sortListByName()
    }
  },
  mounted() {
    this.setLocationsList(this.locationsGroups)
    this.filterLocations()
    this.sortListByName()
  },
  methods: {
    setLocationsList(locations) {
      this.processedList = [...locations]
    },
    filterLocations() {
      const processedList = []
      for (let i = 0; i < this.processedList.length; i++) {
        const groupName = this.processedList[i].groupName
        const locations = this.processedList[i].locations
        let filteredLocations = []
        filteredLocations = [
          ...locations.filter(location => {
            return location
              .toLowerCase()
              .includes(this.locationName.toLowerCase())
          })
        ]
        processedList.push({
          groupName,
          locations: filteredLocations
        })
      }
      this.processedList = [...processedList]
    },
    sortListByName() {
      for (let i = 0; i < this.processedList.length; i++) {
        const locations = [...this.processedList[i].locations]
        const sortedLocations = [...locations.sort()]
        this.processedList[i].locations = [...sortedLocations]
      }
    }
  }
}
</script>
