import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Login'
import Main from './pages/main'
import User from './pages/main/User'
import Resource from './pages/main/Resource'

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Login
    }, {
        path: '/main',
        component: Main,
        children: [{
            path: 'user',
            component: User
        }, {
            path: 'resource',
            component: Resource
        }]
    }]
})
