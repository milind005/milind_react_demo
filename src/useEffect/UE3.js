import React from 'react'

const UE3 = ({ name }) => {
    document.title = `greet to ${name}`
    return (
        <div>
            <button
                onClick={() => { setTimeout(() => alert("yes thjis is alert"), 5000) }}
            >
                clic me for message
            </button>
        </div>
    )
}

export default UE3