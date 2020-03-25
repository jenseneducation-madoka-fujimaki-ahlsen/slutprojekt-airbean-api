<template>
  <div class="profile">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.profile {
  background-color: $brown;
  height: 100%;
}
</style>
