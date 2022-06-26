<template>
  <section id="rules">
    <div class="wrap wrap-py flex flex-col justify-between">
      <div>
        <div v-for="(rule, idx) in rules" :key="idx">
          <div v-if="idx === current" class="rule text-center grid gap-10">
            <img src="@/assets/images/players.png" class="mx-auto" width="150" alt="">
            <div class="flex flex-col gap-5">
              <div class="grid gap-3">
                <div class="circles flex justify-center gap-2 mb-3">
                  <div
                    v-for="(circle, circleIdx) in rules" :key="circleIdx"
                    :class="{ 'active-circle': current === circleIdx }" class="circle" />
                </div>
                <h3>{{ rule.title }}</h3>
                <p>{{ rule.text }}</p>
              </div>
              <button v-if="current === rules.length - 1">
                <NuxtLink class="btn w-full block" to="/">На главную</NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-20 pt-10">
        <button class="btn btn-without-p-correction" @click="prev()">
          <svg
            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button class="btn btn-without-p-correction" @click="next()">
          <svg
            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      rules: []
    }
  },
  head: {
    title: 'spy - rules'
  },
  mounted() {
    this.rules = this.$store.getters['rules/getRules']
  },
  methods: {
    prev() {
      if (this.current === 0) return
      this.current = this.current - 1
    },
    next() {
      if (this.current === this.rules.length - 1) return
      this.current = this.current + 1
    }
  }
}
</script>

<style lang="scss">
#rules {
  .circles {
    .circle {
      width: 15px;
      height: 15px;
      border: 2px solid #dfdfdf;
      border-radius: 100%;
    }

    .active-circle {
      background-color: #dfdfdf;
      border: 1px solid #b8b8b8;
    }
  }

  h3 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }

  button {
    font-size: 20px;
  }
}
</style>
