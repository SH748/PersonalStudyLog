import React from 'react';


export default class Item extends React.Component{
    render(){
        console.log(this);
        return (
        <h2>Item{this.props.num&&this.props.num}</h2>
        )
    }
}