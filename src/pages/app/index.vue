<template>
  <div id="app" class="wrap wrap-py flex flex-col justify-between">
    <label class="grid gap-1">
      password
      <input id="password" v-model="pass" type="password" />
    </label>
    <button class="btn" @click="next()">
      Далее
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pass: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['auth/isLogin']
    }
  },
  beforeMount() {
    if (this.isLogin) {
      this.$router.push('/app/navigation')
    }
  },
  methods: {
    next() {
      this.$store.commit('auth/login', this.pass)
      const passInput = document.getElementById('password')
      if (this.isLogin) {
        this.$router.push('/app/navigation')
        return passInput.classList.remove('error-input')
      }
      passInput.classList.add('error-input')
    }
  }
}
</script>
