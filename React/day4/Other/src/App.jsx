import React from 'react'

import Com from './pages/showUpdate'
import Pur from './pages/purComponent'
import PD from './pages/Portal'

class App extends React.Component {
  state={
    num:0,
    isShow:false
  }
  render() {
    return (
      <>
        <h1>react</h1>
        <Com {...this.state}></Com>
        <button onClick={()=>{this.setState({num:this.state.num + 1})}}>click</button>
        <hr/>
        <Pur></Pur>
        <PD></PD>
      </>
    )
  }
}

export default App
