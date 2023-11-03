<template>
  <div class="card-grid" v-if="posts.length > 0 || isObject(posts)">
    <PostItem
      :key="post.id"
      v-for="post in posts"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">Search posts</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isObject(value) {
      return (
        typeof value === "object" && value !== null && !Array.isArray(value)
      );
    },
  },
};
</script>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
