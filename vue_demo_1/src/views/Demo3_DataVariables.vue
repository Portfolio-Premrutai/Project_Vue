<template>
  <div id="demo3">
    <h1>Demo3 : Data And Variables</h1>
    <button
      @click="
        count++;
        isLogged = true;
      "
    >
      Count ++
    </button>
    <span>{{ count }} </span>
    <div>{{ message }}</div>
    <div>{{ isLogged }}</div>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <h2 v-if="isLogged">Yahoo</h2>
    <div>{{ account.username }} {{ account.password }}</div>
    <div>{{ courses[0] }}</div>
    <ul>
      <li v-for="(item, index) in courses" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo3",
  mounted() {
    this.message = "Welcome to Project";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      account: {
        username: "admin",
        password: "1234",
      },
      courses: ["Angular", "VueJs", "ReactJs", "Fluter", "UXUI"],
    };
  },
};
</script>

<style scoped>
li {
  color: red;
}
</style>