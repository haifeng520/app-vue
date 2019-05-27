import axios from "axios";
import { Loading } from "element-ui";
import { Message } from 'element-ui';

const MyPlugin = {};
MyPlugin.install = function(Vue) {
  // 设置请求基地址
  /*第一层if判断生产环境和开发环境*/
  if (process.env.NODE_ENV === "production") {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === "pro") {
      //production 生产环境
      axios.defaults.baseURL = "";
    } else {
      //test 测试环境
      axios.defaults.baseURL = "";
    }
  } else {
    //dev 开发环境
    axios.defaults.baseURL = "";
  }
  axios.defaults.timeout = 2500;
  // 添加请求拦截器
  let lod = null;
  axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // 发送请求之前 设置请求头 添加token， 登录时 不设置请求头
      if (config.url !== "login") {
        config.headers.Authorization = sessionStorage.getItem("token");
      }
      // 发送请求  添加lodaing
      lod = Loading.service({
        lock: true,
        text: "加载中,请稍后...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  axios.interceptors.response.use(
    function(response) {
      // Do something with response data
      // 响应结束后  关闭loding'
      lod.close();
     /*  const { status, msg } = response.data;
      if (status === '200' || status === '201') {

      } else {
        Message.warning(msg);
      } */
      return response;
    },
    function(error) {
      // Do something with response error
      // 失败后 关闭加载提示
      lod.close();
      Message.warning('请求失败，请刷新重试！')
      return Promise.reject(error);
    }
  );
  // 将axios挂载到vue实例上
  Vue.prototype.$axios = axios;
  // 设置上传图片 视频的基地址
  Vue.prototype.baseUrl = "";
};

export default MyPlugin;
