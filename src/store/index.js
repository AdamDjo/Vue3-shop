import { createStore } from "vuex";

const URLBASE = process.env.VUE_APP_MY_ENV_VARIABLE;

export default createStore({
  state: {
    productsInShop: [],
    whishList: [],
    isFetching: false,
    shoesData: [],
  },
  mutations: {
    // get data
    updateShoesData(state, data) {
      state.shoesData = data;
    },
    setIsFetching(state, value) {
      state.isFetching = value;
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
    async getShoesData({ commit, state }, { page = 1 }) {
      // Vérifiez d'abord si les données sont déjà en cours de chargement
      if (state.isFetching) {
        return; // Ne rien faire si les données sont déjà en cours de chargement
      }

      commit("setIsFetching", true); // Marquez les données comme étant en cours de chargement

      try {
        const response = await fetch(`${URLBASE}shoes?page=${page}`);
        const data = await response.json();
        if (data) {
          commit("updateShoesData", data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        commit("setIsFetching", false); // Marquez les données comme ayant terminé le chargement, que ce soit avec succès ou en cas d'erreur
      }
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
