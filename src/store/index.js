import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productsInShop: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadShop(state, products) {
      state.productsInShop = products;
    },
    addToShop(state, product) {
      state.productsInShop.push(product);
      localStorage.setItem(
        "productsInShop",
        JSON.stringify(state.productsInShop)
      );
    },
    removeFromShop(state, productId) {
      const updatedShop = state.productsInShop.filter(
        (item) => productId !== item.id
      );
      state.productsInShop = updatedShop;
      localStorage.setItem(
        "productsInShop",
        JSON.stringify(state.productsInShop)
      );
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },
    loadShop({ commit }) {
      if (localStorage.getItem("productsInShop")) {
        commit("loadShop", JSON.parse(localStorage.getItem("productsInShop")));
      }
    },

    addToShop({ commit }, product) {
      commit("addToShop", product);
    },
    removeFromShop({ commit }, productId) {
      if (confirm("Are you sure you want to remove the item from shop?")) {
        commit("removeFromShop", productId);
      }
    },
  },
  modules: {},
});
