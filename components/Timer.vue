<template>
  <div id="timer">
    <div>{{ time.minutes }}:{{ time.seconds }}</div>
    <button @click="toggle()">
      <div v-if="!isPause" class="btn" @click="stopTimer()">=</div>
      <div v-else class="btn" @click="startTimer()">></div>
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
          this.time.minutes = this.time.minutes - 1
        }
        this.time.seconds = '0' + (this.time.seconds - 1)
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
  },
}
</script>
