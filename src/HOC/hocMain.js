import React from 'react'
import MouseClick from './mouseClick'
import MouseHover from './mouseHover'

const HocMain = () => {

    return (
        <div>
            HOC
            <MouseClick raje="ram" />
            <MouseHover />
        </div>
    )
}

export default HocMain