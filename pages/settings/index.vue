<template>
  <div id="settings" class="wrap wrap-py flex flex-col justify-between">
    <div class="grid gap-10">
      <h2>Настройки игры</h2>
      <div class="grid gap-5">
        <PlayersCount title="Игроки:" />
        <SpiesCount title="Шпионы:" />
        <TimeCount title="Время:" />
      </div>
    </div>
    <NuxtLink to="/settings/location-groups-selection" class="btn">
      Дальше
    </NuxtLink>
  </div>
</template>

<script>
export default {
  head: {
    title: 'spy - settings'
  },
  beforeMount() {
    const playersCount = localStorage.getItem('playersCount')
    const spiesCount = localStorage.getItem('spiesCount')
    const timeCount = localStorage.getItem('timeCount')
    if (playersCount === null || spiesCount === null || timeCount === null) {
      localStorage.clear()
      localStorage.setItem('playersCount', 3)
      localStorage.setItem('spiesCount', 1)
      localStorage.setItem('timeCount', 10)
    }
  }
}
</script>
