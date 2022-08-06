<template>
  <div id="location-groups-selection" class="wrap wrap-py flex flex-col justify-between">
    <div class="grid overflow-hidden">
      <div class="grid gap-5">
        <div class="flex justify-center relative">
          <NuxtLink to="/settings/locations-list">
            <img class="icon icon-sm absolute right-0" src="@/assets/images/icons/icon-location.png" alt="" />
          </NuxtLink>
          <h2>Выбор локаций</h2>
        </div>
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
      <div class="grid grid-cols-2 gap-5">
        <button class="btn w-full block" @click="checkRandomGroups()">
          Рандом
        </button>
        <button class="btn w-full block" @click="checkAllGroups()">
          Все
        </button>
      </div>
      <button :disabled="!isCheckedGroups" @click="setRandomLocation(), saveSelectedGroups()">
        <ButtonWithLink v-if="isCheckedGroups" to="/play/roles-distribution" full>Начать игру</ButtonWithLink>
        <span v-else class="btn w-full block" :class="{ 'btn-disabled': !isCheckedGroups }">Начать игру</span>
      </button>
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
    this.earlySelectedGroups =
      JSON.parse(localStorage.getItem('selectedGroups')) || []
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
      this.$refs.groups[idx].classList.toggle('chosen')
    },
    checkRandomGroups() {
      const groupsAmount = this.locations.length
      let randomGroupsAmount = 0
      do {
        randomGroupsAmount = this.getRandomNumber(groupsAmount) + 1
      } while (randomGroupsAmount < 2 || randomGroupsAmount > groupsAmount - 2)
      console.log('randomGroupsAmount', randomGroupsAmount)
      const randomGroups = []
      let currentIdx = null
      const prevIdxs = []
      let wasPushed
      do {
        wasPushed = false
        do {
          currentIdx = this.getRandomNumber(groupsAmount)
          if (!prevIdxs.includes(currentIdx)) {
            prevIdxs.push(currentIdx)
            wasPushed = true
          }
        } while (!wasPushed)
        randomGroups.push(this.locations[currentIdx].groupName)
      } while (randomGroups.length < randomGroupsAmount)
      this.selectedGroups = []
      this.selectedGroups = [...randomGroups]
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
      const storedSelectedLocation = localStorage.getItem('selectedLocation')
      if (storedSelectedLocation !== null) {
        return
      }
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
#location-groups-selection {
  h2 {
    // line-height: 24px;
  }
  .icon {
    top: 3px;
  }

  .scrollbar {
    position: relative;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
