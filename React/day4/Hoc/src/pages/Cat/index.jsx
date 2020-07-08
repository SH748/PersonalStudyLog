import React from 'react'
import imgUrl from '../../assets/cat.gif'

export default class Cat extends React.Component{
    render (){
        let {x,y} = this.props
        return (
            <div>
                <img src={imgUrl} style={{position:'absolute',top:y-20,left:x+100, width:80,height:80}}></img>
            </div>
        )
    }
}