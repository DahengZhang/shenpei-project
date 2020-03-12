import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Login'
import Main from './pages/main/Index'
import Check from './pages/main/check/Index'
import Devops from './pages/main/devops/Index'
import Info from './pages/main/info/Index'
import Mobilesafe from './pages/main/mobilesafe/Index'
import Dashboard from './pages/main/Dashboard'

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/',
        component: Main,
        children: [{
            path: 'check',
            name: 'check',
            meta: {
                label: '政务信息资源目录列表'
            },
            component: Check
        }, {
            path: 'devops',
            name: 'devops',
            meta: {
                label: '运维检查项配置管理'
            },
            component: Devops
        }, {
            path: 'info',
            name: 'info',
            meta: {
                label: '运维记录管理'
            },
            component: Info
        }, {
            path: 'mobilesafe',
            name: 'mobilesafe',
            meta: {
                label: '移动互联安全管理'
            },
            component: Mobilesafe
        }, {
            path: 'dashboard',
            name: 'dashboard',
            meta: {
                label: '首页'
            },
            component: Dashboard
        }, {
            path: '',
            redirect: 'dashboard'
        }]
    }]
})
