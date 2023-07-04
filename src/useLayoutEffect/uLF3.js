import React, { useLayoutEffect, useRef } from 'react'

const ULF3 = () => {

    // create a ref
    const divElement = useRef();

    // trigger on the first render of the component 
    useLayoutEffect(() => {
        // get the height of the div element
        console.log(
            "The height of the div is: ", divElement.current.offsetHeight
        );
    }, []);

    return (
        <div ref={divElement}>
            <h1>Learn about useRef!</h1>
        </div>
    );
}

export default ULF3