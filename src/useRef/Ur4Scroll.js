import React, { useRef, useState } from 'react'

const Ur4Scroll = () => {

    const myref = useRef(null)

    function scrollIndex(index) {
        const listNOde = myref.current;

        const imgNode = listNOde.querySelectorAll("li > img")[index]
        imgNode.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }
    return (
        <div>
            <br /><br /><br />
            <nav>
                <button onClick={() => scrollIndex(0)}>Tom</button>
                <button onClick={() => scrollIndex(1)}>Raju</button>
                <button onClick={() => scrollIndex(2)}>Sheru</button>
            </nav>
            <div>
                <ul ref={myref}>
                    <li>
                        <img src="https://placekitten.com/g/200/200" alt="Tom" />
                    </li>
                    <li>
                        <img src="https://placekitten.com/g/300/200" alt="Raju" />
                    </li>
                    <li>
                        <img src="https://placekitten.com/g/250/200" alt="Sheru" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Ur4Scroll