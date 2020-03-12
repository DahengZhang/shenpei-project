<template>
    <div class="component tab-one child">
        tab-one child
    </div>
</template>

<script>
export default {
    name: 'TabOneChild',
    mounted () {
        console.log('tab-one child mounted')
    },
    destroyed () {
        console.log('tab-one child destroyed')
    }
}
</script>

<style lang="scss">
.component.tab-one.child {}
</style>
