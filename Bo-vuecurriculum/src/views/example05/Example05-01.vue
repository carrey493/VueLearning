<template>
  <div v-if="flag">
    <h1>Form Binding</h1>
    <form action="">
      uesr
      <input type="text" v-model="user.name" />
      <br />
      <label for="">
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label for="">
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select name="" id="" v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) in courses">
        <label for="" :key="`lab-${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch-${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <input type="file" @change="fileChange" />
    <br />
    <p v-if="file !== null">{{ file.name }}</p>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      user: {
        name: null,
        sex: null,
        courses: [],
        title: {},
      },
      file: {},
      titles: [
        { id: 1, name: '讲师' },
        { id: 2, name: '副教授' },
        { id: 3, name: '教授' },
      ],
      courses: [
        { id: 4, name: 'JAVA' },
        { id: 5, name: 'Web开发技术' },
        { id: 6, name: '系统程序设计' },
      ],
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(newV) {
        if (newV.path !== '/example05/01') {
          this.flag = false
        }
      },
    },
  },
  methods: {
    submit() {
      console.log(this.user)
      alert('确定提交吗？')
    },
    fileChange(event) {
      console.log(event.target.files[0])
      this.file = event.target.files[0]
    },
  },
}
</script>
<style>
p {
  font-weight: 500;
}
</style>
