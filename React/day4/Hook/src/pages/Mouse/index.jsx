import React from 'react'
import imgUrl from '../../assets/mouse.gif'
import mousePosition from "../Hook/MoustPosition"
export default function Mouse(){
    let {x,y} = mousePosition()
    return (
        <div>
            <img src={imgUrl} style={{position:'absolute' , top:y , left:x,width:50 ,height:50 }}/>
        </div>
    )
}