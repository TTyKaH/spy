<template>
  <div class="wrap wrap-py">
    <div v-if="isWhoFirstStage">
      <div>
        Первым задает вопрос <br />
        игрок {{ whoFirstAsk }}
      </div>
      <button class="btn" @click="toggle()">Понятно</button>
    </div>
    <div v-else>
      <Timer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whoFirstAsk: null,
      isWhoFirstStage: true,
    }
  },
  beforeMount() {
    const playersCount = Number(localStorage.getItem('playersCount'))
    this.whoFirstAsk = this.getRandomNumber(playersCount)
  },
  methods: {
    getRandomNumber(maxNum) {
      return Math.floor(1 + Math.random() * maxNum)
    },
    toggle() {
      this.isWhoFirstStage = !this.isWhoFirstStage
    },
  },
}
</script>
