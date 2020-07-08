import React from 'react';

export default class Register extends React.Component{
    render (){
        return (
            <div>
                <h2>Register</h2>
                <form action="">
                    <label >
                        用户名<input type="text" name="name" value={this.props.name} onChange={this.props.handleChange("name")} />
                    </label>
                    <br/>
                    <label >
                        密码<input type="password" name="password" value={this.props.password} onChange={this.props.handleChange("password")} />
                    </label>
                    <br/>
                    <label >
                        确认密码<input type="repassword" name="repassword" value={this.props.repassword} onChange={this.props.handleChange("repassword")} />
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}