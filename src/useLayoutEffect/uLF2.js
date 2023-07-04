import React, { useLayoutEffect, useState } from 'react'

const ULF2 = () => {

    const [valu, setValu] = useState(0)
    useLayoutEffect(() => {
        if (valu === 0) {
            setValu(10 + Math.random() * 2000)
        }
    }, [valu]);
    console.log(valu)
    return (
        <div>
            <button
                style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px" }}
                onClick={() => setValu(0)}
            >
                random number{valu}
            </button>
        </div>
    )
}

export default ULF2

