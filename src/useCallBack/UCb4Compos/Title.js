import React from 'react'

const Title = () => {
    console.log("Title Rendering");
    return (
        <div>
            <h2> Simple Salary app see the console for result</h2>
        </div>
    );
}

export default React.memo(Title)


