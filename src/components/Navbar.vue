<template>
  <nav class="navbar navbar-expand-md navbar-light" style="margin: 0">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse mr-5 navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" href="/posts">Posts</a>
          </li>
          <li class="nav-item" v-if="isAdmin">
            <a class="nav-link" href="/admin">Admin</a>
          </li>
          <li v-if="!isAuth && !isLoginPage" class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item" v-if="!isRegisterPage && !isAuth">
            <a class="nav-link" href="/register">Register</a>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" @click="exit">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarPage",
  components: {},
  computed: {
    isRegisterPage() {
      return this.$route.path === "/register";
    },
    isLoginPage() {
      return this.$route.path === "/login";
    },
    isAuth() {
      return localStorage.getItem("accessToken") != null;
    },
    isAdmin() {
      return localStorage.getItem("role") === 'admin';
    }
  },
  methods: {
    exit() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      location.replace("/login");
    },
  },
};
</script>

<style scoped>
nav {
  height: 100px;
  background-color: #ffdede;
}
nav ul li a {
  text-decoration: none;
}

nav ul li a:hover,
nav ul li a:active,
nav ul li a:focus {
  text-decoration: underline;
}
.navbar-brand {
  background: linear-gradient(to bottom, #3a0000, #ff0101);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 5rem;
  margin-left: 40px;
  font-family: "Alex Brush", cursive;
}
.navbar-nav {
  margin-left: auto;
  font-size: 2rem;
  color: #3a0000;
  font-family: "Comfortaa", cursive;
}

.navbar-nav .nav-item a {
  color: #3a0000;
  font-size: 1.6rem;
}
.dropdown-item {
  font-size: 22px;
  font-family: "Comfortaa", cursive;
}

.navbar-nav .nav-link {
  font-size: 2rem;
  margin-left: 1.5rem;
}
</style>
