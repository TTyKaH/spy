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
    timeCountFromStore() {
      return this.$store.getters['settings/getTimeCount']
    }
  },
  mounted() {
    const timeCountFromLocalStore = JSON.parse(
      localStorage.getItem('timeCount')
    )
    if (timeCountFromLocalStore === null) {
      this.count = this.timeCountFromStore
      localStorage.setItem('timeCount', this.count)
    } else {
      this.count = timeCountFromLocalStore
      this.$store.commit('settings/setTimeCount', this.count)
    }
  },
  methods: {
    increase() {
      this.count = this.count + 1
      localStorage.setItem('timeCount', this.count)
      this.$store.commit('settings/setTimeCount', this.count)
    },
    decrease() {
      if (this.count === 5) {
        return
      }
      this.count = this.count - 1
      localStorage.setItem('timeCount', this.count)
      this.$store.commit('settings/setTimeCount', this.count)
    }
  }
}
</script>
