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
  beforeMount() {
    const playersCount = Number(localStorage.getItem('playersCount'))
    this.whoFirstAsk = this.getRandomNumber(playersCount)
  },
  methods: {
    getRandomNumber(maxNum) {
      return Math.floor(Math.random() * maxNum)
    },
    toggle() {
      this.isWhoFirstStage = !this.isWhoFirstStage
    }
  }
}
</script>
