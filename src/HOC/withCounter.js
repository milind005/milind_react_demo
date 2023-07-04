import React, { useState } from "react";

const UpdateComponent = (ComingCompo, offset) => {

    function NewComponent(props) {
        const [counter, setCounter] = useState(10)


        return <ComingCompo
            name="milind"
            counter={counter}
            incrementCounter={() => setCounter(counter + offset)}
            {...props}
        />
    }
    return NewComponent
}
export default UpdateComponent

