<template>
  <div class="wrap wrap-py flex flex-col justify-between">
    <div>
      <div v-for="(rule, idx) in rules" :key="idx">
        <div v-if="idx === current" class="rule text-center">
          <h2>{{ rule.title }}</h2>
          <p>{{ rule.text }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-10">
      <button class="btn" @click="prev()"> - </button>
      <button class="btn" @click="next()"> + </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      rules: [
        {
          title: 'Правило 1',
          text: 'Текст правила 1'
        },
        {
          title: 'Правило 2',
          text: 'Текст правила 2'
        },
        {
          title: 'Правило 3',
          text: 'Текст правила 3'
        },
        {
          title: 'Правило 4',
          text: 'Текст правила 4'
        },
      ]
    }
  },
  methods: {
    prev() {
      this.current = this.current - 1
    },
    next() {
      this.current = this.current + 1
    }
  }
}
</script>
