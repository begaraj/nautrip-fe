import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import MyTimeline from '@/components/MyTimeline'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/my-timeline',
      name: 'MyTimeline',
      component: MyTimeline
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
