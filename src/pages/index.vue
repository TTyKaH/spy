<template>
  <div id="main" class="wrap wrap-py wrap-center text-center relative">
    <DarkModeToggle class="absolute top-0 right-0 z-10"></DarkModeToggle>
    <div class="grid justify-items-center mb-10">
      <h1 class="text-4xl font-bold">Spy</h1>
      <img src="@/static/favicon.png" alt="" width="100px" />
    </div>
    <div class="grid gap-5">
      <ButtonWithLink to="/settings">Начать</ButtonWithLink>
      <ButtonWithLink v-if="!canResume" :disabled="true">
        Продолжить
      </ButtonWithLink>
      <ButtonWithLink v-else to="/play/time-to-questions">
        Продолжить
      </ButtonWithLink>
      <ButtonWithLink to="/rules">Правила</ButtonWithLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    canResume() {
      return JSON.parse(localStorage.getItem('isGameOn'))
    }
  }
}
</script>
