<template>
  <div id="demo5">
    <h1>Demo5 : Binding And Class Style</h1>
    <!-- ใส่ shot from ได้ เช่น :href..,:src... -->
    <img v-bind:src="imageurl" v-bind:height="height" />
    <br />
    <a v-bind:href="link">My Website</a>
    <div :class="[false ? error : '',importent]">My Project</div>
    <div :style="{color,fontSize}">My Project</div>
    <div :style="isActive ? styleobj : ''">My Project</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "demo5",
  data() {
    return {
      imageurl:
        "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      height: 50,
      link: "http://youtube.com",
      error: "error_class",
      importent: "importent",
      color: "green",
      fontSize: "30px",
      styleobj: {
        backgroundColor: "yellow",
        color: "red",
      },
      isActive : false
    };
  },
};
</script>

<style>
.error_class {
  background-color: red;
  color: white;
}
.importent {
  font-weight: 900;
}
</style>