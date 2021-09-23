<template>
  <div>
    <!-- <transition name="todo" appear> -->
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
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="hadleDelete(todo.id)">
        删除
      </button>
      <button class="btn btn-edit" @click="hadleEdit(todo)">编辑</button>
    </li>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.chechkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    hadleDelete(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        this.$bus.$emit("deleteTodo", id);
      }
    },
    //编辑
    hadleEdit(todo) {
      // todo.isEdit = true
      // eslint-disable-next-line no-prototype-builtins
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function() {
        this.$refs.inputTitle.focus();
      });
      /* //定时器立即到点也会指向回调，推向队列去执行
      setTimeout(()=>{
        this.$refs.inputTitle.focus()
      }) */
    },
    //失去焦点回调
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
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
li:hover {
  background: khaki;
}
li:hover button {
  display: block;
}
/* .todo-enter-active {
  animation: atguigu 2s linear;
}
.todo-leave-active {
  animation: atguigu 2s reverse linear;
}
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>
