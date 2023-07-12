import React, { useEffect, useState } from 'react'

const UE2 = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useWindowsEventHandle("dblclick", (e) => {
        setPos({ x: e.clientX, y: e.clientY })
    })

    useEffect(() => {
        console.log("dot renders")
    }, [pos])
    return (
        <div>
            <h1>Double click any where</h1>
            <h3>here position changes on mouse double click for dot  and useEffect runs in custom hook updates position state</h3>

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
                border: "5px solid black"
            }} />


        </div>
    )
}

export default UE2




function useWindowsEventHandle(event, handlerFun) {
    useEffect(() => {
        window.addEventListener(event, handlerFun)
        return () => {
            window.removeEventListener(event, handlerFun)
        }
    }, [event, handlerFun])
}