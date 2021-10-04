<template>
  <div v-if="flag">
    <p>
      必须同意条款才能选择操作以及提交
      <br />
      必须选择两项才能提交
      <br />
      等于两项时checkbox不可选取
    </p>
    <form action="">
      <label for=""><input type="checkbox" v-model="agree" /></label>
      <br />
      <template v-for="(c, index) in courses">
        <label for="" :key="`l-${index}`">
          <input
            ref="checkboxs"
            type="checkbox"
            name=""
            id=""
            :key="`c-${index}`"
            v-model="selectedCourses"
            :value="{ id: c.id }"
            :disabled="!agree"
            @change="change"
          />
          {{ c.name }}
          <br :key="`b-${index}`" />
        </label>
      </template>
      <br />
      <button
        type="button"
        :disabled="!agree || !(selectedCourses.length >= amount)"
      >
        submit
      </button>
    </form>
    <p>{{ selectedCourses }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      courses: [
        { id: 1, name: 'java1' },
        { id: 2, name: 'java2' },
        { id: 3, name: 'java3' },
        { id: 4, name: 'java4' },
        { id: 5, name: 'java5' },
      ],
      amount: 2,
      selectedCourses: [{ id: 3 }],
      agree: false,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(newV) {
        if (newV.path !== '/example05/02') {
          this.flag = false
        }
      },
    },
  },
  methods: {
    change() {
      let checkboxDisable = this.selectedCourses.lenth >= this.amount
      this.$refs.checkboxs
        .filter((c) => !c.checked)
        .forEach((c) => {
          c.disabled = checkboxDisable
        })
    },
  },
}
</script>

<style>
p {
  color: aqua;
}
</style>
