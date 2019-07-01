import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './MovieRouter'
import CinemaRouter from './CinemaRouter'
import MineRouter from './MineRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
