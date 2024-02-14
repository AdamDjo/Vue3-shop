<template>
  <div class="basket">
    <div class="items">
      <template v-if="productsInShop.length >= 1">
        <div class="item" v-for="product in productsInShop" :key="product.id">
          <div class="remove" @click="removeProductFromShop(product.id)">
            Remove item
          </div>
          <div class="photo">
            <img :src="product.image" alt="" />
          </div>
          <div class="description">{{ product.title }}</div>
          <div class="price">
            <span class="quantity-area">
              <button
                :disabled="product.quantity <= 1"
                @click="
                  {
                    {
                      product.quantity--;
                    }
                  }
                "
              >
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button
                @click="
                  {
                    {
                      product.quantity++;
                    }
                  }
                "
              >
                +
              </button>
            </span>
            <span class="amount"
              >{{ (product.price * product.quantity).toFixed(2) }}$</span
            >
          </div>
        </div>
        <div class="grand-total">Grand Total: US$ {{ orderTotal() }}</div>
      </template>
      <template v-else>
        <h4>No item on bag</h4>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingBasket",

  methods: {
    removeProductFromShop(productId) {
      this.$store.dispatch("removeFromShop", productId);
    },
    orderTotal() {
      let total = 0;
      this.productsInShop.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total.toFixed(2);
    },
  },
  computed: {
    productsInShop() {
      return this.$store.state.productsInShop;
    },
  },
};
</script>
<style lang="scss">
@import "./sass/shoppingPage.scss";
</style>
