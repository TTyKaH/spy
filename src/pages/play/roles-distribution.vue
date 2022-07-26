<template>
  <div id="roles-distribution" class="wrap wrap-py flex flex-col justify-between">
    <div class="overflow-hidden">
      <div
        id="slider" class="flex"
        :style="{width: sliderWidth + 'px', 'margin-left': (-1) * (currentPlayer - 1) * slideWidth + 'px'}">
        <template v-for="playerNum in playersCount">
          <div :key="playerNum" class="text-center top-0" :style="{width: slideWidth + 'px'}">
            <transition name="role" mode="out-in">
              <div v-if="isFirstStage" key="1" class="flex flex-col justify-between h-auto">
                <div class="grid justify-items-center gap-5">
                  <div>Игрок {{ playerNum }}</div>
                  <div>
                    Нажмите, чтобы узнать кто ты в этой игре
                  </div>
                </div>
              </div>
              <div v-else key="2" class="grid gap-5 justify-items-center">
                <div class="flex flex-col items-center">
                  <img v-if="checkRole(playerNum) === 'Местный'" src="@/assets/images/local.png" width="150px" alt="">
                  <img v-else src="@/assets/images/spy.png" width="150px" alt="">
                  <div class="mt-10">Игрок {{ playerNum }}, ты:</div>
                  <div class="font-black">{{ checkRole(playerNum) }}</div>
                </div>
                <div v-if="checkRole(playerNum) === 'Местный'">
                  Локация:
                  <br>
                  <span class="font-black">
                    {{ selectedLocation }}
                  </span>
                </div>
                <div v-else>
                  Все кроме ТЕБЯ знают локацию.
                  Старайся не выдать себя и понять о какой локации все говорят!
                </div>
              </div>
            </transition>
          </div>
        </template>
      </div>
    </div>
    <div class="grid">
      <button v-if="isFirstStage" class="btn" @click="toggle()">Хто я</button>
      <div v-else class="grid">
        <button v-if="isWaiting" class="btn" :class="{'btn-disabled': isWaiting}">
          Понятно
        </button>
        <button
          v-else-if="currentPlayer !== playersCount" class="btn"
          @click="nextPlayer()">
          Понятно
        </button>
        <ButtonWithLink v-else :disabled="isWaiting" to="/play/time-to-questions">
          Понятно
        </ButtonWithLink>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      playersCount: null,
      spiesCount: null,
      selectedLocation: null,
      whoSpy: [],
      currentPlayer: 1,
      isFirstStage: true,
      isWaiting: false,
      // =====
      slideWidth: null,
      sliderWidth: null
    }
  },
  head: {
    title: 'spy - role distribution'
  },
  watch: {
    isFirstStage(newV, oldV) {
      if (newV === false) {
        this.isWaiting = true
        setTimeout(() => {
          this.isWaiting = false
        }, 750)
      }
    }
  },
  mounted() {
    this.playersCount = Number(localStorage.getItem('playersCount'))
    setTimeout(() => {
      this.selectedLocation = localStorage.getItem('selectedLocation')
    }, 200)
    this.spiesCount = Number(localStorage.getItem('spiesCount'))
    const storedWhoSpies = JSON.parse(localStorage.getItem('whoSpies'))
    if (storedWhoSpies === null) {
      while (this.whoSpy.length < this.spiesCount) {
        localStorage.setItem('currentPlayer', 1)
        const spyNum = this.getRandomNumber(this.playersCount)
        if (!this.whoSpy.includes(spyNum)) {
          this.whoSpy.push(spyNum)
        }
      }
      localStorage.setItem('whoSpies', JSON.stringify(this.whoSpy))
    } else {
      this.whoSpy = storedWhoSpies
      this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'))
    }

    this.setWidthForSlide()
  },
  methods: {
    checkRole(idx) {
      if (this.whoSpy.includes(idx)) {
        return 'Шпион'
      }
      return 'Местный'
    },
    nextPlayer() {
      if (this.currentPlayer < this.playersCount) {
        this.currentPlayer = this.currentPlayer + 1
        this.toggle()
      }
      localStorage.setItem('currentPlayer', this.currentPlayer)
    },
    toggle() {
      this.isFirstStage = !this.isFirstStage
    },
    getRandomNumber(maxNum) {
      return Math.floor(1 + Math.random() * maxNum)
    },
    setWidthForSlide() {
      const slideWidth =
        document.getElementById('roles-distribution').offsetWidth - 32
      this.slideWidth = slideWidth
      this.sliderWidth = slideWidth * this.playersCount
    }
  }
}
</script>
