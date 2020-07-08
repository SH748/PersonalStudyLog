import {useState,useEffect} from 'react'

export default function (){

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    function handleMouseMove(e){
       setX(e.clientX)
       setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove)
        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove)
        }
    })

    return {x,y}
} 