<template>
  <div class="cart">
    <img
      class="cart-bg-arrow"
      src="@/assets/graphics/cart-bg-arrow.svg"
      alt=""
    />
    <div class="cart-wrap">
      <h1 class="title">{{ title }}</h1>
      <ul>
        <li v-for="item in cart" v-bind:key="item.id">
          <div class="cart-item-wrap">
            <div class="item-title pt">
              {{ item.title }}
              <div class="border">........................</div>
            </div>

            <div class="quantity-wrap">
              <div
                class="add-quantity add-arrow-wrap"
                @click="addQuantity(item.id)"
              >
                <img
                  class="arrow-up__img"
                  src="@/assets/graphics/arrow-up.svg"
                  alt=""
                />
              </div>
              <div class="item-quantity">{{ item.quantity }}</div>
              <div
                class="remove-quantity remove-arrow-wrap"
                @click="removeQuantity(item.id)"
              >
                <img
                  class="arrow-down__img"
                  src="@/assets/graphics/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="item-price">{{ item.price }} kr</div>
          </div>
        </li>
      </ul>
      <div class="cart-total-wrap">
        <h3 class="total-title">
          Total
          <div class="border">.............................</div>
        </h3>
        <h3 class="total-price">{{ totalAmount }} kr</h3>
        <p class="total-des">inkl moms + drönarleverans</p>
      </div>
      <button v-on:click="checkOrder" class="button button-black cartr-button">
        Take my money!
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
    addQuantity(id) {
      this.$store.commit("addQuantity", id);
    },
    removeQuantity(id) {
      this.$store.commit("removeQuantity", id);
    },
    checkOrder() {
      if (this.$store.state.cart.length !== 0) {
        this.$store.state.cart = [];
        this.$router.push({ path: "/orderStatus" });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.cart-bg-arrow {
  z-index: 9999999;
  width: 32px;
  height: 21px;
  position: absolute;
  top: 64px;
  right: 34px;
}

.cart-wrap {
  height: 80%;
  width: 90%;
  position: absolute;
  z-index: 9999999;
  background: white;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 32px;
    margin: 30px 0;
  }

  ul {
    width: 85%;

    & li {
      list-style: none;
      margin-bottom: 20px;
    }
  }

  .cart-item-wrap {
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-template-rows: 30px 20px;
    text-align: left;

    .item-title {
      font-size: 20px;
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      position: relative;

      .border {
        position: absolute;
        right: 0;
        color: $lightbrown;
        opacity: 0.5;
        margin-right: 20px;
      }
    }

    .quantity-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 2 / 3 / 3;
      font-weight: 600;
      line-height: 20px;

      .add-arrow-wrap {
        margin-bottom: 5px;
      }

      .remove-arrow-wrap {
        margin-top: 5px;
      }

      img {
        display: block;
      }
    }

    .item-price {
      grid-area: 2 / 1 / 3 / 2;
      font-size: 14px;
    }
  }

  .cart-total-wrap {
    width: 85%;
    display: grid;
    grid-template-columns: 8fr 2fr;
    grid-template-rows: 30px 20px;
    text-align: left;
    margin-top: 40px;

    .total-title {
      font-size: 20px;
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      position: relative;

      .border {
        position: absolute;
        right: 0;
        color: $lightbrown;
        opacity: 0.5;
        margin-right: 20px;
      }
    }

    .total-price {
      text-align: right;
    }

    p {
      font-size: 14px;
    }
  }
  .button {
    width: 70%;
    margin: 40px 0;
    text-align: center;
    text-decoration: none;
    padding: 6px;
  }
}
</style>
