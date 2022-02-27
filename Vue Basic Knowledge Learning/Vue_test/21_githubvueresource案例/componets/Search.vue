<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="kWords"
        />&nbsp;
        <button @click="searchUers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      kWords: "",
    };
  },
  methods: {
    searchUers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http
        .get(`https://api.github.com/search/users?q=${this.kWords}`)
        .then((res) => {
          console.log(res.data.items);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        }),
        (err) => {
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: err.message,
            users: [],
          });
        };
    },
  },
};
</script>

<style></style>
