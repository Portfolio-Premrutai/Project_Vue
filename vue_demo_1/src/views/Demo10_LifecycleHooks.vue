<template>
  <div id="demo10">
    <h1>Demo10 : Lifecycle Hooks</h1>
    <input type="number" placeholder="number" v-model="num" />
    <button type="submit" @click="addNumber(num)">Submit</button>
    <button type="submit" @click="showArray()">Shift : {{x}}</button>
    <h3>{{array}}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  methods: {
    addNumber(num) {
      this.array.push(Number(num));
    },
    showArray() {
                        const re = this.array.reduce((acc,curr)=>{
                                   console.log("acc "+acc + "\n" + "curr "+ curr)
                                   return acc + curr
                        },0)
                        this.x=re

//       this.array = this.array.concat(this.array2)
     
    
    },
  },
  data() {
    return {
      array: [1, 2, 3],
      array2: [4, 5, 6],
      x: [],
    };
  },
};
</script>

<style>
</style>