<template>
  <div>
    <!-- <h1>当前求和：{{$store.state.sum}}</h1>
    <h1>当前求和放大十倍为：{{$store.getters.bigSum}}</h1>
    <h3>学校：{{$store.state.school}}</h3>
    <h3>学科：{{$store.state.subject}}</h3> -->
    <h1>当前求和：{{ sum }}</h1>
    <h1>当前求和：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h1>当前求和放大十倍s为：{{ bigSums }}</h1>
    <h3>学校：{{ school }}</h3>
    <h3>学科：{{ subject }}</h3>
    <h3>学校：{{ countOptions.school }}</h3>
    <h3>学科：{{ countOptions.subject }}</h3>
    <h3>学校：{{ school }}</h3>
    <h3>学科：{{ subject }}</h3>
    <h3>下方组件的总人数是：{{personOptions.length}}</h3>
    <!-- <h3>下方组件的总人数是：{{personList.length}}</h3> -->
    <select v-model.number="n"
      ><option value="1">1</option
      ><option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加呀</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations ,mapActions} from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //程序员自己去写计算属性
    /* sum(){
      return this.$store.state.sum
    },
    
    school(){
      return this.$store.state.school
    },
    subject(){
      return this.$store.state.subject
    }, */

    //借助mapState生成计算属性,从state中读取数据（对象写法）
    /* ...mapState({sum:'sum',school:'school',subject:'subject'}), */

    //借助mapState生成计算属性,从state中读取数据（数组写法）
    ...mapState(["sum", "school", "subject",'personList']),

    ...mapState(["countOptions", "personOptions"]),

    ...mapState("countsOptions", ["sum", "school", "subject"]),

    ...mapState("personsOptions",["personList"]),
    /* bigSum(){
      return this.$store.getters.bigSum
    }, */
    //借助mapGetters,从getters中读取数据（对象写法）
    /* ...mapGetters({bigSum:'bigSum'}) */
    //借助mapGetters,从getters中读取数据（数组写法）
    ...mapGetters(["bigSum"]),

    ...mapGetters("countsOptions", ["bigSums"]),

  },
  methods: {
    //程序员亲自写方法
    /* increment() {
      // this.$store.dispatch('add',this.n)
      this.$store.commit('ADD',this.n)
    },
    decrement() {
      // this.$store.dispatch('reduce',this.n)
      this.$store.commit('REDUCE',this.n)
    }, */
    /* increment(){
      this.jia(this.n)
    },
    decrement(){
      this.jian(this.n)
    },
    ...mapMutations({jia:'ADD',jian:'REDUCE'}),
     */
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象的写法)
    ...mapMutations({ increment: "ADD", decrement: "REDUCE" }),
    ...mapMutations('countsOptions',{ increment: "ADD", decrement: "REDUCE" }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组的写法)
    // ...mapMutations(["ADD","REDUCE"] ),
    /************************************************ */
    // incrementOdd() {
    //   /* if(this.$store.state.sum % 2){
    //     this.$store.dispatch('add',this.n)
    //   } */
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   /* setTimeout(() => {
    //     this.$store.dispatch('add',this.n)
    //   }, 500); */
    //   this.$store.dispatch("addWait", this.n);
    // },
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations(对象的写法)
    ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
    ...mapActions('countsOptions',{incrementOdd:'addOdd',incrementWait:'addWait'})
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations(数组的写法)
    // ...mapActions(['addOdd','addWait'])
  },
  mounted() {
    const x = mapState({ sum: "sum", school: "school", subject: "subject" });
    console.log(x);
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
