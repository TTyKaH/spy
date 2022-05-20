<template>
  <div class="set-count flex justify-between items-center gap-2">
    <div>{{ title }}</div>
    <div class="flex items-center gap-2">
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
    this.count = Number(localStorage.playersCount)
  },
  methods: {
    increase() {
      this.count = this.count + 1
      localStorage.setItem('playersCount', this.count)
    },
    decrease() {
      this.count = this.count - 1
      localStorage.setItem('playersCount', this.count)
    },
  },
}
</script>
