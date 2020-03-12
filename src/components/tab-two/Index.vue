<template>
    <div class="component tab-two">
        tab-two
        <child />
    </div>
</template>

<script>
import Child from './Child'

export default {
    name: 'TabTwo',
    mounted () {
        console.log('tab-two mounted')
    },
    components: {
        Child
    },
    destroyed () {
        console.log('tab-two destroyed')
    }
}
</script>

<style lang="scss">
.component.tab-two {}
</style>
