<template>
  <h2>Posts</h2>
  <a href="/post/create">Create post</a>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Text</th>
      <th scope="col">Date</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(post, index) in this.posts" :key="index">
      <th scope="row">{{ index }}</th>
      <td>{{ post.title }}</td>
      <td>{{ post.description }}</td>
      <td>{{ post.text }}</td>
      <td>{{ post.date }}</td>
      <td>
        <img src="@/assets/images/edit.png" alt="" @click="$router.push(`/post/update/` + post._id)" />
        <img src="@/assets/images/button-delete.png" alt="" @click="deletePost(post._id)" />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {getPosts, deletePost} from "@/api/posts";

export default {
  name: "AdminPage",
  data() {
    return {
      posts: [],
    };
  },
  beforeMount() {
    getPosts({
      limit: 0,
      page: 1,
    }).then((response) => {
      this.posts = response.data.posts;
    });
  },
  methods: {
    deletePost(id) {
      deletePost(id).then(() => {
        this.posts = this.posts.filter((post) => post._id !== id)
      })
    }
  }
}
</script>

<style scoped>

</style>