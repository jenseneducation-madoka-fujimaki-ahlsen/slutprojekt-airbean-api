<template>
  <div class="our-coffee bg-color">
    <Header />
    <div class="our-coffee-wrap">
      <h1 class="title">{{ title }}</h1>
      <div class="text">
        <p id="text1">{{ text1 }}</p>
        <p id="text2">{{ text2 }}</p>
        <p id="text2">{{ text3 }}</p>
      </div>
      <div class="eva-cortado-wrap">
        <div class="eva-cortado__img__wrap">
          <img
            class="eva-cortado__img"
            src="@/assets/graphics/eva-cortado.jpg"
          />
        </div>
        <h2>{{ name }}</h2>
        <h3 class="text">{{ occupation }}</h3>
      </div>
    </div>
    <img
      class="bg-graphics bg-graphics__bottom"
      src="@/assets/graphics/graphics-footer.svg"
      alt=""
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  name: "Background",
  data() {
    return {
      title: "Vårt kaffe",
      text1:
        "Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.",
      text2:
        "Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.",
      text3:
        "Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go,steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.",
      name: "Eva Cortado",
      occupation: "VD & Grundare"
    };
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.our-coffee-wrap {
  padding: 20px 32px;
}
#text1 {
  font-weight: bold;
  margin: 20px 0;
}
#text2 {
  font-size: 1em;
  margin-bottom: 20px;
}
.eva-cortado-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
}
.eva-cortado__img__wrap {
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  width: 73px;
  height: 73px;
}
</style>
