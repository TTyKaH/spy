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
      required: true,
    },
  },
  data() {
    return {
      count: null,
    }
  },
  mounted() {
    this.count = Number(localStorage.spiesCount)
  },
  methods: {
    increase() {
      this.count = this.count + 1
      localStorage.setItem('spiesCount', this.count)
    },
    decrease() {
      if (this.count === 1) {
        return
      }
      this.count = this.count - 1
      localStorage.setItem('spiesCount', this.count)
    },
  },
}
</script>
