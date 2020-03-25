
 <template>
  <div class="home">
    <img class="left-img" src="@/assets/graphics/intro-graphic-left.svg" alt />
    <router-link class="center" to="/Menu">
      <img class="center-img" src="@/assets/graphics/airbean-landing.svg" alt />
    </router-link>
    <img class="right-img" src="@/assets/graphics/intro-graphic-right.svg" alt />
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
@import "../scss/main";

.home {
  height: 100%;
  background-color: $green;
  z-index: 999;
  margin: auto;
  display: grid;
  position: fixed;
  width: 100%;
  grid-template-columns: 46% 8% 46%;
  grid-template-areas: "left-img center-img right-img";
}

.left-img {
  width: 100%;
  height: 100%;
  grid-area: left-img;
  object-fit: cover;
  margin-left: 0px;
  margin-top: 0px;
}

.right-img {
  width: 100%;
  height: 100%;
  grid-area: right-img;
  object-fit: cover;
  margin-top: 0px;
  margin-right: 0px;
}
.center-img {
  grid-area: center-img;
  width: 300px;
  height: 150px;
  align-self: center;
  justify-self: center;
  margin-top: 300px;
  margin-left: -135px;
}
</style>
