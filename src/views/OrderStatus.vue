<template>
  <div class="status">
    <div class="status-wrap">
      <div class="ordernumber">
        <p>Ordernummer{{order.orderNr}}</p>
        <p></p>
      </div>

      <div class="drone">
        <img class="drone__img" src="@/assets/graphics/drone.svg" alt />
      </div>
      <div class="order">
        <h1>Din beställning är på väg!</h1>
        <p>{{order.eta}} minuter</p>
      </div>
      <button type="submit" class="submit">Ok, cool!</button>
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
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.status {
  height: 100vh;
}
.status-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: $orange;
  height: 100%;
  margin: 0px;

  .ordernumber {
    padding-top: 80px;

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
    }
  }
  .submit {
    width: 7rem;
    height: 2rem;
    border-radius: 99rem;
    appearance: none;
    border: none;
    background: $white;
    color: $black;
    font-size: 1rem;
    border-radius: 99rem;
    margin: 1rem 0;
    font-weight: bold;
    margin: auto;

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

