import React, { Component } from 'react'
import {Input,Button} from "antd"
import 'antd/dist/antd.css'
import 'element-theme-default'
export class index extends Component {
    render() {
        return (
            <div>
                <Input placeholder="今天要做什么？" /> <Button type="primary" icon="plus">增加</Button>
            </div>
        )
    }
}

export default index
