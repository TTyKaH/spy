<template>
  <div id="navigation" class="wrap wrap-py text-center relative">
    <div class="relative h-full flex flex-col justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-0 right-0" fill="none" viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2">
        <path
          stroke-linecap="round" stroke-linejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <div class="grid gap-5">
        <!-- <ButtonWithLink :disabled="true">Статистика</ButtonWithLink> -->
        <button class="btn btn-disabled">Статистика</button>
        <ButtonWithLink to="/app/locations">Список локаций</ButtonWithLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters['auth/isLogin']
    }
  },
  beforeMount() {
    if (!this.isLogin) {
      this.$router.push('/app')
    }
  }
}
</script>
