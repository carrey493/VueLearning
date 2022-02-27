<template>
  <div class="school">
    <h2>学校姓名： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="sendSchoolName">学校名给app</button>
    <hr />
  </div>
</template>

<script>

export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "wuhan",
    };
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>

<style scoped>
.school {
  background: saddlebrown;
  padding: 5px;
}
</style>