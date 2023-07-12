import React, { useLayoutEffect, useState } from 'react'

const ULF2 = () => {

    const [valu1, setValu1] = useState(0)
    const [valu2, setValu2] = useState(0)
    useLayoutEffect(() => {
        if (valu1 === 0) {
            setValu1(10 + Math.random() * 2000)
        }
    }, [valu1]);

    useLayoutEffect(() => {
        if (valu2 === 0) {
            setValu2(10 + Math.random() * 2000)
        }
    }, [valu2]);

    return (
        <div>
            <button
                style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px" }}
                onClick={() => setValu1(0)}
            >
                use Layout Effect random number{valu1}
            </button>
            <h3 style={{ backgroundColor: "yellow" }}>{valu1}</h3>
            <h4>The fickring is avoided by UseLayout Effect because it is syncronous</h4>
            <button
                style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px" }}
                onClick={() => setValu2(0)}
            >
                use Efect random number{valu2}
            </button>
            <h3 style={{ backgroundColor: "yellow" }}>{valu2}</h3>
        </div>
    )
}

export default ULF2

