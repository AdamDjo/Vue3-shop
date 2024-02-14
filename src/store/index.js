import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productsInShop: [],
    whishList: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadShop(state, products) {
      state.productsInShop = products;
    },
    loadWhishlist(state, products) {
      state.whishList = products;
    },
    addToShop(state, product) {
      state.productsInShop.push(product);
      localStorage.setItem(
        "productsInShop",
        JSON.stringify(state.productsInShop)
      );
    },
    addToWhishlist(state, product) {
      state.whishList.push(product);
      localStorage.setItem(
        "productsInWhishlist",
        JSON.stringify(state.whishList)
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
    removeFromWhishlist(state, productId) {
      const updatedWhishlist = state.whishList.filter(
        (item) => item.id != productId
      );
      state.whishList = updatedWhishlist;
      localStorage.setItem(
        "productsInWhishlist",
        JSON.stringify(state.whishList)
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
    loadWhishlist({ commit }) {
      if (localStorage.getItem("productsInWhishlist")) {
        commit(
          "loadWhishlist",
          JSON.parse(localStorage.getItem("productsInWhishlist"))
        );
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
    removeWishlist({ commit }, productId) {
      commit("removeFromWhishlist", productId);
    },
    addToWhishlist({ commit }, product) {
      commit("addToWhishlist", product);
    },
  },
  modules: {},
});
