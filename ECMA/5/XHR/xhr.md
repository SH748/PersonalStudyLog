# XHR-XMLHttpRequest

`XMLHttpRequest`（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以==在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容==。

### 区别一般Http请求和ajax请求

* ajax是一种特别的http请求
* 对服务器端而言，没有任何区别，区别在于浏览器端
* 浏览器发送请求：只有XHR和fetch发出的才是ajax请求，其他的都是非ajax请求
* 浏览器端接收到响应
  * 一般请求：浏览器会直接显示响应数据，也就是刷新/转跳页面
  * ajax请求：浏览器不会对页面惊醒任何更新操作，只是调用监视的回调函数并传入响应相关数据。具体的页面变化需要程序员自行处理

### API

* status 响应状态码
* status 响应状态文本
* readyState 标志请求状态的只读属性
  * 0 初始-new XMLHttpRequest
  * 1 xhr.open()之后
  * 2 xhr.send()之后
  * 3 请求中
  * 4 请求完成
* onreadystatechange 绑定readyState改变的监听（readyState发生改变后调用）
* resopseType 指定响应数据类型，如果是Json,得到响应后自动解析响应体数据
* response 响应体数据，类型取决于responseType的指定
* timeout 设置响应超时时间，默认为0代表没有时间限制
* ontimeout 绑定响应超时回调
* onerror 绑定请求网络错误的监听
* open() 初始化一个请求
  * 参数
    * method-string
    * url-string
    * [async]-bool
      * true	异步
      * false  同步
* send(data) 发送请求
  * 发送同步请求时，send会阻塞后续代码执行，直到请求结束
* abort() 中断
* getResponseHeader(name) 获取指定名称的响应头的值
* getAllResponseHeaders() 获取响应头组成的字符串
* setRequestHeader(name,value) 设置请求头

