<template>
  <div class="wrap wrap-py flex flex-col gap-5">
    <div
      v-for="(g, idx) in locations"
      :key="idx"
      ref="groups"
      class="cursor-pointer"
      @click="selectGroup(g.group, idx)"
    >
      {{ g.group }}
    </div>
    <NuxtLink
      to="/play/roles-distribution"
      class="btn"
      @click="setRandomLocation()"
    >
      К распределению ролей
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: null,
      selectedGroups: [],
      selectedLocations: [],
    }
  },
  mounted() {
    this.locations = JSON.parse(localStorage.getItem('locations'))
  },
  methods: {
    selectGroup(groupName, idx) {
      if (!this.selectedGroups.includes(groupName)) {
        this.addGroup(groupName)
      } else {
        this.removeGroup(groupName)
      }
      this.toggle(idx)
    },
    addGroup(groupName) {
      this.selectedGroups.push(groupName)
    },
    removeGroup(groupName) {
      const idx = this.selectedGroups.indexOf(groupName)
      this.selectedGroups.splice(idx, 1)
    },
    toggle(idx) {
      this.$refs.groups[idx].classList.toggle('chosen')
    },
    setRandomLocation() {
      this.formArraylocations()
      const locationIdx = this.getRandomNumber(this.selectedLocations.length)
      localStorage.setItem(
        'selectedLocation',
        this.selectedLocations[locationIdx]
      )
    },
    formArraylocations() {
      for (let i = 0; i < this.selectedGroups.length; i++) {
        for (let j = 0; j < this.locations.length; j++) {
          if (this.selectedGroups[i] === this.locations[j].group) {
            this.selectedLocations.push(...this.locations[j].locations)
            continue
          }
        }
      }
    },
    getRandomNumber(maxNum) {
      return Math.floor(1 + Math.random() * maxNum)
    },
  },
}
</script>

<style lang="scss">
.chosen {
  color: red;
}
</style>
