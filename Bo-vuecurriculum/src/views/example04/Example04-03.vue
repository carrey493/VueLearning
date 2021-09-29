<template>
  <div v-if="flag">
    <h1>v-for</h1>
    <ul>
      <li v-for="h in homeworks" :key="h.id">
        <router-link :to="`/homeworks/${h.id}`">
          {{ h.name }}/{{ h.deadline }}
        </router-link>
      </li>
    </ul>
    <table border="1">
      <thead>
        <th>#</th>
        <th>name</th>
        <th>deadline</th>
        <th>do</th>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ formatDate(h.deadline) }}</td>
        <td>
          <button @click="removeItem(index)">remove item</button>
        </td>
      </tr>
    </table>
    <p>
      动态追加数组中的数据
      <br />
      this.$set(vm.items,indexOfItem,newValue)
    </p>
    <button @click="addItem">add item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      homeworks: [
        {
          id: 0,
          name: 'java',
          deadline: '2019-04-10T09:00',
        },
        {
          id: 1,
          name: 'go',
          deadline: '2019-04-10T10:00',
        },
        {
          id: 2,
          name: 'python',
          deadline: '2019-04-10T11:00',
        },
      ],
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(newV) {
        if (newV.path !== '/example04/03') {
          this.flag = false
        }
      },
    },
  },
  computed: {
    formatDate() {
      return (date) => date.replace('T', '-').substring(0, 16)
    },
  },
  methods: {
    addItem() {
      this.$set(this.homeworks, this.homeworks.length, {
        id: this.homeworks.length + 1,
        name: 'c++',
        deadline: new Date().toISOString(),
      })
    },
    removeItem(index) {
      this.$delete(this.homeworks, index)
    },
  },
}
</script>

<style></style>
