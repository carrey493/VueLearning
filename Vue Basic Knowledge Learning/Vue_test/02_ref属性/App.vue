<template> 
<div>
    <h1 v-text="msg" ref="title"></h1>
    id的替代者
    <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch" />
</div>
</template>

<script>
//引入School组件
import School from './componets/School.vue'

export default {
    name: 'App',
    components: {School},
    data() {
        return {
            msg:'欢迎学习Vue！'
        }
    },
    methods: {
        showDom(){
            console.log(this.$refs.title);//真实Dom元素
            console.log(this.$refs.btn);//真实Dom元素
            console.log(this.$refs.sch);//School组件的实例对象
            console.log(this.$refs);
        }
    },
};
</script>

<style></style>
