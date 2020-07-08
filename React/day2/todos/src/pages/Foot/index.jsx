import React from 'react'


import './index.css'
class Foot extends React.Component {
    handleChange=flag=>()=>{
        this.props.footnum.allOrNot(flag)
    }
   
    render() {
        let {all,checked} = this.props.footnum
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={all === checked} onChange={this.handleChange(all === checked)} />
                </label>
                <span>
        <span>已完成{checked}</span> / 全部{all}
                </span>
                <button className="btn btn-danger" onClick={this.props.footnum.delAllDone}>清除已完成任务</button>
            </div>
        )
    }
}

export default Foot