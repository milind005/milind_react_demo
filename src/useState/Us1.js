import React, { useState } from 'react'

const Us1 = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("hello")
    const [check, setChek] = useState(false)

    return (
        <div>Us1

            <button
                onClick={() => setCount(c => c + 1)}
            >you clicked me {count} times</button>
            <br />
            <hr />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setText("hello")}>Reset</button>
            <h4>{text}</h4>

            <br />
            <hr />
            <input type="checkbox" checked={check} onChange={() => setChek(!check)} /> like
            <h4>you {check ? "liked" : "dont liked"}  this page</h4>
        </div>
    )
}

export default Us1