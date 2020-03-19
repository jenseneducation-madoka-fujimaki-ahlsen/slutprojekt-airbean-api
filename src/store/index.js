import Vue from 'vue'
import Vuex from 'vuex'
import json from '@/assets/data/menu.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: json.menu
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
