<template>
  <footer class="footer">
    <div class="container">
      <div class="row copyright">
        <div class="col-md-12 text-center">
          <p>
            <small class="block">
              Designed by
              <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a>
            </small>
            <small class="block"> Developed by Jijo James </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.footer {
  background-image: url(@/assets/bg_footer.jpg);
  padding: $padding-footer;
  clear: both;
  .block {
    display: block;
  }
}
</style>
