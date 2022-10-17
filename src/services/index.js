import axios from "axios";
const service = axios.create({
  baseURL: "http://152.136.185.210:5000",
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
