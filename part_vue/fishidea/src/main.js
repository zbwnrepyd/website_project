import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue from 'vue';
import Antd from 'ant-design-vue';// 引入Ant Design Vue组件
import 'ant-design-vue/dist/antd.css'; // 引入Ant Design Vue样式


Vue.use(Antd) //挂载到vue中


createApp(App).use(store).use(router).mount("#app");
