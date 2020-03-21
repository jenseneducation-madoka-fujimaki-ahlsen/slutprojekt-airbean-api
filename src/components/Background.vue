<template>
  <div class="background">
    <div class="our-coffee">
        <!-- <img :src="headerImagePath" alt="graphics-header"> -->
        <!-- <img src="@/assets/graphics/graphics-header.svg" alt=""> -->
      <h1>{{ title }}</h1>
      <span>
      <p id="text1">{{ text1 }}</p>
      <p id="text2">{{ text2 }}</p>
      </span>
      <img src="@/assets/graphics/eva-cortado.jpg" />
      <h2>{{ name }}</h2>
      <h3>{{ occupation }}</h3>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Background",
  computed: {
    ...mapState(["title", "text1", "text2", "name", "occupation", "headerImagePath"]),
  }
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;700&display=swap);

.our-coffee {
  background: rgb(243, 228, 225);
  height: 100vh;
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
