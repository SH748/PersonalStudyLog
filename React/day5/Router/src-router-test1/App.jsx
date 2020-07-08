import React from 'react'

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>react-router-dom</h1>
          <hr />
          <div className="row">
            <nav className="col-xs-3 list-group"  >
              <Link to="/home" className="list-group-item" >HOME</Link>
              <Link to="/about" className="list-group-item" >ABOUT</Link>
            </nav>
            {/* 半匹配  正则： ${path}* */}
            {/* 
            * path和pathName
              path: route便签中的path属性的值
              path: 浏览器中的路由名
            匹配规则: 
              模糊匹配：默认
                当pathName是以path开头，对应path的Route就会别渲染  
              精确匹配：
                pathName是什么就渲染对应的Route
                开启方式：
                  在Route标签中写入exact(只有写了exact的Route标签才会开启精确匹配)
          */}

            {/* <Route path="/" component={Home} exact ></Route> */}
            <div className="col-xs-8">
              <Route path="/Home" component={Home} ></Route>
              <Route path="/About" component={About}></Route>
              <Redirect to="/Home"></Redirect>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
