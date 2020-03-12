<template>
    <div class="page info">
        info
    </div>
</template>

<script>
export default {
    name: 'Info',
    mounted () {
        for (var i = 0; i < 10; i++) {
            (function(i) {
                setTimeout(() => {
                    console.log(i)
                }, 1000)
            })(i)
        }
    }
}
</script>

<style lang="scss">
.page.info {}
</style>
