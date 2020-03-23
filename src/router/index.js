import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import OurCoffee from "../views/OurCoffee.vue";
import Orderstatus from "../views/Orderstatus.vue";
import Cart from "../views/Cart.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/ourcoffee",
    name: "OurCoffee",
    component: OurCoffee
  },
  {
    path: "/orderstatus",
    name: "Orderstatus",
    component: Orderstatus
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
