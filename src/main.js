import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "popper.js";

const app = createApp(App);
app.use(router).mount("#app");
