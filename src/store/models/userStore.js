import axios from "axios";
import { DOMAIN } from "../../api/index";

const userStore = {
  namespaced: true,
  state: {
    email: "test@test",
    passwd: "test",
    name: null,
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
      state = user;
    },
    SET_TOKEN(state, user) {
      state.token = user.token;
    }
  },
  actions: {
    SIGNIN_USER({ commit }, { email, passwd }) {
      const url = "/user/signin";
      const data = { email: email, passwd: passwd };

      return axios
        .post(DOMAIN + url, data)
        .then(res => {
          if (res.data) {
            const user = { email: email, passwd: passwd, token: "sign" };
            if (res.data) {
              commit("SET_TOKEN", user);
              return { msg: "success", path: "/" };
            }
          }
          //return res.data;
        })
        .catch(err => {
          return err;
        });
    }
  }
};

export default userStore;
