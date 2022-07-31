export const state = () => ({
  password: 'U2FsdGVkX187XwpX+sCp5GwLmRY4Gd33hpBBEeGlJ6s=',
  key: 'gregor',
  isLogin: false,
})


export const mutations = {
  login(state) {
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
};

export const getters = {
  isLogin(state) {
    return state.isLogin
  },
  getEncryptedPass(state) {
    return state.password
  },
  getKey(state) {
    return state.key
  },
}
