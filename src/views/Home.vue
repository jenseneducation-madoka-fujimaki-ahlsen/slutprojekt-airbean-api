<template>
  <div class="home">
    <div class="home-wrap">
      <div class="left">
        <img
          class="left__img"
          src="@/assets/graphics/intro-graphic-left.svg"
          alt=""
        />
      </div>

      <div class="center">
        <img
          class="center__img"
          src="@/assets/graphics/airbean-landing.svg"
          alt=""
        />
      </div>

      <div class="right">
        <img
          class="right__img"
          src="@/assets/graphics/intro-graphic-right.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss">
$green: rgb(63, 117, 103);

.home {
  height: 100vh;
  width: 75vh;
  margin: auto;
}
.home-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $green;
  height: 100%;
  padding: 0px;
  margin: 0px;

  .left {
    display: flex;
    justify-content: flex-start;
    margin-left: 0px;

    &__img {
      width: 150px;
      height: 100vh;
      margin-top: 0;
      margin-left: 0px;
      padding-left: 0px;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;

    &__img {
      width: 150px;
      height: 100vh;
      margin-top: 0;
      margin-right: 0;
      padding-right: 0;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      width: 200px;
      height: 200px;
      margin-top: 0;
      margin-right: 0;
    }
  }
}
</style>
