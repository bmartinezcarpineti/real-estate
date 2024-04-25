<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import('@/assets/mdb.dark.css');
import Navbar from './components/Navbar.vue';
import PropertyCard from './components/PropertyCard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    PropertyCard,
    Footer,
  }
}
</script>

<style>
.container{
  font-family: 'Nunito';
}
</style>