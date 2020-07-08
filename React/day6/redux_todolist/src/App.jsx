import React, { Component } from 'react'

import Todos from './pages/todos'


export class App extends Component {

    render() {
        return (
            <div style={{width:500,margin:"auto"}}>
                <Todos></Todos>
            </div>
        )
    }
}

export default App
