export const state = () => ({
  dark: false
});

export const getters = {
  dark: (state) => state.dark
};

export const mutations = {
  setDarkTheme: (state) => {
    state.dark = true;
  },
  setLightTheme: (state) => {
    state.dark = false;
  }
};
