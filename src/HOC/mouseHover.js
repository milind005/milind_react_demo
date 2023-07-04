import React, { useState } from 'react'
import WithCounter from './withCounter'

const MouseHover = (props) => {
    const { counter, incrementCounter, name } = props
    return (
        <div>
            <p style={{ fontSize: counter }}>by hover:{counter}</p>
            <h3>Name:{name}</h3>
            <button onMouseOver={() => incrementCounter()}>increse size by hovering here</button>
        </div>
    )
}
export default WithCounter(MouseHover, 5)