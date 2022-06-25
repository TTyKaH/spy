<template>
  <div class="wrap wrap-py flex flex-col justify-between">
    <div class="grid overflow-hidden">
      <div class="grid gap-7">
        <h2>Выбор локаций</h2>
        <div class="line"></div>
      </div>
      <div class="grid overflow-x-auto scrollbar">
        <div v-for="(g, idx) in locations" :key="idx" ref="groups" @click="checkGroup(g.groupName, idx)">
          <LocationGroup :group="g" :selected-groups="selectedGroups" />
        </div>
      </div>
    </div>
    <div class="grid gap-5">
      <div class="line"></div>
      <button class="btn w-full block" @click="checkAllGroups()">
        Все локации
      </button>
      <button :disabled="!isCheckedGroups" @click="setRandomLocation(), saveSelectedGroups()">
        <NuxtLink v-if="isCheckedGroups" class="btn w-full block" to="/play/roles-distribution">Начать игру</NuxtLink>
        <span v-else class="btn w-full block" :class="{ 'btn-disabled': !isCheckedGroups }">Начать игру</span>
      </button>
      <!-- <button :disabled="!isCheckedGroups" @click="setRandomLocation()">
        <NuxtLink class="btn w-full block" to="#">Все локации</NuxtLink>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGroups: [],
      earlySelectedGroups: [],
      selectedLocations: []
    }
  },
  head: {
    title: 'spy - choose locations'
  },
  computed: {
    locations() {
      return this.$store.getters['locations/getLocations']
    },
    isCheckedGroups() {
      return this.selectedGroups.length !== 0
    }
  },
  mounted() {
    this.earlySelectedGroups = JSON.parse(
      localStorage.getItem('selectedGroups')
    )
    console.log(this.earlySelectedGroups)
    if (this.earlySelectedGroups.length !== 0) {
      this.selectedGroups = this.earlySelectedGroups
    }
  },
  methods: {
    checkGroup(groupName, idx) {
      if (!this.selectedGroups.includes(groupName)) {
        this.addGroup(groupName)
      } else {
        this.removeGroup(groupName)
      }
      this.toggleCheckbox(idx)
    },
    addGroup(groupName) {
      this.selectedGroups.push(groupName)
    },
    removeGroup(groupName) {
      const idx = this.selectedGroups.indexOf(groupName)
      this.selectedGroups.splice(idx, 1)
    },
    toggleCheckbox(idx) {
      // TODO: возможно класс уже не нужен
      this.$refs.groups[idx].classList.toggle('chosen')
    },
    checkAllGroups() {
      if (this.locations.length !== this.selectedGroups.length) {
        this.selectedGroups = []
        for (const group of this.locations) {
          this.selectedGroups.push(group.groupName)
        }
      } else {
        this.selectedGroups = []
      }
    },
    setRandomLocation() {
      this.formArraylocations()
      const locationIdx = this.getRandomNumber(this.selectedLocations.length)
      const selectedLocation = this.selectedLocations[locationIdx]
      localStorage.setItem('selectedLocation', selectedLocation)
    },
    saveSelectedGroups() {
      localStorage.setItem(
        'selectedGroups',
        JSON.stringify(this.selectedGroups)
      )
    },
    formArraylocations() {
      for (const group of this.selectedGroups) {
        for (const el of this.locations) {
          if (group === el.groupName) {
            this.selectedLocations.push(...el.locations)
            continue
          }
        }
      }
    },
    getRandomNumber(maxNum) {
      return Math.floor(Math.random() * maxNum)
    }
  }
}
</script>

<style lang="scss">
.chosen {
  // color: var(--chosen-color);
}

.scrollbar {
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
