<template>

<footer class="mt-5">
  <div class="text-center p-4 footer-style">
    <div class="row">
      <div class="col-md-12">
        © 2022 Copyright: <a class="united-link" href="#">UNITED Real Estate Company.</a>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-12">
        Made with the best web technology <b>;</b>) <img src="@/assets/icons/vue.ico" alt="...">
      </div>
    </div>
  </div>
</footer>

</template>


<script>
export default {
    name: 'Footer',
}
</script>


<style>
.footer-style{
  font-family: 'Nunito';
  font-size: 20px;
  background: rgb(41, 41, 41);
}

.united-link{
    color: white !important;
    font-weight: bold;
}
</style>