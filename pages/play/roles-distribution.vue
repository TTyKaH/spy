<template>
  <div id="roles-distribution" class="wrap wrap-py">
    <div v-for="playerNum in playersCount" :key="playerNum" class="text-center">
      <div v-if="currentPlayer === playerNum">
        <div v-if="isFirstStage" class="grid justify-items-center gap-5">
          <div>Игрок {{ playerNum }}</div>
          <div class="note">
            Нажмите, чтобы узнать
            кто ты в этой игре
          </div>
          <button class="btn" @click="toggle()">Хто я</button>
        </div>
        <div v-else class="grid gap-5 justify-items-center">
          <div>Игрок {{ playerNum }}, ты: {{ checkRole(playerNum) }}</div>
          <div v-if="checkRole(playerNum) === 'Местный'" class="note">
            Локация: {{ selectedLocation }}
          </div>
          <div v-else>
            Все кроме ТЕБЯ знают локацию.
            Старайся не выдать себя и понять о какой локации все говорят
          </div>
          <button v-if="currentPlayer !== playersCount" class="btn" @click="nextPlayer()">Понятно</button>
          <NuxtLink v-else to="/play/time-to-questions" class="btn">Понятно</NuxtLink>
        </div>
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
    }
  },
  beforeMount() {
    this.playersCount = Number(localStorage.getItem('playersCount'))
    this.selectedLocation = localStorage.getItem('selectedLocation')
    this.spiesCount = Number(localStorage.getItem('spiesCount'))
  },
  mounted() {
    while (this.whoSpy.length < this.spiesCount) {
      const spyNum = this.getRandomNumber(this.playersCount)
      if (!this.whoSpy.includes(spyNum)) {
        this.whoSpy.push(spyNum)
      }
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
    },
    toggle() {
      this.isFirstStage = !this.isFirstStage
    },
    getRandomNumber(maxNum) {
      return Math.floor(1 + Math.random() * maxNum)
    },
  },
}
</script>
