import "./style.css";
import { createApp } from "vue";

// @ts-expect-error cannot find module
import App from "./App.vue";

// @ts-expect-error cannot find module
import TestComponent from "./components/TestComponent.vue";

import lazyLoadDirective from "./directives/lazyLoad";

const app = createApp(App);
app.directive("lazy", lazyLoadDirective);
app.component("TestComponent", TestComponent);
app.mount("#app");
