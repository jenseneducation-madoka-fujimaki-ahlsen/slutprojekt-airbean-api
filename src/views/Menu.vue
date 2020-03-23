<template>
  <div class="wrap">
    <Nav />
    <div class="menu-wrap">
      <h1>Meny</h1>
      <ul>
        <li v-for="item in menu" v-bind:key="item.id">
          <div class="item-wrap">
            <div class="add" @click="addItem">
              <img class="add__img" src="@/assets/graphics/add.svg" alt="" />
              <div class="add__icon-bg"></div>
            </div>
            <div class="title">
              {{ item.title }}
              <div class="border">....................</div>
            </div>
            <div class="price">{{ item.price }} kr</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

          <!-- <div class="title-wrap">
            <div>{{ item.title }}</div>
            <div>{{ item.price }} kr</div>
          </div>
          <div class="desc">{{ item.desc }}</div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  mounted() {
    this.$store.dispatch("getMenu");
  },
  methods:{
    addItem(){

    }
  }
};
</script>

<style lang="scss">
$brown: #2f2926;
$light-brown: #81726c;

.wrap {
  height: 100vh;
  color: $brown;
}

.menu-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 32px;
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

  .title {
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

  .price {
    font-size: 20px;
    grid-area: 1 / 3 / 2 / 4;
    margin-left: 20px;
  }

  .desc {
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
