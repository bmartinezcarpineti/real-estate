<script>
const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const unitedAPI = import.meta.env.VITE_API_URL;

let propLocation;
let propLocationQuery;
let nominatimAPI;
let property;
let id;
let latitude;
let longitude;

let getCoords = async (propAddress, propCity) => {

  propLocation = `${propAddress} ${propCity}`;
  propLocationQuery = propLocation.replace(/ /g, '+');
  nominatimAPI = `https://nominatim.openstreetmap.org/search?q=${propLocationQuery}&format=json`;
  console.log(nominatimAPI);

  const response = await fetch(nominatimAPI);
  let coords = await response.json();

  latitude = coords[0].lat;
  longitude = coords[0].lon;
};

let setMap = async (propAddress, propCity) => {

  await getCoords(propAddress, propCity);

  let map = L.map('map').setView([latitude, longitude], 13);

  L.tileLayer(tilesProvider,{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 30
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map);
}

export default {
    name: 'PropertyView',
    data() {
      id = this.$route.params.id
      this.getProperty(id);
      return {
        id,
        property
      }
    },
    mounted () {
      setMap(this.property.address, this.property.city_name);
    },
    methods: {
      async getProperty(id){
        const response = await fetch(`${unitedAPI}/properties/${id}`);
        this.property = await response.json();
      }
    }
}
</script>



<template>
  <div class="container property-view mt-5 p-5">

    <div class="row">

        <!-- left column (info) -->
        <div class="col-md-6">
            
            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> {{property.area}} mt2</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/room1.png" alt="..."> {{property.rooms}} Rooms</div></div>
            </div>

            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bed1.png" alt="..."> {{property.beds}} Beds</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bath1.png" alt="..."> {{property.baths}} Baths</div></div>
            </div>

            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> {{property.address}}</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> {{property.city_name}}, {{property.city_state}}, {{property.country_code}}</div></div>
            </div>

        </div>

        <!-- right column (photos) -->
        <div class="col-md-6 mt-4">
            <div class="row mt-2">
                <Carousel :propId="`${id}`" />
            </div>
        </div>

    </div>

    <!-- type, status and price -->
    <div class="row justify-content-around mt-5">
        <div class="col-md-4 text-center mt-2 status-price">{{property.type}} for {{property.sale_rent}}</div>
        <div class="col-md-3 text-center mt-2 status-price">$ {{property.price}}</div>
    </div>

    <!-- description -->
    <div class="row mt-5 justify-content-center">
        <div class="col-md-10">
          <p>{{property.description}}</p>
        </div>
    </div>

    <!-- map -->
    <div class="row justify-content-center">
        <div class="col-md-6 mt-5" id="map" ref="mapElement"></div>
    </div>

</div>
</template>



<style>
p{
  text-align: justify;
}

.property-view{
  background: #252525;
  font-size: 22px;
}

.prop-info{
  background: rgb(66, 66, 66);
  border-radius: 10px;
}

.status-price{
  font-size: 35px;
  color: white;
  background: #009007;
  font-weight: bold;
  border-radius: 10px;
}

#map{ 
  height: 400px;
  width: 1000px;
}

@media (max-width: 1400px) {
  #map {
    height: 300px;
    width: 850px;
  }
}

#area-icon{
  max-width: 35px;
}

#address-icon, #city-icon{
  max-width: 30px;
}

</style>