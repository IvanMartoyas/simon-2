import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/components/Game/Game'
import Home from '@/components/Home/Home'

const routes = [
    { path: '/', component: Home, meta: {layout: 'Default'} },
    { path: '/home', component: Home, meta: {layout: 'Default'} },
    { path: '/game', component: Game, meta: {layout: 'Full-width'} }
  ]


  const router = new VueRouter({
    routes
  })
  

  export default router