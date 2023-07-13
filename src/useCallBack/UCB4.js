import React, { useCallback, useState } from 'react'
import Button from './UCb4Compos/Button'
import Count from './UCb4Compos/Count'
import Title from './UCb4Compos/Title'


const UCB4 = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback(() => setAge(age + 1), [age])
    const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary])

    return (
        <div>
            <Title /><p>(title Compo)</p>
            <Count text="Age" count={age} /><p>(Count Compo 1)</p>
            <Button handleClick={incrementAge}>Increment my age</Button>(Button Compo1)
            <br />
            <br />
            <br />
            <Count text="salary" count={salary} /><p>(Count Compo 2)</p>
            <Button handleClick={incrementSalary}>Increment my Salary</Button>(Button Compo2)

            <p>Here due to useCAllback we memoized the function which is getting passed as prop only certain components rerenders which are updated see in console log </p>
        </div>
    )
}

export default UCB4





