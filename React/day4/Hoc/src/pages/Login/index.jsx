import React from 'react';
import Hoc from '../LORHoc'

@Hoc
export default class Login extends React.Component{
    render (){
        return (
            <div>
                <h2>Login</h2>
                <form action="">
                    <label >
                        用户名<input type="text" name="name" value={this.props.name} onChange={this.props.handleChange("name")} />
                    </label>
                    <br/>
                    <label >
                        密码<input type="password" name="password" value={this.props.password} onChange={this.props.handleChange("password")} />
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}