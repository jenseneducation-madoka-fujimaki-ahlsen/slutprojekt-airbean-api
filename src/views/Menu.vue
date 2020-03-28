<template>
  <div class="menu bg-color">
    <Header />
    <Bag v-on:click.native="activeCart" :class="{ 'cart-open': active }" />

    <div class="menu-wrap">
      <h1 class="title">Meny</h1>
      <ul class="menu-list">
        <li class="menu-list__item" v-for="item in menu" v-bind:key="item.id">
          <div class="item-wrap">
            <div class="add" @click="addItem(item)">
              <img class="add__img" src="@/assets/graphics/add.svg" alt="" />
              <div class="add__icon-bg"></div>
            </div>
            <div class="item-title pt">
              {{ item.title }}
              <div class="border">....................</div>
            </div>
            <div class="item-price pt">{{ item.price }} kr</div>
            <div class="item-desc">{{ item.desc }}</div>
          </div>
        </li>
      </ul>
    </div>
    <img
      class="bg-graphics bg-graphics__bottom"
      src="@/assets/graphics/graphics-footer.svg"
      alt=""
    />

    <div
      class="modal-bg"
      @click="closeCart"
      v-if="$route.matched.some(({ name }) => name === 'Cart')"
    ></div>

    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Bag from "@/components/Bag";

export default {
  components: {
    Header,
    Bag
  },
  data: () => ({
    active: false
  }),
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  mounted() {
    this.$store.dispatch("getMenu");
  },
  methods: {
    addItem(item) {
      //this.isAddClicked = true;
      this.$store.dispatch("addItem", item);
    },
    activeCart() {
      this.active = true;
    },
    closeCart() {
      this.active = false;
      this.$router.push({ path: "/menu" });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.menu {
  color: $brown;
  min-height: 100%;
  position: relative;
}

.cart-open {
  z-index: 999999;
}

.modal-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 99999;
}

.menu-wrap {
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  align-items: center;
  margin-bottom: 10px;
}

.menu-list {
  margin: 0;
  padding: 0;
  z-index: 1;

  &__item {
    list-style: none;
    margin: 32px 0;
  }
}

.item-wrap {
  display: grid;
  grid-template-columns: 1fr 10fr 4fr;
  grid-template-rows: repeat(2, auto);
  text-align: left;

  .add {
    grid-area: 1 / 1 / 3 / 2;
    position: relative;
    display: flex;
    margin: 6px 16px 0 0;

    &__img {
      width: 16px;
      height: 16px;
      position: absolute;
      margin: 8px auto auto 8px;

      &:active {
        transform: scale(0.5);
      }
    }
    &__icon-bg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: $brown;
    }
  }

  .item-title {
    font-size: 20px;
    grid-area: 1 / 2 / 2 / 2;
    display: flex;
    position: relative;

    .border {
      position: absolute;
      right: 0;
      color: $lightbrown;
      opacity: 0.5;
    }
  }

  .item-price {
    font-size: 20px;
    grid-area: 1 / 3 / 2 / 4;
    margin-left: 20px;
  }

  .item-desc {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 12px;
  }
}

.title-wrap {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
</style>
