/*
@Date		:2023/10/31 16:52:49
@Author		:zono
@Description:请求函数封装文件
1、域名配置
2、超时时间
3.请求拦截器
*/

import axios from "axios";

const request = axios.create({
    baseURL:'http://localhost:5000/api/v1',//根域名
    // baseURL: 'http://geek.itheima.net/v1_0',
    timeout:5000
})

// //请求拦截器
// //请求前，进行拦截，对参数处理
// request.interceptors.request.use((config)=>{
//     //2xx范围的响应都会触发
//     return config
// },(error)=>{
//     return Promise.reject(error)
// })

// //响应拦截器
// //在响应返回客户端之前拦截处理
// request.interceptors.request.use((response)=>{
//     //2xx范围的响应都会触发
//     return response.data
// },(error)=>{
//     //响应异常
//     return Promise.reject(error)
// })

export { request }