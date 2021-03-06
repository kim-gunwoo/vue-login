import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../view/login/Login";
import NotFound from "../view/error/404";
import Home from "../view/Home";
import store from "../store";

Vue.use(VueRouter);

const isAuth = (req, res, next) => {
  console.log(`isAuth`);
  store.getters["userStore/isAuth"] ? next() : next("/login");
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      beforeEnter: isAuth
    },
    {
      path: "/login",
      component: Login
      //beforeEnter: isAuth
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
