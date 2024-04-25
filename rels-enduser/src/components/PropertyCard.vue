<script>
const unitedAPI = import.meta.env.VITE_API_URL;

export default {
    name: 'PropertyCard',
    props: ['propId', 'propStatus', 'propType', 'propAddress', 'propArea', 
            'propPrice', 'propBeds', 'propRooms', 'propBaths', 'propCity'],
    data(){
      this.getCity(this.propCity);
      return {
        city: 0
      }
    },
    methods: {
      async getCity(propCity){
        const response = await fetch(`${unitedAPI}/cities/${propCity}`);
        this.city = await response.json();
      }
    }
}
</script>



<template>
<RouterLink :to="`/property/${propId}`">
<div class="card mb-3 rounded-0">

  <Carousel 
    :propId="`${propId}`"
    :propStatus="`${propStatus}`" 
    :propPrice="`${propPrice}`"
    :isInCard="true" />

  <div class="card-body">
    <div class="row justify-content-left mt-4">
      <div class="col-md-6"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> {{propArea}} mt2</div>
      <div class="col-md-6"><img src="@/assets/icons/room1.png" alt="..."> {{propRooms}} Rooms</div>
    </div>
    <div class="row justify-content-left">
      <div class="col-md-6"><img src="@/assets/icons/bed1.png" alt="..."> {{propBeds}} Bedrooms</div>
      <div class="col-md-6"><img src="@/assets/icons/bath1.png" alt="..."> {{propBaths}} Baths</div>
    </div>
    <div class="row justify-content-left mt-4">
      <div class="col-md-12"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> {{propAddress}}</div>
    </div>
    <div class="row justify-content-left mt-2">
      <div class="col-md-12"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> {{city.name}}, {{city.state}}, {{city.country_code}}</div>
    </div>
  </div>
  
</div>
</RouterLink>
</template>



<style>
.card-body{
  font-size: 20px;
  color: white;
}

#area-icon{
  max-width: 35px;
}

#address-icon{
  max-width: 30px;
}

#city-icon{
  max-width: 30px;
}
</style>