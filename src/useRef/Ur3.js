import React, { useRef } from 'react'

const Ur3 = () => {
    const milindRef = useRef(null)

    return (
        <div>
            <input type="text" ref={milindRef} />
            <button onClick={() => milindRef.current.focus()}>focus</button>
        </div>
    )
}

export default Ur3