import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropertiesView from '../views/PropertiesView.vue'
import SearchView from '../views/SearchView.vue'
import PropertyView from '../views/PropertyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/properties',
      name: 'properties',
      component: PropertiesView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/property/:id',
      name: 'property',
      component: PropertyView
    }
  ]
})

export default router
