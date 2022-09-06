import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Shop from "../views/Shop.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import Calc from "../views/Calc.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";

import { auth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      beforeEnter: requireAuth,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: requireAuth,
    },
    {
      path: "/profile/settings",
      name: "Settings",
      component: Settings,
      beforeEnter: requireAuth,
    },
    {
      path: "/calc",
      name: "Calc",
      component: Calc,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
