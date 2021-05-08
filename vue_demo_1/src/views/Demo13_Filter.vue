<template>
  <div id="demo13">
    <h1>Demo 13 : Filter</h1>
    <h2>{{1234 | currency("THB")}}</h2>
    <h2>{{2000000000000 | bytes}}</h2>
    <h2>{{"Premrutai" | capitalize({onlyFirstletter:true})}}</h2>
   <h2>{{ "Premrutai"  | uppercase }} </h2>
    <h2>{{[1,2,3] | reversArray}}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo13",
//   local filter
  filters: {
    reversArray(value) {
      return value.slice().reverse();//แยกแล้วกลับ
    },
  },
};
</script>

<style>
</style>