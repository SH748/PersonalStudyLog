import React from 'react'

import Modal from '../../compantents/Modal.jsx'

export default class PD extends React.Component{
    state={
        show:false
    }
    handelClick=()=>{
        console.log(123);
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.handelClick}>show or hidden</button>
                {this.state.show&&(<Modal handelClick={this.handelClick} ></Modal>)}
            </div>
        )
    }
}