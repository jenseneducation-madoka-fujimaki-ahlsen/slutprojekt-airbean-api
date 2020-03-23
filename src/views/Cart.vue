<template>
  <div class="cart">
    <p>{{total}} kr</p>
      
  </div>
</template>

<script>
export default {
  computed: { 
    shoppingCart() {
        return this.$store.state.cart
    },
    totalAmount () {
        return this.$store.getters.total
    }
}
};
</script>

<style></style>
