export const state = () => ({
  locations: [{
      groupName: 'Природа',
      locations: [
        'Каньон',
        'Джунгли',
        'Вулкан',
        'Поле',
        'Лес',
        'Степь',
        'Парк',
        'Сад',
        'Пещера',
        'Пустыня',
        'Озеро',
        'Топи',
        'Необитаемый остров',
        'Дно океана',
        'Водопад',
        'Черная дыра',
        'Луна',
        'Поверхность солнца',
        'Заповедник',
        'Водопад',
        'Лагуна',
        'Марианская впадина',
        'Геотермальный источник',
        'Фьорд',
      ]
    },
    {
      groupName: 'Сфера услуг',
      locations: [
        'Ресторан',
        'Загс',
        'Тату салон',
        'Салон красоты',
        'Прачечная',
        'Бутик',
        'Рынок',
        'Фотостудия',
        'Бар',
        'Кальянная',
        'Банк',
        'Парикмахерская',
        'Компьютерный клуб',
        'Автосервис',
        'Аптека',
        'Продуктовый магазин',
        'Детсад',
        'Отель',
        'Автомойка',
        'Суд',
        'Ветеринарная клиника',
        'Стоматология',
        'Антикварный магазин',
        'Оранжерея',
        'Печатня',
        'Сервисный центр',
        'Зоомагазин',
        'Икея',
        'Кофешоп',
        'Сувенирная лавка',
        'Автомастерская',
        'Пивная мастерская',
        'Массажный кабинет',
      ]
    },
    {
      groupName: 'Спорт',
      locations: [
        'Стадион',
        'Фитнес зал',
        'Ринг',
        'Ипподром',
        'Тир',
        'Хоккейная арена',
        'Баскетбольная площадка',
        'Теннисный корт',
        'Скейт площадка',
      ]
    },
    {
      groupName: 'Досуг',
      locations: [
        'Цирк',
        'Каток',
        'Библиотека',
        'Музей',
        'Театр',
        'Океанариум',
        'Зоопарк',
        'Кинотеатр',
        'Аквапарк',
        'Карнавальная площадь',
        'Горнолыжный курорт',
        'Боулинг',
        'Летний лагерь',
        'Гоночная трасса',
        'Бассейн',
        'Поле для гольфа',
        'Парк аттракционов',
        'Колесо обозрения',
        'Кемпинговый лагерь',
        'Бал-маскарад',
        'Кабаре',
        'Караоке клуб',
        'Рок концерт',
        'Курилка',
        'Беседка',
        'Интернет кафе',
        'Картинг',
        'Квест рум',
        'Дача',
        'Курорт',
        'Ледовый дворец',
        'Поле чудес',
        'Коррида',
        'Карусель',
      ]
    },
    {
      groupName: 'Деятельность',
      locations: [
        'Нефтебаза',
        'Карьер',
        'Кузница',
        'Электростанция',
        'Лаборатория',
        'Космическая станция',
        'Космодром',
        'Обсерватория',
        'Студия звукозаписи',
        'Операционная',
        'Шахта',
        'Ферма',
        'Школа',
        'Огород',
        'Верфь',
        'Киностудия',
        'Телестудия',
        'Автозаправочная станция',
        'Почтовое отделение',
        'Чайный цех',
        'Университет',
        'Офис',
        'Нефтеплатформа',
        'Полярная станция',
        'Аукцион',
        'Букмекерская контора',
        'Лесопилка',
        'Конференция',
        'Пасека',
        'Скотобойня',
        'Теплица',
        'Биржа',
        'Подиум',
        'Мельница',
        'Научный центр',
      ]
    },
    {
      groupName: 'Закрытые',
      locations: [
        'СИЗО',
        'Казарма',
        'Канализация',
        'Баня',
        'Склеп',
        'Трюм',
        'Бункер',
        'Притон',
        'Крематорий',
        'Конюшня',
        'Морг',
        'Оружейный склад',
        'Раздевалка',
        'Церковь',
        'Полицейский участок',
        'Логово мафии',
        'Общежитие',
        'Торговый центр',
        'Египетская гробница',
        'Ангар',
        'Амбар',
        'Сеновал',
        'Иглу',
        'Столовая',
        'Госдума',
        'Примерочная',
        'Психиатрическая больница',
        'Картинная галерея',
        'Мастерская художника',
        'Швейная мастерская',
        'Тунель',
        'Телефонная будка',
        'Склад',
        'Архив',
        'Вентиляционная шахта',
      ]
    },
    {
      groupName: 'Открытые',
      locations: [
        'Кладбище',
        'Свалка',
        'Пастбище',
        'Окоп',
        'Лабиринт',
        'Замок',
        'Тюрьма',
        'Заброшенный город',
        'Оружейный полигон',
        'Стройплощадка',
        'Воинская часть',
        'Городишко дикого запада',
        'Маяк',
        'Деревня',
        'Двор',
        'Концетрационный лагерь',
        'Мост',
        'Переулок',
        'Место раскопок',
        'Кокаиновая плантация',
        'Парковка',
        'Плотина',
        'Золотой прииск',
        'Серпантин',
        'Плац',
        'Канава',
        'Домик на дереве',
        'Смотровая вышка',
        'Велотрек',
        'Пикет',
        'Понтонная переправа',
        'Город',
      ]
    },
    {
      groupName: 'Траспорт',
      locations: [
        'Вагон',
        'Пиратский корабль',
        'Круизный лайнер',
        'Экскалатор',
        'Метро',
        'Дирижабль',
        'Авиалайнер',
        'Морской порт',
        'Вокзал',
        'Аэропорт',
        'Лифт',
        'Паром',
        'Канатная дорога',
        'Взлётная полоса',
        'Авианосец',
        'Галера',
        'Фуникулер',
      ]
    },
    {
      groupName: 'Исторические',
      locations: [
        'Колизей',
        'Красная площадь',
        'Чернобыль',
        'Поле средневоковой битвы',
        'Тронный зал',
        'Белый дом',
        'Кунсткамера',
        'Кунсткамера',
        'Башни-близнецы',
      ]
    },
    {
      groupName: '18+',
      locations: [
        'Сексшоп',
        'Бордель',
        'Стриптиз клуб',
        'Ночной клуб',
        'Казино',
        'Порностудия',
        'БДСМ клуб',
        'Вписка',
        'Клуб свингеров',
        'Пляж нудистов',
      ]
    },
    {
      groupName: 'Страны',
      locations: [
        'Англия',
        'Греция',
        'Япония',
        'США',
        'Египет',
        'Израиль',
        'Индия',
        'Италия',
        'Франция',
        'Россия',
      ]
    },
    {
      groupName: 'В доме',
      locations: [
        'Чилл хата Серого',
        'Гараж',
        'Кладовая',
        'Чердак',
        'Подъезд',
        'Душевая кабина',
        'Гардеробная',
        'Ванная',
        'Кухня',
      ]
    },
    {
      groupName: 'Другое',
      locations: [
        'Зомбиапокалипсис в городе',
        'Логово ведьмы',
        'Пограничный КПП',
        'Рай',
        'Ад',
        'Хогвардс',
        'Платформа 9 и 3/4',
        'Мордор',
        'Адронный коллайдер',
        'Криптоферма',
        'Гетто',
        'Очередь',
        'Клуб анонимных алкоголиков',
        'Пыточная',
        'Выставка Е3',
        'Дом с приведениями',
      ]
    },
  ],
})

export const getters = {
  getLocations: (state) => {
    return state.locations
  },
}
