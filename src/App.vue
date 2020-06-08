<template>
  <div>
    {{this.$store.state.num}}
    {{this.$store.getters.getNum}}
    <button @click="addNum">呵呵</button>
    <button @click="addNumByAsync">呵呵异步</button>
    <div id="a">asadasd</div>
    <button @click='add'>添加</button>
    <ul v-for="(item,index) in list" :key="index">
      <li class="ll">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import img from "./asset/images/haha.jpg";
import "./asset/styles/test.css";
import "./asset/styles/global.stylus";
export default {
  name: "App",
  created() {
    console.log(img);
  },
  data() {
    return {
      list: [
        { name: "lin" },
        { name: "lin" },
        { name: "lin" },
        { name: "lin" },
        { name: "lin" }
      ]
    };
  },
  methods: {
      add(){
          this.list.push({name:'k'})
      },
      addNum(){
        this.$store.commit('in',2);
      },
      addNumByAsync(){
        this.$store.dispatch('in',3);
      }
  },
};
</script>

<style scoped lang='stylus'>
#a {
  background: red;
}
</style>