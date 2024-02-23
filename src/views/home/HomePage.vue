<template>
  <div class="home">
    <div class="products">
      <div
        v-for="product in products"
        class="product"
        :class="{ inBag: isInShop(product) }"
        :key="product.id"
      >
        <router-link :to="'/product/' + product.id" @click.prevent>
          <div class="informations">
            <div
              class="product-image"
              :style="{ 'background-image': 'url(' + product.image + ')' }"
            ></div>
            <h4>{{ product.title }}</h4>
            <p class="price">{{ product.price.toFixed(2) }} $</p>
          </div>
        </router-link>
        <div class="buttons">
          <button v-if="!isInShop(product)" @click="addToShop(product)">
            Add to bag
          </button>

          <button v-else class="remove" @click="removeFromShop(product.id)">
            Remove from shop
          </button>
          <button
            v-if="!isInWhishlist(product)"
            @click="addToWhishlist(product)"
          >
            Whishlist
          </button>
          <button v-else @click="removeFromWhishlist(product.id)">
            Remove whishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: mapState([
    // map this.count to store.state.count
    "products",
    "productsInShop",
    "whishList",
  ]),

  methods: {
    addToShop(product) {
      product.quantity = 1;
      this.$store.dispatch("addToShop", product);
    },
    addToWhishlist(product) {
      product.whishlist = true;
      this.$store.dispatch("addToWhishlist", product);
    },
    removeFromShop(productId) {
      this.$store.dispatch("removeFromShop", productId);
    },
    removeFromWhishlist(productId) {
      this.$store.dispatch("removeWishlist", productId);
    },
    isInShop(product) {
      return this.productsInShop.find((element) => element.id === product.id);
    },
    isInWhishlist(product) {
      return this.whishList.find((element) => element.id === product.id);
    },
  },
};
</script>

<style lang="scss">
@import "./sass/homePage.scss";
</style>
