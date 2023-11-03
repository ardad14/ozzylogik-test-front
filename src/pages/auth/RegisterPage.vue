<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent="register">
    <h2 class="mx-auto">Registration</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="firstname">First name</label>
        <input class="input" v-model="firstname" type="text" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="lastname">Last name</label>
        <input class="input" v-model="lastname" type="text" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="email">Email</label>
        <input class="input" v-model="email" type="email" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="phone">Phone</label>
        <input class="input" v-model="phone" type="text" />
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
        Register
      </MyButton>
    </div>
    <div class="d-flex justify-content-center" style="margin-top: 15px">
      <a href="/login">Login</a>
    </div>
  </form>
</template>

<script>
import { registration } from "@/api/auth";
import myButton from "@/components/UI/MyButton.vue";
export default {
  name: "RegisterPage",
  components: { myButton },
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "+380",
    };
  },
  methods: {
    submit() {
      registration({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        phone: this.phone,
        password: this.password,
      }).then(this.$router.push('/posts'));
    },
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to right, #FC8F8F, #FFF1C0)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
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

.btn {
  background-color: #222222;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  padding: 14px;
  width: 41%;
  letter-spacing: 1.5px;
}
.btn:hover {
  background-color: #222222;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  padding: 14px;
  width: 41%;
  letter-spacing: 1.5px;
}

.form-group {
  margin-bottom: 40px;
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
