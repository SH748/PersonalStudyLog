import React from 'react'

export default class Pur extends React.PureComponent {
    state = {
        obj: {
            num: 0
        }
    }
    render() {
        return (
            <>
                <h2>PureComponent</h2>
                <p>obj.num:{this.state.obj.num}</p>
                <button onClick={()=>{
                    let obj = this.state.obj
                    obj.num = obj.num + 1
                    this.setState({
                        obj
                    })
                 }}>click</button>
            </>
        )
    }
}