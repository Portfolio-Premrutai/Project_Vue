<template>
  <div class="demo4">
                      <h2>{{firstname}} </h2>
                      <h2>{{lastname}}</h2>
                      <h2>{{fullname}}</h2>

    <h1>Demo4 : Computed VS Method</h1>
    <h1 style="background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
    <h1 style="background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
    <h1>Random No from method: {{getrandomno1()}}</h1>
    <h1>Random No from method: {{getrandomno1()}}</h1>
  </div>
</template>

<script>
export default {
  name: "demo4",
  data() {
    return {
      firstname: "Premrutai",
      lastname: "Khamchalee",
    };
  },
  // methods  จะไม่มีการอัพเดตค่าก่อนหน้า 
  methods: {
    getrandomno1: function () {
      return Math.random();
    },
  },
//   commputed จะโชว์ค่าล่าสุดเท่านั้น จะรีเทินค่าล่าสุด อัพเดตค่าค่าก่อนหน้า
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno: function () {
      return Math.random();
    },
  },
};
</script>

<style>
</style>