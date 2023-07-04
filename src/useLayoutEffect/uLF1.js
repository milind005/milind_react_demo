import React, { useEffect, useLayoutEffect, useState } from 'react'

const ULF1 = () => {
    const [title, setTitle] = useState("milind")

    useEffect(() => {
        if (title === "milind") {
            setTitle("raje")
        }
        console.log("use Effect runs")
        return () => console.log("use layoutEffect is gone")
    }, [title])

    useLayoutEffect(() => {
        if (title === "milind") {
            setTitle("raje")
        }
        console.log("use Layout Effect runs")
        return () => console.log("use Effect is gone")

    }, [title])

    return (
        <div>
            <h1>This is screen of {title}</h1>
        </div>
    )
}

export default ULF1