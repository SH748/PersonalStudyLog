import React from 'react'
import { Link, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Messages from '../Messages'
import News from '../News'
export default class Home extends React.Component {
    handlePush = () => {
        this.props.history.push('/home/messages/8')
    }
    handleReplace = () => {
        this.props.history.replace('/About')
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <span className="label label-primary">Home</span>
                    <br />
                    <nav className="nav nav-pills" style={{ marginTop: 10 }}>
                        <li role="presentation"> <Link to="/home/messages" className="one-pan-link-mark">Message</Link></li>
                        <li role="presentation">  <Link to="/home/news" className="navbar-item">News</Link></li>
                        <Redirect to="/home/messages"></Redirect>
                    </nav>
                    <button onClick={this.handlePush}>添加</button>
                    <button onClick={this.handleReplace}>To About</button>
                    <div style={{ marginTop: 10 }}>
                        <Route path="/home/messages" component={Messages} ></Route>
                        <Route path="/home/news" component={News} ></Route>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
