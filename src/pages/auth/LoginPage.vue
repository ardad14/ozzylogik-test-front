<template>
  <form class="container mx-auto" @submit.prevent="login">
    <h2 class="mx-auto">Login</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Email</label>
        <input class="input" v-model="email" type="email" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Password</label>
        <input class="input" v-model="password" type="password" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <MyButton @click="submit" type="submit" class="btn">
        Login
      </MyButton>
    </div>
    <div class="d-flex justify-content-center" style="margin-top: 15px">
      <a href="/register">Register</a>
    </div>
  </form>
</template>

<script>
import { login } from "@/api/auth";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "LoginPage",
  components: {MyButton},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to right, #FC8F8F, #FFF1C0)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  methods: {
    submit() {
      login({
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("userId", response.data.userId);

          this.$router.push(`/posts`);
        })
    },
  },
};
</script>

<style scoped>
form {
  background-color: #ffdede;
  padding: 64px;
  position: relative;
  top: 80px;
  width: 40%;
  border-radius: 60px;
}
form h2 {
  text-align: center;
  color: #3a0000;
  font-family: "Marmelad", sans-serif;
  margin-bottom: 60px;
  font-size: 43px;
  letter-spacing: 5px;
}

.form-group {
  margin-bottom: 60px;
}
a {
  color: #3a0000;
  text-decoration: underline;
  font-size: 18px;
  letter-spacing: 2px;
}
label {
  position: relative;
  top: 21px;
  font-size: 23px;
  color: #3a0000;
}
.input {
  width: 70%;
  border: 1px solid white;
  background-color: #fff;
  padding: 3px 20px;
  margin-top: 10px;
  font-size: 23px;
  color: black;
  letter-spacing: 1px;
}
</style>
