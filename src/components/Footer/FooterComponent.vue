<template>
  <footer class="footerComponent">
    <div class="footer">
      <article class="footer__section">
        <h5 class="footer__title">FIND A STORE</h5>
        <h5 class="footer__title">BECOME A MEMBER</h5>
        <h5 class="footer__title">SIGN UP FOR EMAIL</h5>
        <h5 class="footer__title">SNEAKERS CLUB MEMBERS</h5>
      </article>

      <article class="footer__section">
        <h5 class="footer__title">GET HELP</h5>
        <a class="footer__link">Order Status</a>
        <a class="footer__link">Delivery</a>
        <a class="footer__link">Returns</a>
        <a class="footer__link">Payments</a>
      </article>

      <article class="footer__section footer__section--mobile">
        <h5 class="footer__title">WE ARE SNEAKERS</h5>
        <a class="footer__link">about Sneakers</a>
        <a class="footer__link">contact</a>
        <a class="footer__link">work with us</a>
      </article>

      <article class="footer__section social"></article>
    </div>

    <article class="footer__footer">
      <div class="footer__gps">
        <p>France</p>
        <p>© 2023 Sneakers</p>
      </div>

      <div class="footer__privacy">
        <a>Guides</a>
        <a>Cookies Policy</a>
        <a>Terms of use</a>
        <a>Privacy Policy</a>
      </div>
    </article>
  </footer>
</template>

<style lang="scss">
@import "./scss/FooterComponent.scss";
</style>

<script>
export default {
  name: "FooterComponent",
};
</script>
