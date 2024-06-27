<template>
  <div>
    <Son @ggg="ggg" :data="data"/>
    <!-- <span @click="a">点击我</span> -->
    <div @click="useStorage('亢', 1)">存东西</div>
    <div @click="useStorage('亢', 2)">存东西2</div>
    <span style="font-size: 200px;">{{bbbb.age}}</span>
  </div>
</template>

<script setup lang="ts">
import { continueStatement } from "@babel/types";
import { provide, reactive, Ref, ref, watchEffect } from "vue";
import Son from "./Son.vue";
interface A {
  name: string;
  age: number;
}
const start = reactive<A>({name:"小王",age:22});

provide("wyf", start);
const number = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, number);
// console.log(max);
function useStorage(name: any, value: number) {
  let data = ref(JSON.parse(localStorage.getItem(name)));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
const ggg = () => {
  console.log("123");
};


class ABC {
  name!: Ref;
  age!: Ref;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const bbbb= reactive(new ABC("小王", 100))
// setInterval(()=>{
//   bbbb.age--
//   console.log(bbbb.age);
// },1000)
console.log(bbbb);


const data = ref('123456');
</script>

<style scoped>
</style>