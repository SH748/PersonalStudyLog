import React, { Component } from 'react'

import { Table} from 'element-react'
import 'element-theme-default'
import store from '../../../stroe'
/**
 onMouseEnter={() => {
                            this.setState({
                                showDel: item.id
                            })
                        }} onMouseLeave={() => { this.setState({ showDel: null }) }}
 */
export class index extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.state.showDel = null
    }
    render() {
        return (
            <div>
                <Table
                    style={{ width: '100%' }}
                    data={this.state.todosReducer}
                    border={true}
                    height={250}
                    highlightCurrentRow={true}
                    onCurrentChange={item => { console.log(item) }}
                />
            </div>
        )
    }
}

export default index
