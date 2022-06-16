<template>
  <div id="timer" class="flex flex-col justify-center h-full gap-5 text-center relative">
    <div class="text-5xl">{{ time.minutes }}:{{ time.seconds }}</div>
    <button class="flex justify-center" @click="toggle()">
      <div v-if="!isPause" class="btn btn-rounded" @click="stopTimer()">
        <img class="icon icon-xs" src="@/assets/images/icons/icon-pause.svg" alt="" />
      </div>
      <div v-else class="btn btn-rounded" @click="startTimer()">
        <!-- иконку следует сместить и заменить иконки на svg -->
        <img class="icon icon-xs ml-2" src="@/assets/images/icons/icon-play.svg" alt="" />
      </div>
    </button>
    <div v-if="isPause && isStarted" class="grid gap-5 absolute bottom-0 right-0 left-0">
      <NuxtLink to="/win" class="btn" @click.native="win('Местные')">Местные победили</NuxtLink>
      <NuxtLink to="/win" class="btn" @click.native="win('Шпионы')">Шпионы победили</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {
        minutes: '00',
        seconds: '00'
      },
      timer: null,
      isPause: true,
      isStarted: false
    }
  },
  watch: {
    'time.minutes'(newVal, oldVal) {
      localStorage.setItem('leftMinutes', this.time.minutes)
    },
    'time.seconds'(newVal, oldVal) {
      localStorage.setItem('leftSeconds', this.time.seconds)
    }
  },
  beforeMount() {
    const leftMinutes = localStorage.getItem('leftMinutes')
    const leftSeconds = localStorage.getItem('leftSeconds')
    if (leftMinutes === null || leftSeconds === null) {
      this.time.minutes = localStorage.getItem('timeCount')
      this.time.seconds = '00'
    } else {
      this.time.minutes = leftMinutes
      this.time.seconds = leftSeconds
    }
  },
  methods: {
    toggle() {
      this.isPause = !this.isPause
    },
    startTimer() {
      if (!this.isStarted) {
        this.isStarted = !this.isStarted
      }
      this.timer = setInterval(() => {
        if (this.time.seconds <= 0) {
          if (Number(this.time.minutes) !== 0) {
            this.time.seconds = 60
          }
          if (this.time.minutes > 10) {
            this.time.minutes = this.time.minutes - 1
          } else if (this.time.minutes > 0) {
            this.time.minutes = '0' + (this.time.minutes - 1)
          }
        }
        if (this.time.seconds > 10) {
          this.time.seconds = this.time.seconds - 1
        } else if (this.time.seconds > 0) {
          this.time.seconds = '0' + (this.time.seconds - 1)
        } else {
          this.stopTimer()
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
    win(who) {
      localStorage.setItem('whoWin', who)
      localStorage.setItem('isGameOn', false)
      localStorage.removeItem('leftMinutes')
      localStorage.removeItem('leftSeconds')
    }
  }
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
