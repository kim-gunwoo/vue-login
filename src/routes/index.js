import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../view/Login";
import NotFound from "../view/NotFound";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
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
