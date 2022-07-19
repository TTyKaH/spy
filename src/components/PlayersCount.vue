<template>
  <div class="set-count flex flex-wrap justify-between items-center gap-2">
    <div>{{ title }}</div>
    <div class="count grid grid-cols-3 justify-items-center items-center gap-3">
      <div>{{ count }}</div>
      <button class="btn btn-wide" @click="decrease()">-</button>
      <button class="btn btn-wide" @click="increase()">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: null
    }
  },
  computed: {
    playersCountFromStore() {
      return this.$store.getters['settings/getPlayersCount']
    }
  },
  mounted() {
    const playersCountFromLocalStore = JSON.parse(
      localStorage.getItem('playersCount')
    )
    if (playersCountFromLocalStore === null) {
      this.count = this.playersCountFromStore
      localStorage.setItem('playersCount', this.count)
    } else {
      this.count = playersCountFromLocalStore
      this.$store.commit('settings/setPlayersCount', this.count)
    }
  },
  methods: {
    increase() {
      this.count = this.count + 1
      localStorage.setItem('playersCount', this.count)
      this.$store.commit('settings/setPlayersCount', this.count)
    },
    decrease() {
      if (this.count === 3) {
        return
      }
      this.count = this.count - 1
      localStorage.setItem('playersCount', this.count)
      this.$store.commit('settings/setPlayersCount', this.count)
    }
  }
}
</script>

<style lang="scss">
.set-count {
  .count {
    max-width: 160px;
    width: 100%;
  }
}
</style>
