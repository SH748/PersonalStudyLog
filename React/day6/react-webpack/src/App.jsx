import React from 'react'

function AAA (){
  return (
    (()=>{
      console.log("AAA");
      return (<div>AAA</div>)
    })()
  )
}

import { BrowserRouter,Link ,Route} from './myReactRouter'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h1>react</h1>
        <Link to="/aaa">11111111</Link>
        <Route path="/aaa" component = {AAA} exacter ></Route>
      </BrowserRouter>
    )
  }
}

export default App
