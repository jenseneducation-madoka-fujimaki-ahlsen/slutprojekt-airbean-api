<template>
  <div class="our-coffee bg-color">
    <img
      class="bg-graphics bg-graphics__top"
      src="@/assets/graphics/graphics-header.svg"
      alt=""
    />
    <Nav />
    <div class="our-coffee-wrap">
      <!-- <img :src="headerImagePath" alt="graphics-header"> -->
      <!-- <img class="header__img" src="@/assets/graphics/graphics-header.svg" alt=""> -->
      <h1>{{ title }}</h1>
      <div class="text">
        <p id="text1">{{ text1 }}</p>
        <p id="text2">{{ text2 }}</p>
      </div>
      <img class="eva-cortado__img" src="@/assets/graphics/eva-cortado.jpg" />
      <h2>{{ name }}</h2>
      <h3>{{ occupation }}</h3>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  },
  name: "Background",

  data() {
    return {
      title: "Vårt kaffe",
      text1:
        "Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.",
      text2:
        "Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go,steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.",
      name: "Eva Cortado",
      occupation: "VD & Grundare"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main";

.our-coffee {
  height: 100vh;
}

.our-coffee-wrap {
}

// .bg-graphics {
//   position: relative;
// }

#text1 {
  font-weight: bold;
}
#text2 {
  font-size: 1em;
}
</style>
