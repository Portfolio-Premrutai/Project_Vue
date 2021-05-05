<template>
  <div id="demo8">
    <h1>Demo 8 : Condition Directive</h1>
    <div v-if="type=== 'A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>
    <div v-if="isShow">Blink 1</div>
    <div v-else>Blink 2</div>
     <div v-show="isShow">Blink v-show</div>
  </div>
</template>

<script>
export default {
  name: "Demo8",
  mounted() {
    setInterval(() => {
      this.isShow = true;
    }, 1000);
  },
  data() {
    return {
      type: "A",
      isShow: false,
    };
  },
};
</script>

<style>
</style>