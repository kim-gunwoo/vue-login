<template>
  <div class="form-panel ">
    <div class="form-header">
      <h1>Register Account</h1>
    </div>
    <div class="form-content">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="usernm"
            ref="usernm"
            required="required"
          />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" v-model="email" ref="email" required="required" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="passwd"
            ref="passwd"
            required="required"
          />
        </div>
        <div class="form-group">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            v-model="cpasswd"
            ref="cpasswd"
            required="required"
          />
        </div>

        <div class="form-group">
          <button type="submit" v-on:click.prevent="onSubmit">Register</button>
        </div>
      </form>
    </div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const userStore = "userStore";
export default {
  data() {
    return {
      msg: "",
      email: "",
      usernm: "",
      passwd: "",
      cpasswd: ""
    };
  },
  computed: {
    ...mapState({
      user: userStore
    })
  },
  created() {
    this.email = this.user.email;
    this.passwd = this.user.passwd;
    this.cpasswd = this.user.passwd;
    this.usernm = this.user.usernm;
  },
  methods: {
    ...mapActions(userStore, ["SIGNUP_USER"]),
    onSubmit() {
      if (!(this.usernm && this.email && this.passwd && this.cpasswd)) {
        this.msg = `reauired`;
        return;
      }

      if (this.passwd !== this.cpasswd) {
        alert(`password `);
        this.$refs.passwd.focus();
        return;
      }

      const user = {
        email: this.email,
        usernm: this.usernm,
        passwd: this.passwd
      };

      this.SIGNUP_USER(user).then(data => {
        if (data.err) {
          this.msg = data.err.response.data.error;
          return;
        }
        if (data.success) {
          this.$router.push("/");
        }
      });
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
.form-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 0 20px;
}
.form-group:last-child {
  margin: 0;
}
.form-group label {
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.form-group input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.form-group input:focus {
  color: rgba(0, 0, 0, 0.8);
}
.form-group button {
  outline: none;
  background: #4285f4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #ffffff;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
}
.form-group .form-remember {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}
.form-group .form-remember input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
}
.form-group .form-recovery {
  color: #4285f4;
  font-size: 12px;
  text-decoration: none;
}
.form-panel {
  padding: 60px calc(5% + 60px) 60px 60px;
  box-sizing: border-box;
}
.form-header {
  margin: 0 0 40px;
}
.form-header h1 {
  padding: 4px 0;
  color: #4285f4;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
