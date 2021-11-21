<template>
  <div>
    <button @click="del">删除</button>
  </div>
</template>

<script>
export default {
  props: ['homework'],
  methods: {
    del() {
      let r = confirm(`你确定删除${this.homework.name}吗`)
      if (r) {
        alert(`${this.homework.name}已删除`)
      }
    },
  },
}
</script>

<style></style>
