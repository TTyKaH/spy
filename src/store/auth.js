export const state = () => ({
  password: '5577',
  isLogin: false,
})


export const mutations = {
  login(state, pass) {
    if (state.password === pass) state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
};

export const getters = {
  isLogin(state) {
    return state.isLogin
  }
}
