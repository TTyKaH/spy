<template>
  <div id="settings" class="wrap wrap-py flex flex-col gap-10">
    <h2>Настройки игры</h2>
    <div class="grid gap-5">
      <PlayersCount title="Игроки:" />
      <SpiesCount title="Шпионы:" />
      <TimeCount title="Время:" />
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
          group: 'Открытые',
          locations: ['Пляж', 'Кладбище'],
        },
        {
          group: 'Закрытые',
          locations: ['Подвал', 'Чердак'],
        },
        {
          group: 'Природа',
          locations: ['Озеро', 'Река'],
        },
        {
          group: 'Группа 1',
          locations: ['Пляж 2', 'Кладбище 2'],
        },
        {
          group: 'Группа 2',
          locations: ['Подвал 2', 'Чердак 2'],
        },
        {
          group: 'Группа 3',
          locations: ['Озеро 2', 'Река 2'],
        },
        {
          group: 'Группа 4',
          locations: ['Озеро 2', 'Река 2'],
        },
        {
          group: 'Группа 5',
          locations: ['Озеро 2', 'Река 2'],
        },
        {
          group: 'Группа 6',
          locations: ['Озеро 2', 'Река 2'],
        },
        {
          group: 'Группа 7',
          locations: ['Озеро 2', 'Река 2'],
        },
        {
          group: 'Группа 8',
          locations: ['Озеро 2', 'Река 2'],
        },
      ],
    }
  },
  beforeMount() {
    localStorage.clear()
    localStorage.setItem('playersCount', 3)
    localStorage.setItem('spiesCount', 1)
    localStorage.setItem('timeCount', 10)
    localStorage.setItem('locations', JSON.stringify(this.locations))
  },
}
</script>
