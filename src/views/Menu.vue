<template>
  <div class="wrap">
    <Nav />
    <div class="menu-wrap">
      <h1>Meny</h1>
      <ul>
        <li v-for="item in menu" v-bind:key="item.id">
          <div class="item-wrap">
            <div class="add">
              <img class="add__img" src="@/assets/graphics/add.svg" alt="" />
              <div class="add__icon-bg"></div>
            </div>
            <div class="title">{{ item.title }}............</div>
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
  }
};
</script>

<style lang="scss">
.wrap {
  height: 100vh;
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
}

.item-wrap {
  display: grid;
  grid-template-columns: 1fr 10fr 2fr;
  grid-template-rows: repeat(2, auto);
  text-align: left;

  .add {
    grid-area: 1 / 1 / 3 / 2;
    position: relative;
    display: flex;
    margin-right: 16px;

    &__img {
      width: 20px;
      height: 20px;
      position: absolute;
      margin: 10px auto auto 10px;
    }
    &__icon-bg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: black;
    }
  }

  .title {
    font-size: 20px;
    grid-area: 1 / 2 / 2 / 2;
  }

  .price {
    font-size: 20px;
    grid-area: 1 / 3 / 2 / 4;
  }

  .desc {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 14px;
  }
}

.title-wrap {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
</style>
