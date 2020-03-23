import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js';
import json from "@/assets/data/menu.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: json.menu,
    menuApi: [],
    cart: [], 
  },
  mutations: {
    persistMenu(state, data) {
      state.menu = data;
    },
    addToCart(state, item) {
      return state.cart.push(item);
  }

  },
  actions: {
    async getMenu(context) {
      const data = await API.fetchMenu();
      context.commit("persistMenu", data);
      // return true;
    }
  },
  getters: {
    total: state => {
        if(state.cart.length > 0) {
            return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
        } else {
            return 0;
        }
}
  },
 
  modules: {}
});
