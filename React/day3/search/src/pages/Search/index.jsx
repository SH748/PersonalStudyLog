import React, { Component } from 'react'

import axios from 'axios'

import PubSub from "pubsub-js"
import {TOPIC} from '../../context.js'


export default class Search extends Component {
  state={
    keyword:''
  }
   search=()=>{
     axios.get('/api/search/users',{
      params:this.state.keyword
    }).then(v=>{
      console.log(v.data);
      PubSub.publish(TOPIC, v.data.items);
    },r=>{
      console.log(r);
    })
  }
  handleChange=e=>{
    this.setState({
      keyword:e.target.value.trim()
    })
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input type='text' placeholder='enter the name you search' value={this.state.keyword} onChange={this.handleChange} />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
