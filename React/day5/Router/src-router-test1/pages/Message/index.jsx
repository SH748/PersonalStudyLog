import React from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from '../Detail'

export default class Messages extends React.Component {
    state = {
        messageList:[
            {
                id: 1,
                title:"message1"
            },
            {
                id: 2,
                title:"message2"
            },
            {
                id: 3,
                title:"message3"
            }
        ]
    }
    render() {
        return (
            <div>
                <h2>message</h2>
                {this.state.messageList.map(message=>{
                    return(
                        <li  key={message.id}><Link to={"/home/message/"+message.id}>{message.title}</Link></li>
                    )
                })}
                <br/>
                <button>添加</button>
                <button>修改</button>
                <br/>
                <Route path="/home/message/:id" component={Detail} ></Route>
            </div>
        )
    }
}