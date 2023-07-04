import React, { useRef, useState } from 'react'

const URTimer = () => {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervelID = useRef(null)

    const startFun = () => {
        setStartTime(Date.now())
        setNow(Date.now)

        clearInterval(intervelID.current)
        intervelID.current = setInterval(() => {
            setStartTime(Date.now())
        }, 10)
    }

    const stopTime = () => {
        clearInterval(intervelID.current)

    }

    let diffrenceTime = 0;
    if (startTime !== null && now !== null) {
        diffrenceTime = (now - startTime) / 1000
    }


    return (
        <div>
            <h1>Timer:{diffrenceTime.toFixed(3)}</h1>
            <button onClick={startFun}>Start</button>
            <button onClick={stopTime}>Stop</button>
        </div>
    )
}

export default URTimer