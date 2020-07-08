import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const ajax = axios.create({
    baseURL:'/mock', //前缀路径
    timeOut:20000 //连接请求时间 20s
})

ajax.interceptors.request.use(config=>{
    nprogress.start() //显示进度
    return config
})
ajax.interceptors.response.use(response=>{
    nprogress.done() //隐藏进度条
    return response.data
},error=>{
    nprogress.done() //隐藏进度条
    alert(error)
    return Promise.reject(error) //把错误返回
})
export default ajax