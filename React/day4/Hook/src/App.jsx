import React from 'react'

import Hello from './pages/HelloHook'
import Cat from './pages/Cat'
import Mouse from './pages/Mouse'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>react</h1>
        <Hello></Hello>
        <Cat></Cat>
        <Mouse></Mouse>
      </div>
    )
  }
}

export default App
