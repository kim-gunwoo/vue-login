const userStore = {
  namespaced: true,
  state: {
    email: "1@1",
    passwd: "1",
    name: "nm",
    token: null
  },
  getters: {
    user: state => {
      return state.user;
    },
    isAuth(state) {
      return !!state.token;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {}
};

export default userStore;
