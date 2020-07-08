import React from 'react';

export default function Hoc(Compontent){
    return class  extends React.Component{
        static displayName = `Hoc(${Compontent.displayName || Compontent.name || 'Compontent'})`
        state={
            name:'',
            password:'',
            repassword:''
        }
        handleCheck=type=>()=>{
            if(type === 'Login'){
                console.log("login");
            }else if(type=== 'Register'){
                console.log("register");
            }
        }
        handleChange=name=>e=>{
            this.setState({
                [name]:e.target.value
            })
        }
        render (){
            return (
                <Compontent {...this.state} handleCheck={this.handleCheck} handleChange={this.handleChange} />
            )
        }
    }
}