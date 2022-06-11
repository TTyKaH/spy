<template>
  <section id="spy-win">
    <div class="wrap wrap-py flex flex-col justify-between">
      <div class="text-center">
        <Placeholder :w="200" :h="200" center />
        <h1 class="mt-10 mb-5">{{ whoWin }} победили!</h1>
        <div class="grid justify-items-center mb-5">
          <h2>Игроки-шпионы:</h2>
          <div class="flex gap-2 justify-center flex-wrap">
            <span v-for="(playerNum, idx) in whoSpies" :key="idx" class="btn">
              {{ playerNum }}
            </span>
          </div>
        </div>
        <p>Локация: {{ location }}</p>
      </div>
      <NuxtLink class="btn" to="/">На главную</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      whoWin: '',
      location: '',
      whoSpies: ''
    }
  },
  mounted() {
    this.whoWin = localStorage.getItem('whoWin')
    this.location = localStorage.getItem('selectedLocation')
    this.whoSpies = JSON.parse(localStorage.getItem('whoSpies'))
  }
}
</script>
