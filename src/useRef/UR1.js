import React, { useRef, useState } from 'react'

const UR1 = () => {
    let number = 8
    let myRef = useRef(25)
    const [count, setCount] = useState(0)

    function stateadd() {
        number++
        myRef.current++
        setCount(count + 1)
    }

    function stateLessAdd() {
        number++
        myRef.current++

    }


    return (
        <div>
            <button onClick={stateadd} >Add with Render</button>
            <button onClick={stateLessAdd} >Add with non render</button>
            <p> reference maintained betwin renders</p>
            <h1>Ref:{myRef.current}</h1>
            <p> every time re renders normal variable initializes</p>
            <h1>Number:{number}</h1>
            <h1>StateCount:{count}</h1>
        </div>
    )
}

export default UR1