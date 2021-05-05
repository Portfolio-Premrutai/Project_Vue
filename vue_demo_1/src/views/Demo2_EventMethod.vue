<template>
  <div id="demo2">
    <h1>Demo2 : Event And Method</h1>
    <button v-on:click="clickMe">ClickMe</button>
    <button v-on:click="clickMe2('Welcome to Vue js')">ClickMe2</button>
    <button @click="clickMe3('Welcome to My Project')">ClickMe3</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "demo2",
  mounted() {
    this.initial();
  },
  methods: {
      initial() {
    console.log("Initialzation");
  },                
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    clickMe3(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    },
  },
};
</script>

<style>
</style>