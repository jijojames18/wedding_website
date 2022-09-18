<script setup lang="ts"></script>

<template>
  <nav class="nav" role="navigation">
    <div class="container">
      <div class="row">
        <div class="col-xs-2">
          <div class="nav-logo">
            <a href="index.html">Wedding</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 40px 0;
  z-index: 2;

  .nav-logo {
    font-size: 40px;
    margin: 0;
    padding: 0;
    line-height: 40px;
    font-family: "Sacramento", Arial, serif;

    a {
      padding: 5px 10px;
      color: #fff;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .nav {
    padding: 20px 0;
  }
}
</style>
