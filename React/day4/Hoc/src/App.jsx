import React from 'react'

import Login from './pages/Login'
import Register from './pages/Register'
import Hoc from './pages/LORHoc'

import Mouse from './pages/Mouse'
import Cat from './pages/Cat'

import Position from './pages/renderProps'

const WithLogin = Hoc(Login)
const WithRegister = Hoc(Register)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>HOC</h1>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
        <h2>render props</h2>
        {/* <Mouse></Mouse>
        <Cat></Cat> */}
        <Position render={state=>(<Mouse {...state}></Mouse>)} ></Position>
        <Position render={state=>(<Cat {...state}></Cat>)} ></Position>
      </div>
    )
  }
}

export default App
