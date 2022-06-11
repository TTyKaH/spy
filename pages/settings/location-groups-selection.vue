<template>
  <div class="wrap wrap-py flex flex-col justify-between">
    <div class="grid overflow-hidden">
      <div class="grid gap-10">
        <h2>Выбор локаций</h2>
        <div class="line"></div>
      </div>
      <div class="grid overflow-x-auto scrollbar">
        <div v-for="(g, idx) in locations" :key="idx" ref="groups" @click="selectGroup(g.group, idx)">
          <LocationGroup :group="g" />
        </div>
      </div>
    </div>
    <div class="grid gap-10">
      <div class="line"></div>
      <button :disabled="!isCheckedGroups" @click="setRandomLocation()">
        <NuxtLink v-if="isCheckedGroups" class="btn w-full block" to="/play/roles-distribution">Начать игру</NuxtLink>
        <span v-else class="btn w-full block" :class="{ 'btn-disabled': !isCheckedGroups }">Начать игру</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      selectedGroups: [],
      selectedLocations: [],
    }
  },
  head: {
    title: 'spy - choose locations',
  },
  computed: {
    isCheckedGroups() {
      return this.selectedGroups.length !== 0
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

.scrollbar {
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
