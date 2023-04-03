<!-- src/App.vue -->
<template>
  <div id="app">
    <cart-icon></cart-icon>
    <h1>Coffee Shop</h1>
    <div class="coffee-products">
      <coffee-product v-for="(product, index) in products" :key="index" :product="product"></coffee-product>
    </div>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import CartIcon from './components/CartIcon.vue';
import CoffeeProduct from "./components/CoffeeProduct.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    CartIcon,
    CoffeeProduct,
    ShoppingCart,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Coffee Product 1",
          description: "A delicious coffee blend.",
          price: 9.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Coffee Product 2",
          description: "An amazing coffee blend.",
          price: 11.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Coffee Product 3",
          description: "A superb coffee blend.",
          price: 12.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Coffee Product 4",
          description: "An excellent coffee blend.",
          price: 14.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          name: "Coffee Product 5",
          description: "A fantastic coffee blend.",
          price: 16.99,
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.coffee-products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}
</style>
