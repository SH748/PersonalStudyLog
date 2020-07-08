import React, { Component } from 'react'

    class ShouldCompontentUpdate extends Component {
    state={
        num:0
    }
    render() {
        console.log("scu组件render被调用，组件渲染");
        return (
            <>
                <h2>shouldComponentUpdate</h2>
                <h2>state.num:{this.state.num}</h2>
                <h2>props.num:{this.props.num}</h2>
            </>
        )
    }
    componentDidUpdate(){
        console.log("scu组件 componentDidUpdate被调用，更新完成");
    }
    // async shouldComponentUpdate(){

    //     let result = await new Promise((resovle,reject)=>{
    //         setTimeout(()=>{
    //             resovle(true)
    //         },10000)
    //     })1

    //     return result

    // }
    shouldComponentUpdate(props,state){
        console.log(props,state);
        if(this.props.num%2===0){
            return true
        }
        return false
    }
}

export default ShouldCompontentUpdate
