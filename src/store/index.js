import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    order: {}
  },
  mutations: {
    persistMenu(state, data) {
      state.menu = data;
    },
    addToCart(state, item) {
      state.cart.push({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: 1
      });
    },
    removeFromCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart.splice(index, 1);
    },
    updateItem(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart[index].quantity++;
    }
  },
  actions: {
    async getMenu(context) {
      const data = await API.fetchMenu();
      context.commit("persistMenu", data);
      // return true;
    },
    addItem(context, item) {
      context.commit("addToCart", item);
    }
  },
  getters: {
    total: state => {
      if (state.cart.length > 0) {
        return state.cart
          .map(item => item.price)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    }
  },

  modules: {}
});
