<template>
    <div class="component tab-one">
        tab-one now is {{now}}
        <child ref="childEl" />
    </div>
</template>

<script>
import Child from './Child'

export default {
    name: 'TabOne',
    data () {
        return {
            now: 0
        }
    },
    beforeCreate () {
        console.log('tab-one beforeCreate $route is ', this.$route)
        console.log('tab-one beforeCreate now is ', this.now)
    },
    created () {
        console.log('tab-one created now is ', this.now)
        console.log('tab-one created')
    },
    beforeMount () {
        console.log('tab-one beforeMount refs is ', this.$refs.childEl)
        console.log('tab-one beforeMount')
    },
    mounted () {
        // this.timer = setInterval(() => {
        //     this.now++
        // }, 500)
        // console.log('tab-one mounted refs is ', this.$refs.childEl) // 可以拿到childEl对象
        console.log('tab-one mounted')
    },
    activated () {
        console.log('tab-one activated')
    },
    beforeUpdate () {
        console.log('tab-one beforeUpdate now is ', this.now)
    },
    updated () {
        console.log('tab-one updated now is ', this.now)
    },
    components: {
        Child
    },
    deactivated () {
        // clearInterval(this.timer)
        console.log('tab-one deactivated')
    },
    beforeDestroy () {
        clearInterval(this.timer)
        console.log('tab-one beforeDestroy')
        console.log('tab-one beforeDestroy now is ', this.now)
    },
    destroyed () {
        console.warn('tab-one destroyed now is ', this.now)
        console.warn('tab-one destroyed $route is ', this.$route)
    }
}
</script>

<style lang="scss">
.component.tab-one {}
</style>
