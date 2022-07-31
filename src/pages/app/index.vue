<template>
  <div id="app" class="wrap wrap-py flex flex-col justify-between">
    <input id="password" v-model="pass" placeholder="password" type="password" />
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
    },
    encryptedPass() {
      return this.$store.getters['auth/getEncryptedPass']
    },
    key() {
      return this.$store.getters['auth/getKey']
    }
  },
  beforeMount() {
    if (this.isLogin) {
      this.$router.push('/app/navigation')
    }
  },
  methods: {
    next() {
      const decryptedPass = this.$CryptoJS.AES.decrypt(
        this.encryptedPass,
        this.key
      ).toString(this.CryptoJS.enc.Utf8)

      const passInput = document.getElementById('password')
      if (this.pass === decryptedPass) {
        this.$store.commit('auth/login')
        passInput.classList.remove('error-input')
        this.$router.push('/app/navigation')
      }
      passInput.classList.add('error-input')
    }
  }
}
</script>
