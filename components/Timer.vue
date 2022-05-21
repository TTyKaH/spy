<template>
  <div id="timer" class="text-center text-4xl">
    <div>{{ time.minutes }}:{{ time.seconds }}</div>
    <button class="text-6xl" @click="toggle()">
      <div v-if="!isPause" class="btn btn-rounded" @click="stopTimer()">=</div>
      <div v-else class="btn btn-rounded" @click="startTimer()">></div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {
        minutes: '00',
        seconds: '00',
      },
      timer: null,
      isPause: true,
    }
  },
  beforeMount() {
    this.time.minutes = localStorage.getItem('timeCount')
  },
  methods: {
    toggle() {
      this.isPause = !this.isPause
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.time.seconds <= 0) {
          this.time.seconds = 60
          if (this.time.minutes > 10) {
            this.time.minutes = this.time.minutes - 1
          } else {
            this.time.minutes = '0' + (this.time.minutes - 1)
          }
        }
        if (this.time.seconds > 10) {
          this.time.seconds = this.time.seconds - 1
        } else {
          this.time.seconds = '0' + (this.time.seconds - 1)
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-rounded {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
