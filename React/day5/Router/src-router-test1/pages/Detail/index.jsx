import React from 'react'

export default class Details extends React.Component{
    render(){
        return (
        <div>details~~~~~~~~~~{this.props.match.params.id} </div>
        )
    }
}