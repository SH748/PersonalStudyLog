import React from 'react'
import imgUrl from '../../assets/cat.gif'
import mousePosition from "../Hook/MoustPosition"
export default function Cat(){
    let {x,y} = mousePosition()
    return (
        <div>
            <img src={imgUrl} style={{position:'absolute' , top:y-20 , left :x+50 ,width:60,height:60}}/>
        </div>
    )
}