<template>
  <div>
    {{ msg }}
    {{ user.usernm }}
  </div>
</template>

<script>
import { mapState } from "vuex";
const userStore = "userStore";

export default {
  data() {
    return {
      msg: "Home"
    };
  },
  computed: {
    ...mapState({
      user: userStore
    })
  }
};
</script>

<style scoped></style>
