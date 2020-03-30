import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu: [],
        cart: [],
        orders: [],
        order: {
            orderNumber: "",
            timeStamp: Date.now(),
            items: [],
            totalValue: 0
        },
        loading: false,
        user: {},
        newUser: true
    },
    mutations: {
        persistMenu(state, data) {
            state.menu = data;
        },
        postThisOrder(state, data) {
            state.order = data;
            state.loading = false;
        },
        getUserHistory(state, data) {
            state.orders = data;
        },
        addToCart(state, item) {
            if (state.cart.find(i => i.id === item.id)) {
                let index = state.cart.findIndex(i => i.id === item.id);
                state.cart[index].quantity++;
            } else {
                state.cart.push({
                    id: item.id,
                    price: item.price,
                    title: item.title,
                    quantity: 1
                });
            }
        },
        emptyCart(state) {
            state.cart = [];
        },
        removeFromCart(state, id) {
            let index = state.cart.findIndex(item => item.id === id);
            state.cart.splice(index, 1);
        },
        addQuantity(state, id) {
            let index = state.cart.findIndex(item => item.id === id);
            state.cart[index].quantity++;
        },
        removeQuantity(state, id) {
            let index = state.cart.findIndex(item => item.id === id);
            state.cart[index].quantity--;
            if (state.cart[index].quantity == 0) {
                state.cart.splice(index, 1);
            }
        },
        submitThisForm(state, user) {
            state.user = user;
            localStorage.setItem("User", JSON.stringify(state.user));
        },
        checkThisUser(state) {
            let user = localStorage.getItem("User");
            state.user = JSON.parse(user);
            if (state.user !== null) {
                state.newUser = false;
            } else {
                state.newUser = true;
            }
        }
    },
    actions: {
        async getMenu(context) {
            const data = await API.fetchMenu();
            context.commit("persistMenu", data);
        },
        async postOrder(context) {
            this.state.loading = true;

            if (this.state.user == null) {
                this.state["user"] = {};
                const data = await API.fetchKey();
                this.state.user["key"] = data.key;
                localStorage.setItem("User", JSON.stringify(this.state.user));
            }
            console.log(this.state.user.key);

            const data = await API.fetchOrder(
                this.state.cart,
                this.state.order.totalValue,
                this.state.user.key
            );
            context.commit("postThisOrder", data);
        },
        async getHistory(context) {
            const data = await API.fetchUserOrder(this.state.user.key);
            context.commit("getUserHistory", data.orders);
        },
        addItem(context, item) {
            context.commit("addToCart", item);
        },
        clearCart(context) {
            context.commit("emptyCart");
        },
        async submitForm(context, user) {
            const data = await API.fetchKey();
            user.key = data.key;
            context.commit("submitThisForm", user);
        },
        checkUser(context) {
            context.commit("checkThisUser");
        }
    },
    getters: {
        total: state => {
            if (state.cart.length > 0) {
                state.order.totalValue = 0;
                state.cart.forEach(item => {
                    state.order.totalValue += item.price * item.quantity;
                });
                return state.order.totalValue;
            } else {
                return 0;
            }
        }
    },
    modules: {}
});