<template>
  <Header
    :numProductsInShop="productsInShop.length"
    :numProductsInWhishlit="whishlistInShop.length"
  ></Header>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/shop"
      >Shopping Bag ( {{ productsInShop.length }} )</router-link
    >
    -
    <router-link to="/whishlist"
      >Whishlist ( {{ whishlistInShop.length }} )</router-link
    >
  </div> -->
  <div v-if="loading">Chargement en cours...</div>

  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import Header from "@/components/Header/Navbar.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
    Header,
  },
  created() {
    this.$store.dispatch("loadShop");
    this.$store.dispatch("loadWhishlist");
    this.$store.dispatch("getShoesData", { page: 1 });
  },
  computed: {
    loading() {
      return this.$store.state.isFetching;
    },
    productsInShop() {
      return this.$store.state.productsInShop;
    },
    whishlistInShop() {
      return this.$store.state.whishList;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/global";
</style>
