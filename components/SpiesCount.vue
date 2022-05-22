<template>
  <div class="set-count flex flex-wrap justify-between items-center gap-2">
    <div>{{ title }}</div>
    <div class="count flex justify-between items-center gap-2">
      <button class="btn" @click="decrease()">-</button>
      <div>{{ count }}</div>
      <button class="btn" @click="increase()">+</button>
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
