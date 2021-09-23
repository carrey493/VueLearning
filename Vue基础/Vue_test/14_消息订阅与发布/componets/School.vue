<template>
  <div class="school">
    <h2>学校姓名： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <hr />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "wuhan",
    };
  },
  methods:{
    demo(name,data){
      console.log('有人发布了hello组件，hello消息的回调执行了',name,data,this);
    }
  },
  mounted() {
    /* this.$bus.$on('hello',(data)=>{
      console.log('School组件,收到了',data);
    }) */
    /* this.pubId = pubsub.subscribe('nihao',(name,data)=>{
      //消息订阅
      console.log(this);
      console.log('有人发布了hello组件，hello消息的回调执行了',name,data);
    }) */
    this.pubId = pubsub.subscribe('nihao',this.demo)
  },
  beforeDestroy() {
    /* this.$bus.$off('hello') //销毁之前解绑 */
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style scoped>
.school {
  background: saddlebrown;
  padding: 5px;
}
</style>