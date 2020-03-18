import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import OurCoffee from "../views/OurCoffee.vue";
import OrderStatus from "../views/OrderStatus.vue";

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
    path: "/our-coffee",
    name: "OurCoffee",
    component: OurCoffee
  },
  {
    path: "/order-status",
    name: "OrderStatus",
    component: OrderStatus
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
