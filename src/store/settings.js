export const state = () => ({
  playersCount: 3,
  spiesCount: 1,
  timeCount: 10,
})

export const getters = {
  getPlayersCount: (state) => {
    return state.playersCount
  },
  getSpiesCount: (state) => {
    return state.spiesCount
  },
  getTimeCount: (state) => {
    return state.spiesCount
  },
}

export const mutations = {
  setPlayersCount: (state, count) => {
    state.playersCount = count;
  },
  setSpiesCount: (state, count) => {
    state.spiesCount = count;
  },
  setTimeCount: (state, count) => {
    state.timeCount = count;
  }
};
