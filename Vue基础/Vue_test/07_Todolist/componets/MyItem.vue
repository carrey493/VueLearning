<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <!-- 如下代码也能实现功能，但是不太推荐
        因为违反原则，因为修改了props
        <input
          type="checkbox"
          v-model="todo.done"
        /> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="hadleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo",'chechkTodo','deleteTodo'],
  methods: {
    handleCheck(id) {
      this.chechkTodo(id)
    },
    hadleDelete(id){
      if(confirm('确定删除吗？')){
        this.deleteTodo(id)
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background: khaki;
}
li:hover button{
  background:lightcyan;
  display: block;
}
</style>
