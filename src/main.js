import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import echarts from 'echarts';
import '../src/assets/css/index.css'

createApp(App)
  .use(echarts)
  .use(router)
  .use(store)
  .mount('#app');
