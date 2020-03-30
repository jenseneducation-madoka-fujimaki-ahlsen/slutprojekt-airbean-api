<template>
  <div class="status">
    <div class="status-wrap">
      <div class="ordernumber" v-if="!loading">
        <p>Ordernummer {{ order.orderNumber }}</p>
        <p></p>
      </div>
      <div class="drone" v-if="!loading">
        <img class="drone__img" src="@/assets/graphics/drone.svg" alt />
      </div>
      <div class="order" v-if="!loading">
        <h1>Din beställning är på väg!</h1>
        <p>{{ order.eta }} minuter</p>
      </div>
      <div class="loading-icon" v-if="loading">
        <img src="@/assets/graphics/loader.png" alt="" />
        <p class="text">Ditt kaffe bryggs...</p>
      </div>
      <router-link type="submit" class="submit" to="/menu"
        >Ok, cool!</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderStatus",
  computed: {
    order() {
      return this.$store.state.order;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "../scss/main";
.status {
  height: 100%;
}
.status-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: $orange;
  min-height: 100%;
  margin: 0;
  .loading-icon {
    margin: 200px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: $white;
      margin-top: 20px;
      text-align: center;
    }
  }
  .ordernumber {
    margin-top: 80px;
    text-align: center;
    color: rgb(221, 201, 163);
  }
  .drone {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 50px;
    &__img {
      width: 180px;
      height: 100px;
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      animation: bound-y 0.5s ease-in-out infinite alternate-reverse;
    }
    @keyframes bound-y {
      0% {
        bottom: -10px;
      }
      100% {
        bottom: 10px;
      }
    }
  }
  .submit {
    background: $white;
    color: $black;
    margin: 60px auto 30px;
    width: 80%;
    height: 56px;
    font-size: 24px;
    border-radius: 50px;
    text-align: center;
    width: 50%;
    text-decoration: none;
    padding: 6px;
    &:focus {
      outline: none;
    }
    &:active {
      background: lightGrey;
    }
  }
  .order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: white;
    padding-right: 30px;
    padding-left: 30px;
    text-align: center;
    h1 {
      line-height: 50px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
  }
  h1 {
    font-size: 35px;
  }
}
</style>