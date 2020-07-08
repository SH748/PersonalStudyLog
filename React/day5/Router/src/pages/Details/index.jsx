import React from 'react'

export default class Details extends React.Component {
    render() {
        console.log(this);
        return (
            <>
                <span  className="label label-primary">Details</span>
                <div style={{marginTop:10}}>
                    Details-----------{this.props.match.params.id}
                </div>
            </>
        )
    }
}
