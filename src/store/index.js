// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || []
  },
  mutations: {
    addToCart(state, product) {
      const itemIndex = state.cart.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      const itemIndex = state.cart.findIndex(item => item.id === productId);
      if (itemIndex >= 0) {
        state.cart.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    }
  }
});
