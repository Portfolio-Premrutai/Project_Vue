<template>
  <div id="Demo11">
    <h1>Demo 11 : Normal vs State Variables</h1>
    <div>{{count}}</div>
    <div>{{Math.random()}}</div>
    <div>TimeStamp:{{timestamp}}</div>
    <button @click="timestamp = Date.now()">Update Timestamp</button>
    <button @click="count++">+++</button>
  
  </div>
</template>

<script>
export default {
  name: "Demo11",
  created() {
    this.timestamp = 0;//สำหรับค่าที่ไม่ต้องการรีเฟสหน้า
  },
  mounted() {
    setInterval(() => {
      //this.count++;
      console.log("TimeStamp: "+ this.timestamp)
    }, 100);
  },
  data() {
    return {
      count: 0, //local state
    };
  },
};
</script>

<style>
</style>