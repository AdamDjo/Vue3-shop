<template>
  <main class="product">
    <div v-if="loading">Chargement en cours...</div>
    <section class="product__view">
      <div class="product__photo">
        <img :src="product.image" alt="" />
      </div>
      <div class="product__info">
        <div class="title">{{ product.title }}</div>
        <div class="description">Description : {{ product.description }}</div>
        <div class="price">Price : {{ product.price }}</div>
        <!-- <div class="rating">Rating : {{ product.rating.rate }}</div> -->
      </div>
    </section>
    <section class="product__comments">
      <ul class="comments-list">
        <li
          v-for="(comment, index) in product.comments"
          :key="index"
          class="comment-item"
        >
          <div class="comment-user">{{ comment.user }}</div>
          <div class="comment-text">{{ comment.text }}</div>
        </li>
      </ul>
      <div class="add-comment">
        <textarea placeholder="Write your comment here"></textarea>
        <button>Submit</button>
      </div>
    </section>
  </main>
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
    loading() {
      return this.$store.state.isFetching;
    },
    products() {
      return this.$store.state.shoesData;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == id);
  },
};
</script>

<style lang="scss">
@import "./sass/ProductPage.scss";
</style>
