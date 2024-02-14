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
.home {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 8px;
      height: 360px;

      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }

      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }

      &.inBag {
        border: 1px solid #007bff;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .product-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      button {
        color: #fff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 100px;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
