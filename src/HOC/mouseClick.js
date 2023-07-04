import React, { useState } from 'react'
import WithCounter from './withCounter'

const MouseClick = (props) => {
    const { counter, incrementCounter, name } = props
    console.log("secretVal:", props.raje)
    return (
        <div>
            <p style={{ fontSize: counter }}>by click:{counter}</p>
            <h3>Name is:{name} </h3>
            <button onClick={() => incrementCounter()}>increse size by click</button>
        </div>
    )
}

export default WithCounter(MouseClick, 10)



