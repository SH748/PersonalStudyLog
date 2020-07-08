import React from 'react'
import imgUrl from '../../assets/mouse.gif'

export default class Cat extends React.Component{
    render (){
        let {x,y} = this.props
        return (
            <div>
                <img src={imgUrl} style={{position:'absolute',top:y,left:x+30, width:50,height:50}}></img>
            </div>
        )
    }
}