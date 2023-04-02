<!-- src/components/CoffeeProduct.vue -->
<template>
  <div class="coffee-product">
    <div>
      <h3>{{ product.name }}</h3>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.description }}</p>
      <p>${{ product.price.toFixed(2) }}</p>
    </div>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.product);
    },
  },
};
</script>

<style scoped>
.coffee-product {
  /* Add your styles here */
}
</style>
