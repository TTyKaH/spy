<template>
  <div id="simple-list" class="flex flex-col gap-5">
    <div>
      <TransitionGroup v-if="processedList.length" name="default" mode="out-in">
        <div
          v-for="(location, idx) in processedList" :key="idx" class="border-b p-1 pt-2"
          :class="{'border-t': idx === 0}">
          {{ location }}
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
  name: 'SimpleList',
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
  computed: {
    locations() {
      let locations = []
      for (const group in this.locationsGroups) {
        locations = locations.concat(this.locationsGroups[group].locations)
      }
      return locations
    }
  },
  watch: {
    locations: {
      handler() {
        this.setLocationsList(this.locations)
        this.sortListByName()
      },
      deep: true
    },
    locationName() {
      this.filterLocations()
      this.sortListByName()
    }
  },
  mounted() {
    this.setLocationsList(this.locations)
    this.filterLocations()
    this.sortListByName()
  },
  methods: {
    setLocationsList(locations) {
      this.processedList = [...locations]
    },
    filterLocations() {
      this.processedList = [
        ...this.locations.filter(location => {
          return location
            .toLowerCase()
            .includes(this.locationName.toLowerCase())
        })
      ]
    },
    sortListByName() {
      this.processedList.sort()
    }
  }
}
</script>
