<template>
  <div id="settings" class="wrap wrap-py flex flex-col gap-5">
    <PlayersCount title="Количество игроков:" />
    <SpiesCount title="Количество шпионов:" />
    <TimeCount title="Продолжительность игры:" />
    <NuxtLink to="/settings/location-groups-selection" class="btn">
      К выбору локаций
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
