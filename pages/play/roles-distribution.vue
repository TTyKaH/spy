<template>
  <div id="roles-distribution" class="wrap wrap-py flex flex-col justify-between">
    <div>
      <div v-for="playerNum in playersCount" :key="playerNum" class="text-center">
        <div v-if="currentPlayer === playerNum">
          <div v-if="isFirstStage" class="flex flex-col justify-between h-auto">
            <div class="grid justify-items-center gap-5">
              <div>Игрок {{ playerNum }}</div>
              <div>
                Нажмите, чтобы узнать кто ты в этой игре
              </div>
            </div>
          </div>
          <div v-else class="grid gap-5 justify-items-center">
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
        </div>
      </div>
    </div>
    <div class="grid">
      <button v-if="isFirstStage" class="btn" @click="toggle()">Хто я</button>
      <div v-else class="grid">
        <button v-if="currentPlayer !== playersCount" class="btn" @click="nextPlayer()">Понятно</button>
        <NuxtLink v-else to="/play/time-to-questions" class="btn">Понятно</NuxtLink>
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
      isFirstStage: true
    }
  },
  head: {
    title: 'spy - role distribution'
  },
  beforeMount() {
    this.playersCount = Number(localStorage.getItem('playersCount'))
    this.selectedLocation = localStorage.getItem('selectedLocation')
    this.spiesCount = Number(localStorage.getItem('spiesCount'))
  },
  mounted() {
    const storedWhoSpies = JSON.parse(localStorage.getItem('whoSpies'))
    if (storedWhoSpies === null) {
      while (this.whoSpy.length < this.spiesCount) {
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
    }
  }
}
</script>
