<template>
  <div class="status">
    <div class="status-wrap">
      <div class="ordernumber">
        <p>Ordernummer{{ order.orderNumber }}</p>
        <p></p>
      </div>

      <div class="drone">
        <img class="drone__img" src="@/assets/graphics/drone.svg" alt />
      </div>
      <div class="order">
        <h1>Din beställning är på väg!</h1>
        <p>{{ order.eta }} minuter</p>
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
    }
  },
  mounted() {
    this.$store.dispatch("order");
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.status {
  height: 100%;
}
.status-wrap {
  margin-bottom: -80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: $orange;
  min-height: 100%;
  margin: 0;

  .ordernumber {
    margin-top: 80px;
    text-align: center;
    color: rgb(221, 201, 163);
  }

  .drone {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;

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
    // width: 7rem;
    // height: 2rem;
    // border-radius: 99rem;
    // appearance: none;
    // border: none;
    // font-size: 1rem;
    // border-radius: 99rem;
    // margin: 1rem 0;
    // font-weight: bold;
    // margin: auto;
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
    margin-top: 150px;
    color: white;
    padding-right: 30px;
    padding-left: 30px;
    text-align: center;
  }

  h1 {
    font-size: 35px;
    font-style: PT Serif;
  }
}
</style>
