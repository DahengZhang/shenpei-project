<template>
    <div class="page devops">
        <button @click="need = !need">change state</button>
        devops state is {{state}}
    </div>
</template>

<script>
export default {
    name: 'Devops',
    data () {
        return {
            need: true,
            nowTime: 0
        }
    },
    computed: {
        state () {
            let state = 'haha'
            if (this.need) {
                state = 'hehe' + this.nowTime
                console.log('----', this.nowTime)
            }
            return state
        }
    },
    mounted () {
        performance.mark("dog")
        this.timer = setInterval(() => {
            this.nowTime++
            if (this.nowTime >= 20) {
                clearInterval(this.timer)
            }
        }, 500)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>

<style lang="scss">
.page.devops {}
</style>
