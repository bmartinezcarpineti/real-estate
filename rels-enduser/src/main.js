import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import PropertyCard from './components/PropertyCard.vue';
import CityCard from './components/CityCard.vue';
import Carousel from './components/Carousel.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('PropertyCard', PropertyCard);
app.component('CityCard', CityCard);
app.component('Carousel', Carousel);

app.mount('#app');
