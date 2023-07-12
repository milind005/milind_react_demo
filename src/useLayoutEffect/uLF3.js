import React, { useLayoutEffect, useRef, useState } from 'react'

const ULF3 = () => {

    // create a ref
    const [count, setCount] = useState(null)
    const divElement = useRef();

    // trigger on the first render of the component 
    useLayoutEffect(() => {
        // get the height of the div element
        const thing = divElement.current.offsetHeight
        setCount(thing)
        console.log(
            "The height of the div is: ", divElement.current.offsetHeight
        );
    }, []);

    return (
        <div ref={divElement}>
            <h1>Learn about useRef!</h1><h3>"The height of the div is: ", {count} messured by useLayout Effect</h3>
        </div>
    );
}

export default ULF3