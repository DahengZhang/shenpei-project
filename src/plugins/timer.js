import moment from 'moment'

export default (Vue, options) => {
    Object.defineProperties(Vue.prototype, {
        moment: {
            get() {
                return moment
            }
        },
        $moment: {
            get() {
                return moment
            }
        }
    })
}
