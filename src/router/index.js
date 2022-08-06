import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";

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
    },
  ],
});

export default router;
