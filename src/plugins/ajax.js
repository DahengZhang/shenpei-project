import axios from 'axios'

const _instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : ENV.FULL
})

_instance.interceptors.request.use(config => {
    return config
}, error => {
    console.error('request错误请求', error)
    return Promise.reject(error)
})

_instance.interceptors.response.use(({ data }) => {
    return data
}, error => {
    console.error('response错误请求', error)
    return Promise.reject(error)
})

export default (Vue, options) => {
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _instance
            }
        },
        $axios: {
            get() {
                return _instance
            }
        },
        $http: {
            get() {
                return _instance
            }
        }
    })
}
