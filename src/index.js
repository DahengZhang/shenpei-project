import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import ajax from 'src/plugins/ajax'
import timer from 'src/plugins/timer'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ajax)
Vue.use(timer)

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.performance = process.env.NODE_ENV === 'development'

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')
