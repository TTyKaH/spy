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
    spiesCountFromStore() {
      return this.$store.getters['settings/getSpiesCount']
    }
  },
  mounted() {
    const spiesCountFromLocalStore = JSON.parse(
      localStorage.getItem('spiesCount')
    )
    if (spiesCountFromLocalStore === null) {
      this.count = this.spiesCountFromStore
      localStorage.setItem('spiesCount', this.count)
    } else {
      this.count = spiesCountFromLocalStore
      this.$store.commit('settings/setSpiesCount', this.count)
    }
  },
  methods: {
    increase() {
      const playersCount = Number(localStorage.getItem('playersCount'))
      if (playersCount - this.count > 2) {
        this.count = this.count + 1
        localStorage.setItem('spiesCount', this.count)
        this.$store.commit('settings/setSpiesCount', this.count)
      }
    },
    decrease() {
      if (this.count === 1) {
        return
      }
      this.count = this.count - 1
      localStorage.setItem('spiesCount', this.count)
      this.$store.commit('settings/setSpiesCount', this.count)
    }
  }
}
</script>
