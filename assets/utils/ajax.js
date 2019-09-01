import axios from 'axios'
import {
  message
} from 'ant-design-vue'
  
const server = axios.create({
  baseURL: process.env.baseUrl
  // timeout: 30000
})

// 添加请求拦截器
server.interceptors.request.use(function (config) {
  console.log('在发送请求之前', config)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
server.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('对响应数据', response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (/timeout/.test(error.message)) {
    message.error('请求超时, 请重新连接');
  }
  return Promise.reject(error);
});
export default server