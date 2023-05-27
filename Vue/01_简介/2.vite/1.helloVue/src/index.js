import { createApp } from "vue/dist/vue.esm-bundler.js";

const App = {
  data() {
    return {
      message: "hello",
    };
  },

  template: `
    <h1>{{ message }}</h1>
    `
};

createApp(App).mount("#app");
