import React, { useMemo, useState } from 'react'

const Um3 = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)


    const incOne = () => setNum1(num1 + 1)
    const incTwo = () => setNum2(num2 + 1)
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 500000000) i++;
        return num1 % 2 === 0
    }, [num1])
    return (
        <div>
            <h4>exspensive calculation for num 1 is memoized when we update num 2 app not slows down </h4>
            <button onClick={incOne}>Inc One {num1}</button> {!isEven ? "Odd" : "Even"}
            <br />
            <button onClick={incTwo}>Inc two {num2}</button>
        </div>
    )
}

export default Um3