import React from 'react'
import { Link, Route } from 'react-router-dom'
import Details from '../Details'

export default class Messages extends React.Component {
    state = {
        messageList: [
            { id: 1, title: "message1" },
            { id: 2, title: "message2" },
            { id: 3, title: "message3" },
            { id: 4, title: "message4" },
            { id: 5, title: "message5" },
            { id: 6, title: "message6" },
            { id: 7, title: "message7" },
        ]
    }
    render() {
        return (
            <>
                <span className="label label-primary">Messages</span>
                <div style={{ marginTop: 10 }}>
                    {this.state.messageList.map(message => (
                        <li key={message.id}>
                            <Link to={"/home/messages/" + message.id}>{message.title}</Link>
                        </li>
                    ))}
                    <div style={{marginTop:10}}>
                        <Route path="/home/messages/:id?" component={Details}></Route>
                    </div>
                </div>
            </>
        )
    }
}
