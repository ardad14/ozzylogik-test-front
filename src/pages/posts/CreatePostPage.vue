<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">Create post</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Title</label>
        <input
            type="text"
            class="form-control"
            id="text"
            v-model="post.title"
            style="width: 70%"
            required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Description</label>
        <input
            type="text"
            class="form-control"
            id="description"
            v-model="post.description"
            style="width: 70%"
            required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Text</label>
        <input
            type="text"
            class="form-control"
            id="text"
            v-model="post.text"
            style="width: 70%"
            required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Date</label>
        <input
            type="date"
            class="form-control"
            id="date"
            v-model="post.date"
            style="width: 70%"
            required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button
          @click="create"
          type="submit"
          class="btn-create"
          style="margin-top: 20px"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { createPost } from "@/api/posts";

export default {
  name: "CreatePostPage",
  data() {
    return {
      post: {
        title: "",
        description: "",
        text: "",
        date: new Date().toISOString().slice(0, 10),
      },
    };
  },
  methods: {
    create() {
      createPost(this.post)
        .then(() => {
          this.$router.push("/admin");
        })
    },
  },
};
</script>
<style scoped>
.btn-create {
  background-color: #bf9869;
  color: white;
  font-size: 1.3vw;
  width: 270px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bf9869;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  cursor: pointer;
  padding: 5px;
  background-color: #ddd;
  margin-top: 5px;
  border-radius: 5px;
}

li:hover {
  background-color: #aaa;
}
.btn-cancel {
  background-color: #000;
  color: white;
  font-size: 1.3vw;
  width: 270px;
  border-radius: 10px;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bf9869;
}

form {
  width: 90%;
}
.form-input {
  width: 40%;
}
.form-input input {
  width: 100%;
  background-color: transparent;
  border: 1px solid #bf9869;
  padding: 20px;
  font-size: 1.5vw;
  margin-bottom: 15px;
  color: white;
  border-radius: 20px;
}
.form-input input::placeholder {
  color: #717171;
}
.form-input textarea {
  width: 100%;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid #bf9869;
  padding: 20px;
  font-size: 1.5vw;
  margin-bottom: 15px;
  color: white;
  height: 300px;
  border-radius: 20px;
}
form h4 {
  font-size: 2.3vw;
  margin-bottom: 40px;
  font-family: "Alata", sans-serif;
}
</style>
