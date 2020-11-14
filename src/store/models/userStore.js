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
      state.user = user;
    }
  },
  actions: {
    SIGNIN_USER({ commit }, { email, passwd }) {
      const url = "/user/signin";
      const data = { email: email, passwd: passwd };

      axios
        .post(DOMAIN + url, data)
        .then(res => {
          console.log("success");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

export default userStore;
