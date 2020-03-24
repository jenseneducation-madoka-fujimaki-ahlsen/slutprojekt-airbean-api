<template>
  <div class="wrap bg-color">
    <img
      class="bg-graphics bg-graphics__top"
      src="@/assets/graphics/graphics-header.svg"
      alt=""
    />
    <Nav />
    <Bag />
    <div class="menu-wrap">
      <h1 class="title">Meny</h1>
      <ul>
        <li v-for="item in menu" v-bind:key="item.id">
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
      this.$store.dispatch("addItem", item);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.wrap {
  height: 100vh;
  color: $brown;
}

.menu-wrap {
  display: flex;
  flex-direction: column;
  margin: 20px 32px;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 32px 0;
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
      color: $light-brown;
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
