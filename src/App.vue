<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import Login from "./view/Login";
export default {
  name: "app",
  components: {},
  data() {
    return {
      msg: "vue-login",
    };
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  background: -webkit-linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
