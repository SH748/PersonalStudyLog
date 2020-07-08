import React from 'react'

export default class Position extends React.Component{
    state={
        x:0,
        y:0
    }
    handleMousemove=e=>{
        console.log(e);
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.handleMousemove)
    }
    render(){
        return this.props.render(this.state)
    }
}