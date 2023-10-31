/*
@Date		:2023/10/31 16:52:49
@Author		:zono
@Description:请求函数封装
1、域名配置
2、超时时间
3.请求拦截器
*/

import axios from "axios";

const request = axios.create({
    baseURL:'',//根域名
    timeout:5000
})

export { request }