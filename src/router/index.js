import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import MyTimeline from '@/components/MyTimeline'
import Profile from '@/components/Profile'
import CreatePost from '@/components/CreatePost'
import BookTrip from '@/components/BookTrip'
import BookTrip2 from '@/components/BookTrip2'
import BookTrip3 from '@/components/BookTrip3'

Vue.use(Router);

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
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/book-trip',
      name: 'BookTrip',
      component: BookTrip
    },
    {
      path: '/book-trip-2',
      name: 'BookTrip2',
      component: BookTrip2
    },
    {
      path: '/book-trip-3',
      name: 'BookTrip3',
      component: BookTrip3
    }

  ]
})
