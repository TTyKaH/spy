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
          locations: ['Стадион', 'Фитнес зал', 'Ринг', 'Колизей', 'Ипподром']
        },
        {
          groupName: 'Досуг',
          locations: ['Цирк', 'Каток', 'Библиотека', 'Музей', 'Театр']
        },
        {
          groupName: 'Деятельность',
          locations: [
            'Нефтебаза',
            'Карьер',
            'Кузница',
            'Электростанция',
            'Лаборатория'
          ]
        },
        {
          groupName: 'Закрытые',
          locations: [
            'Чил хата Серого',
            'СИЗО',
            'Казарма',
            'Гараж',
            'Канализация'
          ]
        },
        {
          groupName: 'Открытые',
          locations: ['Кладбище', 'Свалка', 'Пастбище', 'Окоп', 'Лабиринт']
        },
        {
          groupName: 'Транспорт',
          locations: [
            'Вагон',
            'Пиратский корабль',
            'Круизный лайнер',
            'Эскалатор',
            'Метро'
          ]
        },
        {
          groupName: 'Другое',
          locations: [
            'Зомбиапокалипсис в городе',
            'Логово ведьмы',
            'Поле средневековой битвы',
            'Тронный зал',
            'Пограничный КПП'
          ]
        }
      ]
    }
  },
  head: {
    title: 'spy - settings'
  },
  beforeMount() {
    const playersCount = localStorage.getItem('playersCount')
    const spiesCount = localStorage.getItem('spiesCount')
    const timeCount = localStorage.getItem('timeCount')
    if (
      playersCount === null ||
      playersCount === 3 ||
      spiesCount === 1 ||
      timeCount === 10
    ) {
      localStorage.clear()
      localStorage.setItem('playersCount', 3)
      localStorage.setItem('spiesCount', 1)
      localStorage.setItem('timeCount', 10)
    }
  }
}
</script>
