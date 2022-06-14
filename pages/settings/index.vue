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
  data() {
    return {
      locations: [
        {
          groupName: 'Спорт',
          locations: ['Спорт 1', 'Спорт 2']
        },
        {
          groupName: 'Досуг',
          locations: ['Досуг 1', 'Досуг 2']
        },
        {
          groupName: 'Деятельность',
          locations: ['Деятельность 1', 'Деятельность 2']
        },
        {
          groupName: 'Закрытые',
          locations: ['Закрытые 1', 'Закрытые 2']
        },
        {
          groupName: 'Открытые',
          locations: ['Открытые 1', 'Открытые 2']
        },
        {
          groupName: 'Транспорт',
          locations: ['Транспорт 1', 'Транспорт 2']
        },
        {
          groupName: 'Другое',
          locations: ['Другое 1', 'Другое 2']
        }
      ]
    }
  },
  head: {
    title: 'spy - settings'
  },
  beforeMount() {
    localStorage.clear()
    localStorage.setItem('playersCount', 3)
    localStorage.setItem('spiesCount', 1)
    localStorage.setItem('timeCount', 10)
    localStorage.setItem('locations', JSON.stringify(this.locations))
  }
}
</script>
