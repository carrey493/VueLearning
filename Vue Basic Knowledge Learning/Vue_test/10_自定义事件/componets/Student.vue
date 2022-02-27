<template>
  <div class="student">
    <h2>学生姓名： {{ name }}</h2>
    <h2>学生性别： {{ sex }}</h2>
    <h2>{{number}}</h2>
    <button @click="add">number++</button>
    <button @click="sendStudentName">学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="down">销毁当前Student组件的实例VC</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "张三",
      sex: "男",
      number:0
    };
  },
  methods:{
    add(){
      this.number++
      console.log('调用add')
    },
    sendStudentName(){
      //触发Student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name,1,2,3)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu')//解绑自定义事件
      /* this.$off(['atguigu','demo'])//解绑多个事件 */
      /* this.$off()//解绑所有的事件 */
      console.log('解绑');
    },
    down(){
      this.$destroy()//销毁了当前student组件实例，销毁后所有Student实例的自定义事件全都不奏效
      console.log('销毁');
    }
  }
};
</script>

<style scoped>
.student{
  background: darkcyan;
  margin-top: 50px;
}
</style>