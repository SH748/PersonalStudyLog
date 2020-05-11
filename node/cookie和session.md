# cookie



## cookie是什么

* 一个存储在浏览器端的文本
* 每次请求都会自动携带**当前域名的有效**cookie传给服务器，服务器可以根据cookie来和浏览器通信，区分浏览器用户
* 一个请求头

* ！一个响应头，服务器响的数据里会设置一个特殊的响应头 set-cookie
  * eg: a=0;b=xx;path=/
* 浏览器收到报文后，会将cookie的内容保存。**cookie保存是按照域名分开保存的，不同域名的cookie不会相互干扰**



# Session

## session是什么

express的session没有做持久化，如果服务重启，session会销毁

