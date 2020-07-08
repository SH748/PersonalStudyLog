import React from 'react'
class Form extends React.Component {
    state = {
        text: 'Hello',
        textArea: 'Hello',
        selectionValue: 1,
        checked: true
    }
    handleChange = name => e => {
        this.setState({
            [name]: name === "checked" ? e.target.checked : e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleChange('text')} />
                <br />
                <textarea value={this.state.textArea} onChange={this.handleChange('textArea')} cols="30" rows="10"></textarea>
                <br />
                <select value={this.state.selectionValue} onChange={this.handleChange('selectionValue')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange('checked')} />
            </div>
        )
    }
}

export default Form