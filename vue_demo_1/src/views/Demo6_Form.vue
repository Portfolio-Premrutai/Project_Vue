<template>
  <div id="demo6">
    <h1>Demo6 : Form Input and V Model</h1>
    <form v-on:submit.prevent="submit">
      <!-- firstname -->
      <div>
        <label for="first_name">firstname</label>
        <!-- ?.trim คือ  modifier ใช้เช็คเว้นวรรค -->
        <input type="text" name="first_name" v-model.trim="applicant.first_name" />
      </div>
      <!-- lastname -->
      <br />
      <div>
        <label for="last_name">lastname</label>
        <!-- .lazy คือ  modifier ต้องกด enter หรือกดช่องอื่น มันค้นหาก่อนนั้นค่อยอัพเดตค่า -->
        <input type="text" name="last_name" v-model.lazy="applicant.last_name" />
      </div>
      <!-- sex -->
      <br />
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>
      <!-- Age -->
      <div>
        <label for="age">Age:</label>
        <!-- .number คือ  modifier แปลงเป็นเลข  -->
        <input type="number" v-model.number="applicant.age" />
      </div>

      <!-- course -->
      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="vuejs">vuejs</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <!-- exact คือ  modifier ที่ช่วยให้ใส่ คลิกได้สองอัน   -->
      <button @click.exact="clear" @click.alt="useDefault">clear</button>
    </form>
    <div style="margin-top:16px; color:red;">#Spy {{JSON.stringify(applicant)}}</div>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "react",
      },
    };
  },
  methods: {
    submit() {
      //       event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "react",
      };
    },
       useDefault() {
      this.applicant = {
        first_name: "UNKNOWN",
        last_name: "UNKNOWN",
        sex: "male",
        age: 10,
        course: "react",
      };
    },
  },
};
</script>

<style>
</style>