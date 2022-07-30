<template>
  <div id="navigation" class="wrap wrap-py wrap-center text-center relative">
    <div class="grid gap-5">
      <!-- <ButtonWithLink :disabled="true">Статистика</ButtonWithLink> -->
      <button class="btn btn-disabled">Статистика</button>
      <ButtonWithLink to="/app/locations">Список локаций</ButtonWithLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      // return this.$store.getters['auth/isLogin']
      return true
    }
  },
  beforeMount() {
    if (!this.isLogin) {
      this.$router.push('/app')
    }
  }
}
</script>
