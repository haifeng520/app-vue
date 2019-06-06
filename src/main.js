import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store';

import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css"; // 默认主题
// import './assets/css/theme-green/index.css';       // 浅绿色主题
import "./assets/css/icon.css";

import "babel-polyfill";

Vue.use(ElementUI, {
  size: "small"
});

// 导入axios插件
import myHttp from "./plugins/myAxios";
Vue.use(myHttp);
// 导入公共方法
import library from "./components/commonjs/library";
Vue.prototype.library = library;

// 定义全局过滤器 金额补齐两位小数
Vue.filter("toDecimal", x => {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  let c = Math.round(x * 100) / 100;
  let s = c.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }
  return s;
});

// 去空格  ==> 修改原生方法
String.prototype.trim = function() {
  return this.replace(/\s+/g, "");
};

console.log(process.env.NODE_ENV);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
