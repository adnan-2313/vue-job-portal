import { createApp } from "vue";
import "./assets/index.css";
import router from "./router/index";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
