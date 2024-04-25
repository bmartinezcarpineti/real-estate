<script>
export default {
    name: 'CityCard',
    props: ['cityName','cityImage'],
}
</script>



<template>
<div class="card mt-2">
    <div class="card-body">
        <img :src="`${cityImage}`" alt="..." class="city-img">
        <div align="center" class="centered city-data">{{cityName}}</div>
    </div>
</div>
</template>



<style>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.city-img {
    opacity: 0.45;
    max-height: 100%;
    max-width: 100%;
}

.city-data {
    padding: 5px;
    font-weight: 1000;
    text-transform: uppercase;
    font-size: 22px;
}
</style>