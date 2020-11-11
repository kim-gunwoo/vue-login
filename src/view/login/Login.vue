<template>
  <div class="form">
    <div class="form-toggle" @click.prevent="isSignChange">
      {{ toggleName }}
    </div>
    <SignIn v-if="isSign" />
    <SignUp v-else />
  </div>
</template>

<script>
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      isSign: true,
      toggleName: "SignIn"
    };
  },
  methods: {
    isSignChange() {
      this.isSign = this.isSign === true ? false : true;
      this.toggleName = this.isSign === true ? "SignIn" : "SignUp";
    }
  }
};
</script>

<style scoped>
.form {
  z-index: 15;
  position: relative;
  background: #ffffff;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
}
.form-toggle {
  z-index: 10;
  position: absolute;
  top: 30px;
  right: 30px;
  background: #4285f4;
  width: 40px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
  font-size: 10px;
  padding: 10px 0 0 0;
  color: #ffffff;
}
</style>
