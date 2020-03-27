<template>
  <div class="profile">
    <Header />
    <Register v-if="newCustomer" />
    <History v-else />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Register from "@/components/Register";
import History from "@/components/History";

export default {
  components: {
    Header,
    Register,
    History
  },
  data: () => ({
    newCustomer: false,
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
