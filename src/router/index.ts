import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import flexTop from '../page/flex-top.vue'
import indexlist from '../page/indexlist/indexlist.vue'
import demo from '../page/demo/Demo.vue'
import wheel from '../components/wheel/Wheel.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'demo',
        component: demo
    },
    {
        path: '/wheel',
        name: 'wheel',
        component: wheel
    },
    {
        path: '/indexlist',
        name: 'indexlist',
        component: indexlist
    },
    {
        path: '/flexTop',
        name: 'flexTop',
        component: flexTop
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
