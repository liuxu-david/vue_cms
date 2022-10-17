import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

const app = createApp(App);
console.log("测试github无密码上传");

app.use(router).use(pinia).mount("#app");
