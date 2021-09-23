<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <br />
    <p>{{ user.name }}</p>
    <p>
      data中属性必须声明。data中的响应式数据，在组件创建时确定，数据可更改，但不能添加新属性，属性必须提前声明
    </p>
    <br />
    <br />
    <button @click="changed">改名</button>
    <br />
    <p>{{ user.age }}</p>
    <br />
    <p>{{ user.age + 20 }}</p>
    <br />
    <p>{{ user.insertTime }}</p>
    <br />
    <p>{{ user.school }}</p>
    <br />

    <p>{{ replace }}</p>
    <br />
    <p>
      计算属性，默认声明的属性是getter方法，不支持传参。但JS中，属性可以是一个函数
    </p>
    <br />
    <p>{{ myReplace(user.insertTime) }}</p>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
      user: {
        name: 'bo',
        age: 32,
        school: 'NEFU',
        insertTime: '2020.04.09T08:30:29',
      },
      likes: ['a', 'b', 'c'],
      isShow: false,
    }
  },
  computed: {
    replace() {
      return this.user.school.replace('NEFU', 'HIT')
    },
    reserveMsg() {
      return this.msg.split('').reverse().join('.')
    },
    myReplace() {
      return (date) => date.replace('T', 'tt')
    },
  },
  methods: {
    changed() {
      this.user.name = 'BO'
    },
  },
}
</script>

<style></style>
