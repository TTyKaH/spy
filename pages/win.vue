<template>
  <section id="spy-win">
    <div class="wrap wrap-py flex flex-col justify-between">
      <div class="text-center">
        <div class="flex justify-center">
          <img v-if="whoWin === 'Местные'" src="@/assets/images/local.png" width="150" alt="">
          <img v-else src="@/assets/images/spy.png" width="150" alt="">
        </div>
        <h1 class="mt-10">{{ whoWin }} победили!</h1>
        <p class="my-5">Локация: <br> {{ location }}</p>
        <div class="grid gap-3 justify-items-center">
          <p>Игроки-шпионы:</p>
          <div class="spies flex gap-2 justify-center flex-wrap">
            <span v-for="(playerNum, idx) in whoSpies" :key="idx" class="btn w-12">
              {{ playerNum }}
            </span>
          </div>
        </div>
      </div>
      <div class="grid gap-5">
        <!-- <NuxtLink class="btn" to="/play/roles-distribution" @click="prepareLocalStore()">К новым ролям</NuxtLink> -->
        <NuxtLink class="btn" to="/settings/location-groups-selection" @click="prepareLocalStore()">
          К выбору локаций
        </NuxtLink>
        <NuxtLink class="btn" to="/">На главную</NuxtLink>
      </div>
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
    this.whoSpies = JSON.parse(localStorage.getItem('whoSpies')).sort()
  },
  methods: {
    prepareLocalStore() {
      localStorage.removeItem('whoSpies')
      localStorage.removeItem('currentPlayer')
    }
  }
}
</script>

<style lang="scss" scoped>
.spies {
  max-width: 180px;
}
</style>
