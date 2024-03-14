<template>
  <div class="home">
    <div class="products collections__container">
      <div
        v-for="product in shoesData"
        class="product collections__product"
        :class="{ inBag: isInShop(product) }"
        :key="product.id"
      >
        <div class="informations">
          <router-link :to="'/product/' + product.id" @click.prevent>
            <div
              class="product-image"
              :style="{ 'background-image': 'url(' + product.image + ')' }"
            ></div>
            <h4>{{ product.name }}</h4>
            <p class="price">{{ product.price }} $</p>
          </router-link>
        </div>

        <div class="buttons">
          <button
            v-if="!isInWhishlist(product)"
            @click="addToWhishlist(product)"
          >
            <v-icon
              name="bi-heart"
              fill="#69707D"
              scale="1.5"
              class="whishlist__icon"
            />
          </button>
          <button v-else @click="removeFromWhishlist(product.id)">
            <v-icon
              name="fc-like-placeholder"
              fill="#69707D"
              scale="1.5"
              class="whishlist__icon"
            />
          </button>
          <button v-if="!isInShop(product)" @click="addToShop(product)">
            <v-icon
              name="la-shopping-cart-solid"
              fill="#69707D"
              scale="1.5"
              class="card__Icon"
            />
          </button>

          <button v-else class="remove" @click="removeFromShop(product.id)">
            <v-icon
              name="md-removeshoppingcart-outlined"
              fill="#69707D"
              scale="1.5"
              class="card__Icon"
            />
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

    "productsInShop",
    "whishList",
    "shoesData",
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
