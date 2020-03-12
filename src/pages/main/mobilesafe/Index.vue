<template>
    <div class="page mobilesafe">
        mobilesafe
        <br />
        <button @click="nowTab = nowTab === 'TabOne' ? 'TabTwo' : 'TabOne'">当前显示{{nowTab}}</button>
        <keep-alive>
            <component :is="nowTab" />
        </keep-alive>
    </div>
</template>

<script>
import TabOne from 'src/components/tab-one'
import TabTwo from 'src/components/tab-two'

export default {
    name: 'Mobilesafe',
    data () {
        return {
            nowTab: 'TabOne'
        }
    },
    components: {
        TabOne,
        TabTwo
    }
}
</script>
