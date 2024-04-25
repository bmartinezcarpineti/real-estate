<script>
const unitedAPI = import.meta.env.VITE_API_URL;

export default {
    name: 'SearchView',
    data(){
        this.getCities()
        return {
            cities: [],
            city_id: 0,
            type: 0,
            status: 0,
            min_area: '',
            max_area: '',
            min_price: '',
            max_price: '',
            min_beds: '',
            max_beds: '',
            min_rooms: '',
            max_rooms: '',
            min_baths: '',
            searchHidden: false,
            propertiesHidden: true,
            queryJson: {
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
        }
    },
    methods: {
        async getCities(){
            const response = await fetch(`${unitedAPI}/cities`);
            this.cities = await response.json();
        },
        searchClick(){ //sets the form values in the json for the api fetch
            if(this.city_id != 0){
                this.queryJson.city_id = this.city_id;
            }
            if(this.type != 0){
                this.queryJson.type = this.type;
            }
            if(this.status != 0){
                this.queryJson.sale_rent = this.status;
            }
            if(this.min_area != '' && this.min_area != 0){
                this.queryJson.min_area = this.min_area;
            }
            if(this.max_area != '' && this.max_area != 0){
                this.queryJson.max_area = this.max_area;
            }
            if(this.min_price != '' && this.min_price != 0){
                this.queryJson.min_price = this.min_price;
            }
            if(this.max_price != '' && this.max_price != 0){
                this.queryJson.max_price = this.max_price;
            }
            if(this.min_beds != '' && this.min_beds != 0){
                this.queryJson.min_beds = this.min_beds;
            }
            if(this.max_beds != '' && this.max_beds != 0){
                this.queryJson.max_beds = this.max_beds;
            }
            if(this.min_rooms != '' && this.min_rooms != 0){
                this.queryJson.min_rooms = this.min_rooms;
            }
            if(this.max_rooms != '' && this.max_rooms != 0){
                this.queryJson.max_rooms = this.max_rooms;
            }
            if(this.min_baths != '' && this.min_baths != 0){
                this.queryJson.min_baths = this.min_baths;
            }
            this.searchHidden = true;
            this.getProperties();
        },
        async getProperties(){
            const response = await fetch(`${unitedAPI}/properties`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.queryJson)
            });

            this.properties = await response.json();
            this.propertiesHidden = false;
        },
        newSearchClick(){ //hides properties, shows search form and reset every variable
            this.propertiesHidden = true;
            this.searchHidden = false;
            this.city_id = 0,
            this.type = 0,
            this.status = 0,
            this.min_area = '',
            this.max_area = '',
            this.min_price = '',
            this.max_price = '',
            this.min_beds = '',
            this.max_beds = '',
            this.min_rooms = '',
            this.max_rooms = '',
            this.min_baths = '',
            this.searchHidden = false,
            this.propertiesHidden = true,
            this.queryJson = {
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
        }
    }
}
</script>



<template>

    <!-- search container -->
    <div class="container search-view mt-5 pt-5 pb-5" v-if="!searchHidden">

        <div class="row justify-content-center">
            <div align="center" class="col-md-5 search-title"><img id="search-icon" src="@/assets/icons/search1.png" alt="..."> Advanced Search</div>
        </div>

        <div class="form-group mt-5">

            <div class="row">
                <div class="col-md-2"></div>
                <!-- city filter -->
                <div class="col-md-4">
                    <label class="category mb-2" for="city"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> City</label>
                    <select name="city_id" class="form-select" v-model="city_id">
                        <option value="0">
                            All
                        </option>
                        <option v-for="city in cities" :key="city.id" :value="`${city.id}`">
                            {{city.name}}, {{city.state}}, {{city.country_code}}
                        </option>
                    </select>
                </div>

                <div class="col-md-1"></div>
                <!-- type filter -->
                <div class="col-md-2">
                    <div class="category"><img id="type-icon" src="@/assets/icons/building2.png" alt="..."> Type</div>
                    <div class="form-check mt-2">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="all" checked v-model="type">
                            All
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="house" v-model="type">
                            House
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="apartment" v-model="type">
                            Apartment
                        </label>
                    </div>
                </div>

                <!-- sale/rent filter -->
                <div class="col-md-3">
                    <div class="category"><img id="status-icon" src="@/assets/icons/sale1.png" alt="..."> Status</div> 
                    <div class="form-check mt-2">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="all" checked v-model="status">
                            All
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="sale" v-model="status">
                            For Sale
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="rent" v-model="status">
                            For Rent
                        </label>
                    </div>
                </div>
            </div>

            <div class="row mt-3 justify-content-center">
                <!-- beds filter -->
                <div class="col-md-5">
                    <div class="row justify-content-center mt-4">
                        <div class="col-md-5 category"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> Area (m2)</div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="min_area">Min area</label>
                            <input class="form-control form-control-lg" v-model="min_area" type="number" id="min_area">
                        </div>
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="max_area">Max area</label>
                            <input class="form-control form-control-lg" v-model="max_area" type="number" id="max_area">
                        </div>
                    </div>
                </div>
                 <!-- rooms filter -->
                <div class="col-md-5">
                    <div class="row mt-4 justify-content-center">
                        <div class="col-md-6 category"><img id="price-icon" src="@/assets/icons/coin1.png" alt="..."> Price (U$D)</div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="min_price">Min price</label>
                            <input class="form-control form-control-lg" v-model="min_price" type="number" id="min_price">
                        </div>
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="max_price">Max price</label>
                            <input class="form-control form-control-lg" v-model="max_price" type="number" id="max_price">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3 justify-content-center">
                <!-- beds filter -->
                <div class="col-md-5">
                    <div class="row justify-content-center mt-4">
                        <div class="col-md-4 category"><img src="@/assets/icons/bed1.png" alt="..."> Beds</div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="min_beds">Min beds</label>
                            <input class="form-control form-control-lg" v-model="min_beds" type="number" id="min_beds">
                        </div>
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="max_beds">Max beds</label>
                            <input class="form-control form-control-lg" v-model="max_beds" type="number" id="max_beds">
                        </div>
                    </div>
                </div>

                <!-- rooms filter -->
                <div class="col-md-5">
                    <div class="row mt-4 justify-content-center">
                        <div class="col-md-4 category"><img src="@/assets/icons/room1.png" alt="..."> Rooms</div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="min_rooms">Min rooms</label>
                            <input class="form-control form-control-lg" v-model="min_rooms" type="number" id="min_rooms">
                        </div>
                        <div class="col-md-4">
                            <label class="col-form-label col-form-label-lg" for="max_rooms">Max rooms</label>
                            <input class="form-control form-control-lg" v-model="max_rooms" type="number" id="max_rooms">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-2"></div>
                <div class="col-md-2 category"><img src="@/assets/icons/bath1.png" alt="..."> Baths</div>
            </div>
            <div class="row justify-content-around">
                <!-- baths filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_baths">Min baths</label>
                    <input class="form-control form-control-lg" v-model="min_baths" type="number" id="min_baths">
                </div>

                <div class="col-md-2 mt-5">
                    <a class="btn btn-primary btn-lg" id="search-btn" @click="searchClick">Search</a>
                </div>
            </div>

        </div>
    </div>


    <!-- properties container -->
    <div class="container" v-if="!propertiesHidden">
        <div class="row mt-2">
            <div class="col-md-3 mt-5">
                <a class="btn btn-primary" id="search-btn" @click="newSearchClick">New search</a>
            </div>
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
            <div class="col-md-12 not-found">No properties were found for your search.</div>
        </div>
    </div>

</template>



<style>
.search-title{
    font-size: 43px;
}

.search-view{
    background: #252525;
}

.category{
    font-size: 23px;
    color: white;
}

.label-font-size{
    font-size: 20px;
}

.not-found{
    font-size: 40px;
}

#price-icon{
    max-width: 40px;
}

#status-icon{
    max-width: 40px;
}

#type-icon{
    max-width: 40px;
}

#search-icon{
    max-width: 60px;
}

#search-btn{
    font-size: 20px;
    font-weight: bold;
}
</style>