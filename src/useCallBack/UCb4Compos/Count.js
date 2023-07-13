

import React from 'react'

const Count = (props) => {
    console.log("Count rendering");
    return (
        <div>
            {props.text} is {props.count}
        </div>
    );
}

export default React.memo(Count)