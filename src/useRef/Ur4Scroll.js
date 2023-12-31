import React, { useRef } from 'react'

const Ur4Scroll = () => {

    const myref = useRef(null)
    const btnref = useRef(null)

    function scrollIndex(index) {
        const listNOde = myref.current;
        const navNOde = btnref.current;

        const imgNode = listNOde.querySelectorAll("li > img")[index]
        imgNode.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
        const btnNode = navNOde.querySelectorAll("button")
        btnNode.forEach((b) => { b.disabled = false })
        btnNode[index].disabled = true
    }
    return (
        <div >
            <br /><br /><br />
            <h1>click to scroll the image</h1>
            <nav ref={btnref}>
                <button onClick={() => scrollIndex(0)}>Tom</button>
                <button onClick={() => scrollIndex(1)}>Raju</button>
                <button onClick={() => scrollIndex(2)}>Sheru</button>
            </nav>
            <div>
                <ul ref={myref} style={{ border: "2px solid black", width: "200px", height: "300px", overflow: "hidden", display: "flex", margin: "auto" }}>
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
        </div >
    )
}

export default Ur4Scroll