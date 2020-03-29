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
    newCustomer: true,
    bigText: "Vällkommen till AirBean-familjen!",
    smallText:
      "Genom att skapa ett konto nedan kan du spara och se din orderhistorik."
  }),

  created() {
    let name = localStorage.getItem("LogInName");
    let epost = localStorage.getItem("LogInEpost");
    if (name && epost) {
      this.newCustomer = false; //visar History sidan
    }
  }
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
