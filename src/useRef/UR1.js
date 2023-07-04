import React, { useRef } from 'react'

const UR1 = () => {
    const myRef = useRef(25)

    return (
        <div>
            <button
                onClick={() => alert(myRef.current++)}
            >Click HEre</button>
            <h1>{myRef.current}</h1>
        </div>
    )
}

export default UR1