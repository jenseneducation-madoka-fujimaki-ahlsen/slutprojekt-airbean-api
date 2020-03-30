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

            <div class="item-price">{{ item.price * item.quantity }} kr</div>
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
      <button v-on:click="checkOrder" class="button-button-black-cartr-button">
        {{ buttonTxt }}
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
      title: "Din beställning",
      buttonTxt: "Take my money!"
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
    async checkOrder() {
      if (this.$store.state.cart.length !== 0) {
        this.$router.push({ path: "/orderStatus" });
        await this.$store.dispatch("postOrder");
        this.$store.dispatch("clearCart");
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
  .button-button-black-cartr-button {
    width: 70%;
    margin: 40px 0;
    height: 56px;
    font-size: 22px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 50px;
  }
  
.button-button-black-cartr-button:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.button-button-black-cartr-button:active {
    color: #000
}

.button-button-black-cartr-button:active:after {
    background: transparent;
}
.button-button-black-cartr-button:hover:before {
    opacity: 1;
}

.button-button-black-cartr-button:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
}
</style>
