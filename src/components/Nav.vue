<template>
  <div class="nav-menu" :class="{ 'nav-menu-open': active }">
    <div class="nav-menu__bg" v-show="active"></div>
    <div
      @click="navMenuOpen"
      class="hamburger-menu-wrap"
      :class="{ 'is-active': active }"
      v-show="!active"
    >
      <img class="nav-icon" src="@/assets/graphics/navicon.svg" alt="" />
      <div class="navicon-bg"></div>
    </div>

    <div
      @click="navMenuClose"
      class="hamburger-menu-wrap"
      :class="{ 'is-active': !active }"
      v-show="active"
    >
      <img src="@/assets/graphics/close.svg" alt="" />
      <div class="navicon-bg"></div>
    </div>

    <div name="nav">
      <nav class="nav" v-show="nav">
        <ul class="nav__wrap">
          <li
            v-for="nav in navList"
            v-bind:key="nav.name"
            class="menu-list"
            @click="navMenuClose"
          >
            <router-link class="menu-list-link" :to="`${nav.link}`"
              >{{ nav.name }}
            </router-link>
            <div class="line"></div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.order;
    }
  },
  mounted() {
    if (this.order.items.length !== 0) {
      this.navList.push({
        name: "Orderstatus",
        link: "/orderstatus"
      });
    }
  },
  data: () => ({
    active: false,
    nav: false,
    navList: [
      {
        name: "Meny",
        link: "/menu"
      },
      {
        name: "Vårt kaffe",
        link: "/ourcoffee"
      },
      {
        name: "Min profile",
        link: "/profile"
      }
      // {
      //   name: "Orderstatus",
      //   link: "/orderstatus"
      // }
    ]
  }),
  methods: {
    navMenuOpen() {
      this.active = !this.active;
      this.nav = !this.nav;
    },
    navMenuClose() {
      this.active = false;
      this.nav = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main";

.nav-menu {
  position: absolute;
  top: 0;
  z-index: 9999;

  &__bg {
    width: 100%;
    height: 100%;
    background-color: $brown;
    position: absolute;
  }
}

.nav-menu-open {
  width: 100%;
  height: 100%;
  position: fixed;
}

.hamburger-menu-wrap {
  z-index: 999;
  position: relative;
  display: flex;
  margin: 20px auto auto 20px;
}

img {
  position: absolute;
  margin: 13px auto auto 12px;
  width: 26px;
  height: 26px;
}

.navicon-bg {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
}

.nav {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: -100px;

  &__wrap {
    list-style: none;
    margin: 0;
    padding: 0;

    li:last-of-type {
      .line {
        display: none;
      }
    }
  }
}

.menu-list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    border-bottom: 1px solid $lightbrown;
    width: 64px;
    margin: 25px 0 0 0;
    opacity: 0.5;
  }
}

.menu-list-link {
  color: white;
  text-decoration: none;
  font-size: 40px;
}
</style>
