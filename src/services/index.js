import axios from "axios";
const service = axios.create({
  baseURL: "https://httpbin.org/",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

export default service;
