<!-- src/components/CartIcon.vue -->
<template>
  <div class="cart-icon" @click="$router.push('/cart')">
    <img src="path/to/your/cart-icon-image" alt="Cart" />
    <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.cart-icon {
  position: relative;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
  color: white;
}
</style>
