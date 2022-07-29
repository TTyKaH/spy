<template>
  <div id="app" class="wrap wrap-py flex flex-col justify-between">
    <label class="grid gap-1">
      password
      <input id="password" v-model="pass" type="password" class="w-full px-2 text-gray-700 rounded" />
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
  methods: {
    next() {
      this.$store.commit('auth/login', this.pass)
      const passInput = document.getElementById('password')
      if (this.isLogin) {
        this.$router.push('/')
        return passInput.classList.remove('error-input')
      }
      passInput.classList.add('error-input')
    }
  }
}
</script>
