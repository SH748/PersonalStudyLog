import React from "react"
import { Link, Route, Redirect } from "react-router-dom"
import Item from "../Item"
import News from '../News'
import Message from "../Message"
export default class Home extends React.Component {
    render() {
        return (
            <>
                <span className="label label-default">Home</span>
                <nav className="nav nav-tabs">
                    <li role="presentation"><Link to="/Home/Item1" >Item1</Link></li>
                    <li role="presentation"><Link to="/Home/Item2" >Item2</Link></li>
                    <li role="presentation"><Link to="/Home/Message" >Messages</Link></li>
                    <li role="presentation"><Link to="/Home/News" >News</Link></li>
                </nav>
                <Route path="/Home/Item1" render={() => (
                    <Item num={1}></Item>
                )}></Route>
                <Route path="/Home/Item2" render={() => (
                    <Item num={2}></Item>
                )}></Route>
                <Route path="/Home/News" component={News}></Route>
                <Route path="/Home/Message" component={Message}></Route>
            </>
        )
    }
}