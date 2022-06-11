<template>
  <section id="rules">
    <div class="wrap wrap-py flex flex-col justify-between">
      <div>
        <div v-for="(rule, idx) in rules" :key="idx">
          <div v-if="idx === current" class="rule text-center grid gap-14">
            <Placeholder :w="200" :h="200" center />
            <div class="grid gap-5">
              <div class="circles flex justify-center gap-2">
                <div v-for="(circle, idx) in rules" :key="idx" :class="{ 'active-circle': current === idx }" class="circle" />
              </div>
              <h3>{{ rule.title }}</h3>
              <p>{{ rule.text }}</p>
              <button v-if="current === rules.length - 1">
                <NuxtLink class="btn w-full block" to="/">На главную</NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center gap-20 pt-10">
          <button class="btn btn-rounded btn-without-p-correction" @click="prev()">
            <img class="translate-left" src="@/assets/images/icons/angle-left.svg" width="75px" alt="">
          </button>
          <button class="btn btn-rounded btn-without-p-correction" @click="next()">
            <img class="translate-right" src="@/assets/images/icons/angle-right.svg" width="75px" alt="">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      rules: [
        {
          title: 'Шпион - игра у которой есть к тебе вопросы!',
          text: 'Вам нужно минимум 3 человека, этот телефон или пк и хотя бы раз прочитать эти коротенькие правила'
        },
        {
          title: 'В игре есть местные жители и шпионы',
          text: 'Игра сама раздаст роли и сообщит локацию Местным жителям, но не Шпионам'
        },
        {
          title: 'Цель местных жителей - вычислить шпиона',
          text: 'Местные жители увидят локацию и должны не выдавая её, понять кто Шпион за время игры'
        },
        {
          title: 'Цель шпиона - вычислить локацию',
          text: 'Он должен не раскрыть себя до конца времени игры или вычислить локацию, в которой все находятся'
        },
        {
          title: 'Задавайте друг другу вопросы о локации',
          text: 'По ответам и вопросам старайтесь понять, кто знает локацию, а кто делает вид'
        },
        {
          title: 'Игра укажет кому задавать первый вопрос',
          text: 'Ответивший следующим задает вопрос любому игроку, кроме того, кому только что отвечал'
        },
        {
          title: 'Ты шпион и думаешь что вычислил локацию?',
          text: 'Жми на паузу и говори локацию. Если угадал - ты выйграл! Если нет - выйграли Местные'
        },
        {
          title: 'Любой игрок может начать голосование только 1 раз',
          text: 'Жми на паузу и указывай на Шпиона, если ВСЕ против него - он откроется, если нет - играйте дальше'
        },
        {
          title: 'Игрок которого вскрыли голосованием - шпион',
          text: 'В этом случае Местные выйграли! На экране результата все увидят локацию, и кто из игроков были Шпионами'
        },
        {
          title: 'Игрок которого вскрыли оказался местным',
          text: 'Тогда выйграл Шпион! Если время закончилось и не кого не вычислили - то же выигрывает Шпион!'
        },
        {
          title: 'Удачной игры!',
          text: 'PS Это не релизная версия! Могут встречаться баги и непредвиденное поведение!'
        },
      ]
    }
  },
  head: {
    title: 'spy - rules',
  },
  methods: {
    prev() {
      if (this.current === 0) return
      this.current = this.current - 1
    },
    next() {
      if (this.current === this.rules.length - 1) return
      this.current = this.current + 1
    }
  }
}
</script>

<style lang="scss">
#rules {
  .circles {
    .circle {
      width: 20px;
      height: 20px;
      border: 2px solid #dfdfdf;
      border-radius: 100%;
    }

    .active-circle {
      background-color: #dfdfdf;
      border: 1px solid #b8b8b8;
    }
  }

  .translate-left {
    transform: translateX(-3px);
  }

  .translate-right {
    transform: translateX(3px);
  }
}
</style>
