<template>
  <section id="rules" class="wrap wrap-py flex flex-col relative">
    <div class="line"></div>
    <div class="overflow-scroll py-5 scrollbar grid gap-7">
      <div class="grid gap-5">
        <img src="@/assets/images/players.png" class="mx-auto" width="150" alt="">
        <div class="circles flex justify-center gap-2">
          <div
            v-for="(circle, circleIdx) in rules" :key="circleIdx.title"
            :class="{ 'active-circle': current === circleIdx }" class="circle" />
        </div>
      </div>
      <div
        id="slider" class="overflow-hidden">
        <div class="flex" :style="{width: sliderWidth + 'px', 'margin-left': (-1) * current * slideWidth + 'px'}">
          <div v-for="(rule, idx) in rules" :key="idx">
            <!-- v-if="idx === current" -->
            <div class="rule text-center" :style="{width: slideWidth + 'px'}">
              <div class="flex flex-col gap-5">
                <div class="grid gap-4">
                  <h3>{{ rule.title }}</h3>
                  <p>{{ rule.text }}</p>
                </div>
                <ButtonWithLink v-if="current === rules.length - 1" to="/">На главную</ButtonWithLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-5 absolute">
      <div class="line"></div>
      <div class="flex justify-center gap-20">
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
      rules: [],
      slideWidth: null,
      sliderWidth: null
    }
  },
  head: {
    title: 'spy - rules'
  },
  mounted() {
    this.rules = this.$store.getters['rules/getRules']

    this.setWidthForSlide()
  },
  methods: {
    prev() {
      if (this.current === 0) return
      this.current = this.current - 1
    },
    next() {
      if (this.current === this.rules.length - 1) return
      this.current = this.current + 1
    },
    setWidthForSlide() {
      const slideWidth = document.getElementById('rules').offsetWidth - 32
      this.slideWidth = slideWidth
      this.sliderWidth = slideWidth * this.rules.length
    }
  }
}
</script>

<style lang="scss">
#rules {
  .wrap-py {
    padding-bottom: 99px;
  }
  .circles {
    .circle {
      width: 15px;
      height: 15px;
      border: 2px solid #dfdfdf;
      border-radius: 100%;
      transition: background-color 0.2s linear;
    }

    .active-circle {
      background-color: #dfdfdf;
      border: 1px solid #b8b8b8;
      animation: fade-bg 0.5s ease-out;
    }

    @keyframes fade-bg {
      from {
        background: none;
      }

      to {
        background: #dfdfdf;
      }
    }
  }

  circles-enter-active {
    background-color: #dfdfdf;
  }

  circles-leave-active {
    background-color: transparent;
  }

  h3 {
    text-transform: none;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    font-size: 20px;
  }

  .absolute {
    background-color: var(--bg-color-main);
    bottom: 28px;
    right: 16px;
    left: 16px;
  }
}
</style>
