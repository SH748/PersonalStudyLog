import React, { useState } from 'react'

export default function Hello() {

    const [hello] = useState("Hello Hook")
    const [num, setNum] = useState(0)
    function handleChange(){
        // setNum(++num) useState中声明出来的state是只读的，不能直接修改赋值，所以不能使用++XXX
        setNum(num+1)
    }

    return (
        <div>
            <h1>{hello}</h1>
            <p>{num}</p>
            <button onClick={handleChange}>点击</button>
        </div>
    )
}