<template>
  <div class="wrap">
    <img
      class="bg-graphics bg-graphics__top"
      src="@/assets/graphics/graphics-header.svg"
      alt=""
    />
    <Nav />
    <Bag />
    <div class="cart-wrap">
      <h1 class="title">{{ title }}</h1>
      <ul>
        <li v-for="item in cart" v-bind:key="item.id">
          <div class="item-wrap">
            <div class="item-title">
              {{ item.title }}
              <div class="border">....................</div>
            </div>
            <div class="item-price">{{ item.price }} kr</div>
            <div class="item-quantity">{{ item.quantity }}</div>
            <div class="add-quantity" @click="itemQuantity(id)">
              <img
                class="arrow-up__img"
                src="@/assets/graphics/arrow-up.svg"
                alt=""
              />
              <div class="item-quantity"></div>
            </div>
          </div>
        </li>
      </ul>
      <div class="cart-total">
        <h3 class="total">Total: kr</h3>
        <div class="border">....................</div>
      </div>
      <div>inkl moms + drönarleverans</div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Bag from "@/components/Bag";

export default {
  components: {
    Nav,
    Bag
  },
  name: "cart",
  data() {
    return {
      title: "Din beställning"
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.$store.getters.total;
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    itemQuantity(id) {
      this.$store.commit("updateItem", id);
    }
  }
};
</script>

<style lang="scss">
.cart {
  height: 100vh;
  width: 75vh;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
}
</style>
