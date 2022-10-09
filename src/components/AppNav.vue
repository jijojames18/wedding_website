<template>
  <nav class="nav" role="navigation">
    <div class="container">
      <div class="row">
        <div class="col-xs-2">
          <div class="nav-logo">
            <a href="#">Wedding</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.nav {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: $padding-logo;
  z-index: 2;

  .nav-logo {
    font-size: $size-logo;
    margin: 0;
    padding: 0;
    line-height: $size-logo;
    font-family: $font-sacramento;

    a {
      padding: $link-padding;
      color: $link-color;
      text-decoration: none;
    }
  }
}
</style>
