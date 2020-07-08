# Route

## 安装

    ```shell
    npm i react-router-dom
    ```

## 基本使用
1. 导入
   * import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
2. Link组件和Route组件
   * 使用Link组件渲染可跳转路由的元素
   * 使用Route组件渲染对应路由的组件
```javascrpit
    <Link to="/home" >Home</Link>
    <Link to="/about" >About</Link>

    <Route path="/home" component="XXX" ></Route>
    <Route path="/home" component="xxx" ></Route>
```

