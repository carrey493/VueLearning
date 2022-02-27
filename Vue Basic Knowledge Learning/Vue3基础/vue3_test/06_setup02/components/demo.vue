<template>
  <h1>信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">demo-hello</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  emits:['hello'],
  components: {},
  beforeCreate() {
    console.log("---");
  },
  setup(props, context) {
    //数据
    console.log(props);
    console.log(context);
    //context.attrs
    //context.emit
    //context.slots
    let person = reactive({
      name: "zd",
      age: 19,
    });

    function test(){
        context.emit('hello',123)
    }

    return {
      person,
      test
    };
  },
};
</script>

<style></style>
