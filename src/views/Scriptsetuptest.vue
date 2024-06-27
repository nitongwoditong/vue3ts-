<template>
  <div>333</div>
  <MyComponent />
  <component :is="MyComponent" />
  <p>hello</p>
  <span :class="$style.red">黄色</span>
</template>

<script setup lang="ts">
import MyComponent from "../components/HelloWorld.vue";
const theme = {
  color: "red",
};
const spac = {
  color: "yellow",
};

interface LabelledValue {
  size?:number
  label : string
}
function printLanel(laelledObj:LabelledValue){
  console.log(laelledObj.label);
}
let myObj = { size:10 ,label :'size 10 Object'}
printLanel(myObj)

interface fn {
  (key:string,value:string):string
}
let FN:fn = function(key:string,value:string):string{
  return key + value
}
console.log(FN("王","鑫"));

function getName<T>(value:T):T{    // 参数和返回类型一样   函数的类型的复用
  return value
}
console.log(getName('权志龙'));

</script>

<style module>
p {
  color: v-bind("theme.color");
}

span {
  color: v-bind("spac.color");
}
</style>