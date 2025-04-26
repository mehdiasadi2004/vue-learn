import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexPage from '../components/Landing/Landing.vue' 
import DetailPage from '../components/Detail/Detail.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailPage,
      props: true, 
    },
  ],
})

export default router
