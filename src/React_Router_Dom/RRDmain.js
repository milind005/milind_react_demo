import ReactDOM from 'react-dom';
import { NavLink, Route, Routes, Switch } from 'react-router-dom';
import "./RRD.css"


import React from 'react'

const Home = () => {
    return (
        <div>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    )
}
const BHome = () => {
    return (
        <div>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    )
}
const Stuff = () => {
    return (
        <div>
            <h2>STUFF</h2>
            <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
            <ol>
                <li>Nulla pulvinar diam</li>
                <li>Facilisis bibendum</li>
                <li>Vestibulum vulputate</li>
                <li>Eget erat</li>
                <li>Id porttitor</li>
            </ol>
        </div>
    )
}
const BStuff = () => {
    return (
        <div>
            <h2>STUFF</h2>
            <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
            <ol>
                <li>Nulla pulvinar diam</li>
                <li>Facilisis bibendum</li>
                <li>Vestibulum vulputate</li>
                <li>Eget erat</li>
                <li>Id porttitor</li>
            </ol>
        </div>
    )
}
const Contact = () => {
    return (
        <div>
            <h2>GOT QUESTIONS?</h2>
            <p>The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
            </p>
        </div>
    )
}
const Another = () => {
    return (
        <div>
            <nav id="navbar">
                <ul className="header">
                    <li>
                        <NavLink exact to="/Another" >Home</NavLink>

                        <NavLink to="/Another/Stuff">Stuff</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="content">

            </div>
            <Routes>

                <Route path="/Stuff" element={<BStuff />}></Route>
                <Route path='/' element={<BHome />}></Route>


            </Routes>
        </div>

    )
}



const RRDmain = () => {
    console.log()
    return (
        <div className='routingEnv'>


            <nav id="navbar">
                <ul className="header">
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                        <NavLink to="/Stuff">Stuff</NavLink>
                        <NavLink to="/Another">Another</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="content">

            </div>
            <Routes>

                <Route path='/' element={
                    <>
                        <Home />
                        <Contact />
                    </>
                }></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Stuff" element={<Stuff />}></Route>
                <Route path="/Another" element={<Another />}></Route>

            </Routes>

        </div>
    )
}

export default RRDmain