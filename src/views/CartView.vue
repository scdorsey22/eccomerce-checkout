<!-- src/views/CartView.vue -->
<template>
  <div>
    <h1>Your Cart</h1>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.quantity }} - ${{ (item.price * item.quantity).toFixed(2) }}
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ cartTotal.toFixed(2) }}</p>
    <button @click="goToCheckout">Checkout</button>
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
    goToCheckout() {
      this.$router.push("/checkout");
    },
  },
};
</script>
