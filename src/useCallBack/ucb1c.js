import React from 'react'

const Ucb1c = ({ boost }) => {
    console.log("child rendredrtgr")
    return (
        <div>
            <button onClick={boost}>handleMegaBoost</button>
        </div>
    )
}

export default React.memo(Ucb1c)