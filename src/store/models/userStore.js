import axios from "axios";
import { DOMAIN } from "../../api/index";

const userStore = {
  namespaced: true,
  state: {
    email: "test@test",
    usernm: "test",
    passwd: "test",
    token: null
  },
  getters: {
    isAuth(state) {
      return !!state.token;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state = user;
    },
    SET_TOKEN(state, user) {
      state.token = user.token;
    }
  },
  actions: {
    SIGNIN_USER({ commit }, { email, passwd }) {
      //const url = "/user/signin";
      const url = "/user";
      const data = { email: email, passwd: passwd };

      return axios
        .get(DOMAIN + url, data)
        .then(res => {
          if (res.data) {
            const user = { email: email, passwd: passwd, token: "sign" };
            if (res.data) {
              commit("SET_TOKEN", user);
              return { msg: "success", path: "/" };
            }
          }
        })
        .catch(err => {
          return { err };
        });
    },
    SIGNUP_USER({ commit }, user) {
      //const url = "/user/signup";
      const url = "/user";

      return axios
        .post(DOMAIN + url, user)
        .then(res => {
          if (res.data) {
            return { msg: "success", path: "/" };
          }
        })
        .catch(err => {
          return { err };
        });
    }
  }
};

export default userStore;
