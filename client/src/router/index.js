import LoginVue from '@/components/Login.vue'
import SignInVue from '@/components/SignIn.vue'
import UserInfoVue from '@/components/UserInfo.vue'
import TransactionVue from '@/components/Transaction.vue'
import ReminderVue from '@/components/Reminder.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignInVue
  },
  {
    path: '/main',
    name: 'UserInfo',
    beforeEnter: guardMyroute,
    component: UserInfoVue
  },
  {
    path: '/transaction',
    name: 'Transaction',
    beforeEnter: guardMyroute,
    component: TransactionVue
  },
  {
    path: '/reminder',
    name: 'Reminder',
    beforeEnter: guardMyroute,
    component: ReminderVue
  }
]

//  Router Guard
function guardMyroute (to, from, next) {
  if (store.state.isUserLoggedIn && store.state.user.length > 0) {
    next()
  } else {
    next({ name: 'Login' })
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
