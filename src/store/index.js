import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    order: {
      orderNumber: "",
      timeStamp: Date.now(),
      items: [],
      totalValue: 0
    },
    loading: false
  },
  mutations: {
    persistMenu(state, data) {
      state.menu = data;
    },
    postThisOrder(state, data) {
      state.order.eta = data.eta;
      state.order.orderNumber = data.orderNr;
      state.order.items = state.cart;
      state.loading = false;
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
    }
  },
  actions: {
    async getMenu(context) {
      const data = await API.fetchMenu();
      context.commit("persistMenu", data);
      // return true;
    },
    async postOrder(context) {
      this.state.loading = true;
      const data = await API.fetchOrder();
      context.commit("postThisOrder", data);
    },
    addItem(context, item) {
      context.commit("addToCart", item);
    },
    clearCart(context) {
      context.commit("emptyCart");
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

    // total: state => {
    //   if (state.cart.length > 0) {
    //     return state.cart
    //       .map(item => item.price)
    //       .reduce((total, amount) => total + amount);
    //   } else {
    //     return 0;
    //   }
    // }
  },

  modules: {}
});
