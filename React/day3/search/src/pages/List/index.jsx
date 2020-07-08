import React, { Component } from 'react'

import './index.css'

import PubSub from "pubsub-js"
import {TOPIC} from '../../context.js'

export default class List extends Component {
  state={
    items:[]
  }
  componentDidMount(){
    let that = this
     this.token = PubSub.subscribe(TOPIC, function (msg, data) {
      that.setState({
        items:data
      })
  });
  }
  render() {
    return (
      <div className='row'>
        {this.state.items.map(item=>(
           <div className='card' key={item.id}>
           <a target='_blank'>
             <img
               src={
                 item.avatar_url
               }
               style={{ width: 100, height: 100 }}
             />
           </a>
           <p className='card-text'>{item.login}</p>
         </div>
        ))}
      </div>
    )
  }
}
