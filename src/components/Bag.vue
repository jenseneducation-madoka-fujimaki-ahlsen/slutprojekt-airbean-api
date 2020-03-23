<template>
  <div class="bag">
    <router-link class="ico-bag__wrap" to="/cart">
      <div class="counter">
        <p class="counter__num">{{ counter }}</p>
      </div>
      <div class="ico-bag__wrap">
        <img class="ico-bag__img" src="@/assets/graphics/bag.svg" alt="" />
        <div class="ico-bag__bg"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.cart.length;
    }
  }
};
</script>

<style lang="scss">
$orange: #e5674e;

.bag {
  position: relative;
  z-index: 999;
  margin: 15px 20px 0 auto;
  width: 60px;
  height: 60px;
}

.counter {
  width: 23px;
  height: 23px;
  background-color: $orange;
  border-radius: 50%;
  position: absolute;
  right: 0;

  &__num {
    color: white;
    margin: 1px auto;
  }
}

.ico-bag {
  &__wrap {
    display: flex;
  }

  &__img {
    margin: 20px auto auto 20px;
    width: 20px;
    height: 20px;
  }

  &__bg {
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 50%;
  }
}
</style>
