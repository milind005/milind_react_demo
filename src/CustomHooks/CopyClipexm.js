import React, { useState } from 'react'

const CopyClipexm = () => {
    return (
        <div><CopyClipexm /></div>
    )
}

export default CopyClipexm


function CLipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false)

    function copyToclip(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.
        }
    }

    return (
        <div>
            <input type="text" value={copyText} readOnly />
            <button>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
    )
}