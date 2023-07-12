import React, { useCallback, useMemo, useState } from 'react'
import Ucb1c from './ucb1c'

const Ucb1 = () => {
    const [count, setCount] = useState(0)

    let num = 0
    const addBoost = useCallback(() => {
        setCount((currentValue) => currentValue + 1234)
        num++
    }, []);
    return (
        <div>
            <h5>here useCallBAck stores the function Defination if it is stable and dont change betwin rerenders and passes it to child compo</h5>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click Add</button>
            <Ucb1c boost={addBoost} />
        </div>
    )
}

export default Ucb1