import React, { memo, useState } from 'react'

const MemoFun = () => {
    const [count, setCount] = useState(0)
    const [scount, setScount] = useState(0)



    const INCR = () => {
        setCount(count + 1)
    }


    console.log("first value renders")
    return (
        <div>
            <h1>first {count}</h1>
            <button onClick={INCR}>Inc Second Count</button>
            <RK scount={scount} setScount={setScount} />
        </div >
    )
}

export default MemoFun


const RK = memo(function Rakesh({ scount, setScount }) {
    console.log("rCHild Renders")
    return (
        <>
            <h1>{scount}</h1>
            <button onClick={() => setScount(scount + 1)}>increse Second</button>
        </>
    )
})