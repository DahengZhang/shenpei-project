<template>
    <div class="component tab-two child">
        tab-two child
    </div>
</template>

<script>
export default {
    name: 'TabTwoChild',
    mounted () {
        console.log('tab-two child mounted')
    },
    destroyed () {
        console.log('tab-two child destroyed')
    }
}
</script>

<style lang="scss">
.component.tab-two.child {}
</style>
