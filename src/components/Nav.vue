<template>
  <div class="nav-menu" :class="{ 'nav-menu-open': active }">
    <div class="nav-menu__bg" v-show="active"></div>
    <div
      @click="NavMenuOpen"
      class="hamburger-menu-wrap"
      :class="{ 'is-active': active }"
      v-show="!active"
    >
      <img src="@/assets/graphics/navicon.svg" alt="" />
      <div class="navicon-bg"></div>
    </div>

    <div
      @click="NavMenuClose"
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
          <li @click="NavMenuClose">
            <router-link class="menu-list" to="/menu">Meny </router-link>
            <div class="line"></div>
          </li>

          <li @click="NavMenuClose">
            <router-link class="menu-list" to="/our-coffee"
              >Vårt kaffe
            </router-link>
            <div class="line"></div>
          </li>

          <li @click="NavMenuClose">
            <router-link class="menu-list" to="/orderstatus"
              >Orderstatus</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    nav: false
  }),
  methods: {
    NavMenuOpen() {
      this.active = !this.active;
      this.nav = !this.nav;
    },
    NavMenuClose() {
      this.active = false;
      this.nav = false;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.nav-menu {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 0;
  z-index: 9999;

  &__bg {
    width: 100vh;
    height: 100vh;
    background-color: $brown;
    position: absolute;
  }
}

.nav-menu-open {
  width: 100%;
  height: 100%;
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
  }
}

li {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    border-bottom: 1px solid $light-brown;
    width: 64px;
    margin: 20px 0 0 0;
    opacity: 0.5;
  }
}

.menu-list {
  color: white;
  text-decoration: none;
  font-size: 40px;
}
</style>
