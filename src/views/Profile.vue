<template>
  <div class="profile">
    <Header />
    <Register />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Register from "@/components/Register";

export default {
  components: {
    Header,
    Register
  },
  data: () => ({
    bigText: "Vällkommen till AirBean-familjen!",
    smallText:
      "Genom att skapa ett konto nedan kan du spara och se din orderhistorik."
  })
};
</script>

<style lang="scss">
@import "../scss/main";

.profile {
  background-color: $brown;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
