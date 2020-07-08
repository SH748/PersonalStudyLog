import React, { Component } from 'react'

import context from './context'

export class Route extends Component {

    render() {
        console.log("Route 渲染");
        const MyComponent =  this.props.component;
        return (
            <context.Consumer>
                {
                    data=>{
                        console.log(this.props);
                        if((this.props.exacter&& data.location.pathname===this.props.path)||data.location.pathname.startsWith(this.props.path)){
                            return <MyComponent></MyComponent>
                        }
                        return null
                    }
                }
            </context.Consumer>
        )
    }
}

export default Route
