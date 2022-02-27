<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学校姓名： {{ name }}</h2>
    <h2>学生性别： {{ sex }}</h2>
    <h2>学生年龄： {{ myAge + 1 }}</h2>
    <button @click="update">修改年龄</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "学生",
      myAge: this.age,
    };
  },
  // props:['name','age','sex']//简单接收
  //接收的同时对数据类型判断
  /* props:{
        name: String,
        age: Number,
        sex: String
    } */
  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  //props数据优先接收
  props: {
    name: {
      type: String, //类型
      required: true, //是否必要
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    update() {
      this.myAge++;
    },
  },
};
</script>
