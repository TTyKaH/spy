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
    <ButtonWithLink to="/settings/location-groups-selection" :handler="prepare">
      Дальше
    </ButtonWithLink>
  </div>
</template>

<script>
export default {
  head: {
    title: 'spy - settings'
  },
  beforeMount() {
    const playersCount = localStorage.getItem('playersCount')
    localStorage.setItem('isGameOn', false)
    localStorage.removeItem('whoSpies')
    if (playersCount === null) {
      localStorage.setItem('playersCount', 3)
      localStorage.setItem('spiesCount', 1)
      localStorage.setItem('timeCount', 10)
    }
  },
  methods: {
    prepare() {
      localStorage.removeItem('selectedLocation')
    }
  }
}
</script>
