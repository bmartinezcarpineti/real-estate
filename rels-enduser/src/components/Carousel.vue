<script>
const unitedAPI = import.meta.env.VITE_API_URL;
let photos;

export default {
    name: 'Carousel',
    props: ['propId', 'propStatus', 'propPrice', 'isInCard'],
    data(){
        this.getPropertyPhotos(this.propId);
        return {
            photos
        }
    },
    methods: {
        async getPropertyPhotos(propId){
            const response = await fetch(`${unitedAPI}/properties/photos/${propId}`);
            this.photos = await response.json();
        }
    }
}
</script>



<template>
<div :id="`carousel${propId}`" class="carousel slide" data-bs-interval="false">
    <div class="carousel-inner">
        <div class="carousel-item" v-for="(photo, index) in photos" :key="photo.id" :class="{ 'active': index === 0 }">
            <img :src="`${photo.path}`" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
<div class="sale-rent-label" v-if="isInCard">for {{propStatus}}</div>
<div class="price-label" v-if="isInCard">$ {{propPrice}}</div>
</template>



<style>
.sale-rent-label {
    background-color: #29852A;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    padding: 4px 8px;
    position: absolute;
    left: 12px;
    top: 12px;
    text-transform: uppercase;
}

.price-label {
    background-color: #29852A;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    padding: 4px 8px;
    position: absolute;
    right: 12px;
    top: 12px;
    text-transform: uppercase;
}
</style>