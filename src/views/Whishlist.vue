<template>
  <div class="whishlist">
    <div class="items">
      <template v-if="productsInWhishlist.length >= 1">
        <div
          class="item"
          v-for="product in productsInWhishlist"
          :key="product.id"
        >
          <div class="photo">
            <img :src="product.image" alt="" />
          </div>
          <div class="description">{{ product.title }}</div>
          <div
            class="add"
            v-if="!isInShop(product)"
            @click="addToShop(product)"
          >
            Add to bag item
          </div>
          <div class="add" v-else>
            <router-link to="/shop">Go to shop</router-link>
          </div>
          <div class="remove" @click="removeFromWhishlist(product.id)">
            Remove item
          </div>
        </div>
      </template>
      <template v-else>
        <h4>No item on whishlist</h4>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "whishlistPage",
  methods: {
    addToShop(product) {
      product.quantity = 1;
      this.$store.dispatch("addToShop", product);
    },
    removeFromWhishlist(productId) {
      this.$store.dispatch("removeWishlist", productId);
    },
    isInShop(product) {
      return this.productsInShop.find((element) => element.id === product.id);
    },
  },
  computed: {
    productsInWhishlist() {
      return this.$store.state.whishList;
    },
    productsInShop() {
      return this.$store.state.productsInShop;
    },
  },
};
</script>
<style lang="scss">
.whishlist {
  padding: 60px 0;
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove,
      .add {
        display: flex;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .photo {
        img {
          width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        width: 50%;
      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
