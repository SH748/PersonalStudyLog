import React, { Component } from 'react'

import context from './context'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
export class BrowserRouter extends Component {
    state = {
        location:'/'
    }
    render() {
        // const data = {...{history,match:{},location:this.state.location}}
        const data = {...history}
        return (
            <context.Provider value={data}>
                {this.props.children}
            </context.Provider>
        )
    }
    componentDidMount() {
        this.unListen = history.listen(location => {
            this.setState({
                location
            })
        })
    }
    componentWillUnmount(){
        this.unListen()
    }
}

export default BrowserRouter