<template>
  <div>我是儿子</div>
  <div>{{ data }}{{ a }}</div>
  <div>{{sonstart.name}}</div>
  <button @click="fnnn">点击</button>
</template>

<script lang="ts">
import { defineComponent, ref, inject, Ref } from "vue";

export default defineComponent({
  props: ["data"],
  emits: ["ggg"],
  setup(props, ctx) {
    const a = ref(0);
    const sonstart = inject<Ref<number>>("wyf");
    // console.log(sonstart);
    // console.log("props",props);
    
    function fnnn () {
      ctx.emit("ggg")    //子组件调用父组件的方法
    }
    
    return { a ,sonstart,fnnn};
  },
});
</script>

<style scoped>
</style>