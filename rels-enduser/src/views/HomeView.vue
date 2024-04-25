<script>
const unitedAPI = import.meta.env.VITE_API_URL;

export default {
  data(){
    this.getLatestProperties();
    return {
      properties: []
    }
  },
  methods: {
    async getLatestProperties(){
      const response = await fetch(`${unitedAPI}/properties/latest`);
      this.properties = await response.json();
    },
  }
}
</script>



<template>
  <div class="container">
    
    <div class="row mt-5">
      <div align="center" class="col-md-12 subtitle"> Latest Properties </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4" v-for="property in properties" :key="property.id"> 
        <PropertyCard 
          :propId="`${property.id}`" 
          :propStatus="`${property.sale_rent}`" 
          :propType="`${property.type}`" 
          :propAddress="`${property.address}`" 
          :propArea="`${property.area}`" 
          :propPrice="`${property.price}`" 
          :propBeds="`${property.beds}`" 
          :propRooms="`${property.rooms}`" 
          :propBaths="`${property.baths}`" 
          :propCity="`${property.city_id}`" /> 
      </div>
    </div>

    <div class="row mt-5">
      <div align="center" class="col-md-12 subtitle"> Popular Cities </div>
    </div>

    <div class="row m-3">
      <div class="col-md-4"> <CityCard cityName="Los Angeles" cityImage="https://i.ibb.co/1Xpppfk/la.jpg"/> </div>
      <div class="col-md-4"> <CityCard cityName="New York" cityImage="https://i.ibb.co/7bDDxCC/nyc.jpg"/> </div>
      <div class="col-md-4"> <CityCard cityName="Buenos Aires" cityImage="https://i.ibb.co/pwFK0jq/ba.jpg"/> </div>
    </div>

  </div>
</template>



<style>
.subtitle{
  font-size: 40px;
}
</style>
