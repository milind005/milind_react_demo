import React, { useEffect, useState } from 'react'

const UE2 = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    WindowsEventHandle("pointermove", (e) => {
        setPos({ x: e.clientX, y: e.clientY })
    })
    return (
        <div>
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} />

        </div>
    )
}

export default UE2




function WindowsEventHandle(event, handlerFun) {
    useEffect(() => {
        window.addEventListener(event, handlerFun)
        return () => {
            window.removeEventListener(event, handlerFun)
        }
    }, [event, handlerFun])
}