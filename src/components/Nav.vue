<template>
  <div class="nav-menu-wrap">
    <div class="nav-menu-wrap__bg" v-show="active"></div>
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
          <li><router-link class="menu-list" to="/menu">Meny</router-link></li>
          <li>
            <router-link class="menu-list" to="/our-coffee"
              >Vårt kaffe</router-link
            >
          </li>
          <li>
            <router-link class="menu-list" to="/orderstatus"
              >Orderstatus</router-link
            >
          </li>
          <!-- <li><a href="#">Meny</a></li>
          <li><a href="#">Vårt kaffe</a></li>
          <li><a href="#">Orderstatus</a></li> -->
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
.nav-menu-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  &__bg {
    width: 100%;
    height: 100%;
    background-color: #2f2926;
    position: absolute;
  }
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
  border: 1px solid black;
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
  margin: 35px 0;
}

.menu-list {
  color: white;
  text-decoration: none;
  font-size: 40px;
}
</style>
