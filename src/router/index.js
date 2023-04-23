import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '../components/Login.vue'
import Users from '../components/Users.vue'
import Specialties from '../components/Specialties.vue'
import Time from '../components/Time.vue'
import Graduate from '../components/Graduate.vue'
import Teacher from '../components/Teacher.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [

    {
      path: '/specialties',
      name: 'specialties',
      component: Specialties
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
    {
      path: '/graduate',
      name: 'graduate',
      component: Graduate
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },

  ]
})

export default router