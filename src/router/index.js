import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexPage from '../components/Landing/Landing.vue' // مسیر IndexPage
import DetailPage from '../components/Detail/Detail.vue' // مسیر DetailPage

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/detail/:id', // استفاده از پارامتر id برای صفحه Detail
      name: 'detail',
      component: DetailPage, // اضافه کردن صفحه Detail
      props: true, // برای انتقال id به کامپوننت Detail
    },
  ],
})

export default router
