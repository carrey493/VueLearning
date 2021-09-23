<template>
  <div>
    <h1>v-bind</h1>
    <p>
      <label>
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <button :disabled="enable">提交</button>
    </p>
    <p @mouseover="actived" @mouseleave="deActived" :class="{ bg: active }">
      截至9月11日24时，
      <br />
      福建省累计报告境外输入确诊病例503例，
      <br />
      目前住院33例，无死亡病例；
      <br />
      现有报告境外输入疑似病例0例；
      <br />
      现有报告境外输入无症状感染者尚在接受集中隔离医学观察25例。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enable: true,
      active: false,
    }
  },
  methods: {
    setAgree() {
      this.enable = !this.enable
    },
    actived() {
      this.active = true
    },
    deActived() {
      this.active = !this.active
    },
  },
}
</script>

<style scoped>
.bg {
  background: brown;
}
</style>
