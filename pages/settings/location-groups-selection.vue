<template>
  <div class="wrap wrap-py flex flex-col gap-10">
    <h2>Выбор локаций</h2>
    <div class="grid gap-5">
      <div v-for="(g, idx) in locations" :key="idx" ref="groups" @click="selectGroup(g.group, idx)">
        <LocationGroup :group="g" />
      </div>
    </div>
    <button @click="setRandomLocation()">
      <NuxtLink class="btn w-full block" to="/play/roles-distribution">Начать игру</NuxtLink>
    </button>
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
      for (const group of this.selectedGroups) {
        for (const el of this.locations) {
          if (group === el.group) {
            this.selectedLocations.push(...el.locations)
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
  color: #ff2400;

  #location-group {
    position: relative;

    &::after {
      content: url('@/assets/images/icons/icon-check.svg');
      position: absolute;
      right: 0;
      top: calc(50% - 12px);
      width: 25px;
      height: 25px;
    }
  }
}
</style>
