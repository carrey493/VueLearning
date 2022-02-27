<template>
  <div id="app">
    <h1>{{ msg }}学生姓名：{{ studentName }}</h1>
    通过父组件给子组件传递函数类型的props实现：子给父传递数据
    <School :getSchoolName="getSchoolName" />
    <hr />
    Student组件的实例对象vc绑定事件atguigu,触发时执行getStudentName函数
    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 @/v-on
    <Student  v-on:atguigu="getStudentName" @demo="m1" />
    <hr />
    ref
    <Student ref="student" @click.native="show" />
    native原生的
  </div>
</template>

<script>
import Student from "./componets/Student.vue";
import School from "./componets/School.vue";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("学校名：", name);
    },
    //传递多个参数
    getStudentName(name,...params) {
      console.log("学生名：", name,params);
      this.studentName = name
    },
    m1() {
      console.log("demo事件触发了");
    },
    show(){
      alert('native原生的')
    }
  },
  mounted() {
    //更灵活
    this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
    //once 只执行一次
    this.$refs.student.$on("atguigu", (name, ...params) => {
      console.log("学生名：", name, params);
      this.studentName = name;
      console.log(this);//this-->App.vue 箭头函数没有自己的this，它就会往外找-->mounted-->App.vue
    });
    /* this.$refs.student.$on("atguigu", function(name, ...params){
      console.log("学生名：", name, params);
      this.studentName = name;
      console.log(this);//this-->Student.vue 指向调用它的组件实例对象
    }); */
  },
};
</script>

<style>
.app {
  background: wheat;
}
</style>
