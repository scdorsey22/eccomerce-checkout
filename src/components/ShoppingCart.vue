<!-- src/components/ShoppingCart.vue -->
<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.quantity }} - ${{ (item.price * item.quantity).toFixed(2) }}
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ cartTotal.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cart;
    },
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch("removeFromCart", productId);
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  /* Add your styles here */
}
</style>
