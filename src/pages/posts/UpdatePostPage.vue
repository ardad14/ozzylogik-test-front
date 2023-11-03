<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">Update post</h2>
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
          @click="submit"
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
import { getPost, updatePost } from "@/api/posts";
export default {
  name: "UpdatePostPage",
  data() {
    return {
      post: [],
    };
  },
  beforeMount() {
    getPost(this.$route.params.id).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    submit() {
      updatePost(this.post._id, this.post).then(this.$router.push("/admin"));
    }
  }
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

textarea {
  width: 100%;
  background-color: transparent;
  border: 1px solid #bf9869;
  padding: 20px;
  font-size: 1.5vw;
  margin-top: 25px;
  margin-bottom: 15px;
  color: white;
  height: 300px;
  border-radius: 10px;
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
.card-grid {
  display: flex;
  margin-bottom: 49px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card {
  margin-bottom: 50px;
  background: transparent;
  position: relative;
  border: none;
}

.card:hover .basket-icon {
  display: block;
}

.card .card-img {
  position: relative;
  width: 400px;
  height: 499px;
}

.card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-img img:hover {
  opacity: 0.2;
}
.card-image img {
  height: 100%;
  object-fit: contain;
}
.card-image:hover img,
.card-image:hover img:hover {
  opacity: 0.1;
  background-color: rgba(255, 255, 255, 0.72);
}

.card:hover .basket-icon img {
  visibility: visible;
  opacity: 1;
  background-color: transparent;
}
.card .basket-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.basket {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card:hover .basket {
  display: block;
}

.card:hover .card-img {
  opacity: 0.1;
}

.basket-icon:hover {
  opacity: 1;
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
  border-radius: 10px;
}

form h4 {
  font-size: 2.3vw;
  margin-bottom: 40px;
  font-family: "Alata", sans-serif;
}
</style>
