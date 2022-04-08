import { createRouter, createWebHistory } from 'vue-router'
import Avaleht from '../views/Avaleht.vue'
import Praktika from '../views/Praktika.vue'
import Oppimine from '../views/Oppimine.vue'
import Voimalused from '../views/Voimalused.vue'
import Kogemus from '../views/Kogemus.vue'

const routes = [
  {
    path: '/',
    name: 'Avaleht',
    component: Avaleht
  },
  {
    path: '/Praktika',
    name: 'Praktika',
    component: Praktika
  },
  {
    path: '/Oppimine',
    name: 'Oppimine',
    component: Oppimine
  },
  {
    path: '/Voimalused',
    name: 'Voimalused',
    component: Voimalused
  },
  {
    path: '/Kogemus',
    name: 'Kogemus',
    component: Kogemus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
