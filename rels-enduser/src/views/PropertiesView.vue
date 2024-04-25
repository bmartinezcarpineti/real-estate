<script>
let unitedAPI = import.meta.env.VITE_API_URL;

const queryJson = {
	type: "*",
	sale_rent: "*",
	city_id: "*",
	min_area: "*",
	max_area: "*",
	min_price: "*",
	max_price: "*",
	min_beds: "*",
	max_beds: "*",
	min_rooms: "*",
	max_rooms: "*",
	min_baths: "*"
}

export default {
  data(){
    this.getProperties();
    this.getCounts();
    return {
      properties: [],
      propsCount: 0,
      citiesCount: 0
    }
  },
  mounted(){
    console.log(this.$route.data)
  },
  methods: {
    async getProperties(){
      const response = await fetch(`${unitedAPI}/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryJson)
      });

      this.properties = await response.json();
    },
    async getCounts(){
      const responseProps = await fetch(`${unitedAPI}/properties/count`);
      this.propsCount = await responseProps.json();

      const responseCities = await fetch(`${unitedAPI}/cities/count`);
      this.citiesCount = await responseCities.json();
    }
  }
}
</script>



<template>
  <div class="container">

    <div class="row mt-5">
      <div class="col-md-12 subtitle" align="center">{{propsCount.count}} properties in {{citiesCount.count}} cities</div>
    </div>

    <div class="row mt-5" v-if="properties.length">
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
    <div class="row mt-5" v-else>
        <div class="col-md-12 not-found">There are no properties yet.</div>
    </div>
    
  </div>
</template>



<style>
.subtitle{
  font-size: 40px;
}

.not-found{
    font-size: 40px;
}
</style>