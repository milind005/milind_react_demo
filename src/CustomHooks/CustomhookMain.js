import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import "./chook.css"
import CopyClipexm from './CopyClipexm'


const CustomhookMain = () => {

    return (
        <div className='main'>
            <div className="sidenav">
                <Link to="/copyToCLipboard">Copy simple</Link>
                <Link href="">Ram</Link>
                <Link href="">Ram</Link>
                <Link href="">Ram</Link>
                <Link href="">Ram</Link>
            </div>
            <div>
                <Routes>


                    <Route path="/" element={<h3>This is default path i got</h3>} />
                    <Route path="/copyToCLipboard" element={<CopyClipexm />} />
                </Routes>
            </div>
        </div >
    )
}

export default CustomhookMain