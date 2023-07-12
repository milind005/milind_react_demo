import React from 'react'
import MouseClick from './mouseClick'
import MouseHover from './mouseHover'

const HocMain = () => {

    return (
        <div>

            <h3>Here the components are wrapped in HOC with offset and calling same function for state update</h3>
            <MouseClick raje="ram" />
            <MouseHover />
        </div>
    )
}

export default HocMain