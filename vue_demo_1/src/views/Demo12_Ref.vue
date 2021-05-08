<template>
  <div id="demo12">
    <h1 ref="title">Demo 12 : Waiting for change by Ref</h1>
    <input type="text" ref="input1" placeholder="This will be focused auto matically " />
  </div>
</template>

<script>
export default {
  name: "Demo12",
//   ตอนถูกสร้าง
  mounted() {
    this.$refs["title"].textContent = "Premrutai Change Ref";
    this.$refs["input1"].focus();
    this.$refs["input1"].value = "1234"
  },
};
</script>

<style>
</style>