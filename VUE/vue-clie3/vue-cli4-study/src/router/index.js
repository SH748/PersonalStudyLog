import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/Home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/About',
            name: 'About',
            component: About,
        }
    ]
})