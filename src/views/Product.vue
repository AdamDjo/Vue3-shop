<template>
  <div>
    <h1>Welcome to Product page</h1>
    <div class="title">{{ product.title }}</div>
    <div class="photo">
      <img :src="product.image" alt="" />
    </div>
    <div class="description">Description : {{ product.title }}</div>
    <div class="price">Price : {{ product.price }}</div>
    <div class="rating">Rating : {{ product.rating.rate }}</div>
  </div>
</template>
<script>
export default {
  name: "ProductPage",
  data() {
    return {
      product: {},
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == id);
  },
};
</script>
<style></style>
