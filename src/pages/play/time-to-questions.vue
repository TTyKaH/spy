<template>
  <div class="wrap wrap-py">
    <div v-if="isWhoFirstStage" class=" flex flex-col justify-between text-center h-full">
      <div class="grid gap-5">
        <h2 class="uppercase">Время вопросов</h2>
        <div>
          Если все готовы - запускайте таймер
        </div>
        Первым задает вопрос Игрок {{ whoFirstAsk }}
      </div>
      <button v-if="isWaiting" class="btn" :class="{'btn-disabled': isWaiting}">К таймеру</button>
      <button v-else class="btn" @click="toggle()">К таймеру</button>
    </div>
    <Timer v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      whoFirstAsk: null,
      isWhoFirstStage: true,
      isWaiting: true
    }
  },
  head: {
    title: 'spy - time to questions'
  },
  mounted() {
    if (
      localStorage.getItem('isGameOn') === null ||
      localStorage.getItem('isGameOn') === 'false'
    ) {
      localStorage.setItem('isGameOn', true)
      const playersCount = Number(localStorage.getItem('playersCount'))
      this.whoFirstAsk = this.getRandomNumber(playersCount)
    } else {
      this.isWhoFirstStage = false
    }
    setTimeout(() => {
      this.isWaiting = false
    }, 1000)
  },
  methods: {
    getRandomNumber(maxNum) {
      return Math.floor(1 + Math.random() * maxNum)
    },
    toggle() {
      this.isWhoFirstStage = !this.isWhoFirstStage
    }
  }
}
</script>
