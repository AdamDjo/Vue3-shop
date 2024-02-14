<template>
  <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/shop"
      >Shopping Bag ( {{ productsInShop.length }} )</router-link
    >
    -
    <router-link to="/whishlist"
      >Whishlist ( {{ whishlistInShop.length }} )</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  created() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadShop");
    this.$store.dispatch("loadWhishlist");
  },
  computed: {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;

  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
