<template>
  <header class="nav nav-mobile nav--active">
    <!--start nav-->
    <div class="nav__desktop nav__desktop--active">
      <!--nav__desktop-->
      <div class="nav__logo nav__logo-desktop">
        <router-link to="/">
          <v-icon
            name="co-home"
            fill="#69707D"
            scale="1.5"
            class="avatar__Icon"
          />
        </router-link>
      </div>

      <nav class="nav__links">
        <router-link to="/Collections" class="nav__link nav__link--noSpace"
          >Collections</router-link
        >
        <router-link to="/Men" class="nav__link">Men</router-link>
        <router-link to="/Women" class="nav__link">Women</router-link>
        <router-link to="/" class="nav__link">About</router-link>
        <router-link to="/" class="nav__link">Contact</router-link>
      </nav>

      <div class="nav__cart nav__cart--desktop">
        <router-link
          to="/shop"
          class="nav__cartShopping nav__cartShopping--desktop"
        >
          <v-icon
            name="la-shopping-cart-solid"
            fill="#69707D"
            scale="1.5"
            class="card__Icon"
          />
          <span class="nav__cartNumber nav__cartNumber--desktop">
            {{ numProductsInShop }}</span
          >
        </router-link>

        <div class="avatar__icon">
          <router-link
            to="/whishlist"
            class="nav__cartShopping nav__cartShopping--desktop"
          >
            <v-icon
              name="fc-like-placeholder"
              fill="#69707D"
              scale="1.5"
              class="whishlist__icon"
            />
            <span class="nav__cartNumber nav__cartNumber--desktop">
              {{ numProductsInWhishlit }}</span
            >
          </router-link>
        </div>
      </div>
    </div>
    <!--end nav__desktop-->

    <!--nav__mobile-->
    <div class="nav__mobile">
      <div class="nav__container">
        <div class="nav__mobileContainer">
          <div
            :class="showMenu ? 'hambu hambu--active' : 'hambu'"
            @click="toggleMenu"
          ></div>

          <div class="nav__mobileLinksContainer" v-if="showMenu">
            <div class="nav__mobileLinks">
              <nav class="nav__linksMobile">
                <router-link to="/Collections" class="nav__linkMobile"
                  >Collections</router-link
                >
                <router-link to="/Men" class="nav__linkMobile">Men</router-link>
                <router-link to="/Women" class="nav__linkMobile"
                  >Women</router-link
                >
                <router-link to="/" class="nav__linkMobile">About</router-link>
                <router-link to="/" class="nav__linkMobile"
                  >Contact</router-link
                >
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--end nav__mobile-->

      <div class="nav__logo nav__logo--mobile">
        <router-link to="/">
          <v-icon
            name="co-home"
            fill="#69707D"
            scale="1.5"
            class="avatar__Icon"
          />
        </router-link>
      </div>

      <div class="nav__cart">
        <router-link to="/shop" class="nav__cartShopping">
          <v-icon
            name="la-shopping-cart-solid"
            fill="#69707D"
            scale="1.5"
            class="card__Icon"
          />
          <span class="nav__cartNumber"> {{ numProductsInShop }}</span>
        </router-link>

        <router-link to="/whishlist" class="nav__cartShopping">
          <v-icon
            name="fc-like-placeholder"
            fill="#69707D"
            scale="1.5"
            class="whishlist__icon"
          />
          <span class="nav__cartNumber"> {{ numProductsInWhishlit }}</span>
        </router-link>
      </div>
    </div>
    <!-- end nav__mobile
    <Transition name="fade">
      <section class="auth">transition</section>
    </Transition> -->
  </header>
  <!--end nav-->
</template>
<style lang="scss">
@import "./scss/Navbar.scss";
</style>
<script>
export default {
  name: "HeaderComponent",
  props: ["numProductsInShop", "numProductsInWhishlit"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    //mobile menu
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
