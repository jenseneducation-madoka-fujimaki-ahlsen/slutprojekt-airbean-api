import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import OurCoffee from "../views/OurCoffee.vue";
import Orderstatus from "../views/OrderStatus.vue";
import Cart from "../components/Cart.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/menu",
        name: "Menu",
        component: Menu,
        children: [{
            path: "/cart",
            component: Cart,
            name: "Cart"
        }]
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
        path: "/profile",
        name: "Profile",
        component: Profile
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;