import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../view/Login";
import NotFound from "../view/NotFound";
import Home from "../view/Home";

Vue.use(VueRouter);

const isAuth = (req, res, next) => {
  console.log(`isAuth`);
  next("/login");
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      beforeEnter: isAuth,
    },
    {
      path: "/login",
      component: Login,
      //beforeEnter: isAuth
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

export default router;
