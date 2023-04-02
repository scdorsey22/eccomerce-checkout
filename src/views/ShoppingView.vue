<!-- src/views/ShoppingView.vue -->
<template>
  <div>
    <h1>Coffee Shop</h1>
    <div class="coffee-products">
      <coffee-product v-for="(product, index) in products" :key="index" :product="product"></coffee-product>
    </div>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import CoffeeProduct from "../components/CoffeeProduct.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  name: "ShoppingView",
  components: {
    CoffeeProduct,
    ShoppingCart,
  },
  data() {
    return {
      products: [
        /* Your hardcoded coffee products go here */
      ],
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
