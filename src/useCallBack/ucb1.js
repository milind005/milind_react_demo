import React, { useCallback, useMemo, useState } from 'react'
import Ucb1c from './ucb1c'

const Ucb1 = () => {
    const [count, setCount] = useState(0)

    const addBoost = useCallback(() => setCount((currentValue) => currentValue + 1234), []);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click Add</button>
            <Ucb1c boost={addBoost} />
        </div>
    )
}

export default Ucb1