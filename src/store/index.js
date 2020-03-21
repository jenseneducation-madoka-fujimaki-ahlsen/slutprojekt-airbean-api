import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [], 
    title: 'Vårt kaffe',
    text1: 'Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.', 
    text2: 'Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go,steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.',
    // imagePath: './assets/graphics/close.svg',
    headerImagePath: '../assets/graphics/graphics-header.svg',
    name: 'Eva Cortado',
    occupation: 'VD & Grundare',
  },
  mutations: {
    persistMenu(state, data) {
      state.menu = data;
    }

  },
  actions: {
    async getMenu(context) {
    const data = await API.fetchMenu();
    context.commit("persistMenu", data);
    // return true;
  }
  },
 
  modules: {
  }
});
