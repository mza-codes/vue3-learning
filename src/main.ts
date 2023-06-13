import "./style.css";
import { createApp } from "vue";
import lazyLoadDirective from "./directives/lazyLoad";

import App from "./App.vue";

const app = createApp(App);
app.directive("lazy", lazyLoadDirective);
app.mount("#app");
