<template>
  <div>
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    {{ a }},{{ b }}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";

const a = ref();
const b = ref();

const state = reactive({
  num: 1,
  count: 2,
});

const stateAsRefs = toRefs(state);

state.num++;

console.log(stateAsRefs.num.value);

// function fn (){
//   const a = reactive({
//   foo: 1,
//   bar: 2,
// });
//   return toRefs(a)
// }

// const { foo, bar } = fn();
// console.log(fn().foo);
</script>

<style scoped>
</style>
