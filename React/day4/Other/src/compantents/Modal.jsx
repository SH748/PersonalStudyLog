import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './modal.css'
export default class Modal extends Component {
  constructor(){
    super()
    this.container = document.createElement("div")
    this.container.className += "modal-container"
  }
  render() {
    console.log(this);
    let node = (
      <div className='mask'>
        <button onClick={this.props.handelClick}>隐藏</button>
        <div className='modal'>我是模态框</div>
      </div>
    )
    return ReactDOM.createPortal(node,this.container)
  }
  componentDidMount() {
    document.body.appendChild(this.container)
  }
  componentWillUnmount(){
    document.body.removeChild(this.container)
  }
}
