<template>
  <div class="background">
    <div class="our-coffee">
      <h1>{{ title }}</h1>
      <p id="text1">{{ text1 }}</p>
      <p id="text2">{{ text2 }}</p>
      <img src="@/assets/graphics/eva-cortado.jpg" />
      <h2>{{ name }}</h2>
      <h3>{{ occupation }}</h3>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Background",
  computed: {
    ...mapState(["title", "text1", "text2", "name", "occupation"]),
    ...mapGetters({
      pathImage: "getImage"
    }),
    products() {
      return store.state.products;
    }
  }
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;700&display=swap);

.our-coffee {
  background: rgb(243, 228, 225);
}
h1 {
  font-family: "PT Serif", serif;
  font-size: 4em;
}
#text1 {
  font-family: "Work Sans", sans-serif;
  font-size: 2em;
  font-weight: bold;
  margin: 2rem 20rem;
}
#text2 {
  font-family: "Work Sans", sans-serif;
  font-size: 1em;
}
h2 {
  font-family: "PT Serif", serif;
}
</style>
