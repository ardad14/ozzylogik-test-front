import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/auth/LoginPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import PostsPage from "@/pages/posts/PostsPage.vue";
import CreatePost from "@/pages/posts/CreatePostPage.vue";
import UpdatePostsPage from "@/pages/posts/UpdatePostPage.vue";
import AdminPage from "@/pages/AdminPage.vue";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/post/create",
    component: CreatePost,
  },
  {
    path: "/post/update/:id",
    component: UpdatePostsPage,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
