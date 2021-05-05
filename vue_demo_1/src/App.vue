<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" title="Copyright 2020 by Premrutai Ltd." color="gray" />
    <div class="clock">{{time}}</div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import moment from "moment";
import Content from "@/components/layout/Content";
export default {
  name: "app",
  methods: {
    onClock(value) {
      // this.time=value
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    },
  },
  data() {
    return {
      time: "",
    };
  },
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>

<style >
</style>

<style>
/* Global */
.content {
  background: coral;
}
.clock {
  font-size: 12px;
}
</style>