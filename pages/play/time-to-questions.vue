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
      <button class="btn" @click="toggle()">К таймеру</button>
    </div>
    <Timer v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      whoFirstAsk: null,
      isWhoFirstStage: true
    }
  },
  head: {
    title: 'spy - time to questions'
  },
  mounted() {
    if (localStorage.getItem('isGameOn') === null) {
      localStorage.setItem('isGameOn', true)
      const playersCount = Number(localStorage.getItem('playersCount'))
      this.whoFirstAsk = this.getRandomNumber(playersCount)
    } else {
      this.isWhoFirstStage = false
    }
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
