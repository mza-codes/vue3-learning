import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import TestComponent from "./components/TestComponent.vue";

const app = createApp(App);
app.component("TestComponent", TestComponent);
app.mount("#app");
