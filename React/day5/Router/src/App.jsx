import React, { Component } from 'react'
import { Link, BrowserRouter ,NavLink, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Router</h1>
          <hr />
          <div className="row">
            <div className="col-xs-2">
              <ul className="list-group">
                <NavLink to="/home" activeClassName="active" className="list-group-item">Home</NavLink>
                <NavLink to="/about" activeClassName="active" className="list-group-item">About</NavLink>
                <Redirect to="/Home"></Redirect>
              </ul>
            </div>
            <div className="col-xs-8 col-xs-push-1">
              <Route path="/home" component={Home}></Route>
              <Route path="/About" component={About}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
