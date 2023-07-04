import React, { Children, createContext, useContext, useState } from 'react'

const user = createContext(null)
const theme = createContext(null)


const UCon2 = () => {

    const [myTheme, setMyTheme] = useState("light")
    const [myUser, setMyUser] = useState("milind")
    console.log(myUser)
    return (
        <div>
            <button
                onClick={() => setMyTheme(myTheme === "light" ? "dark" : "light")}
            >{myTheme === "light" ? "dark" : "light"}</button>
            <user.Provider value={{ myUser, setMyUser }}>
                <theme.Provider value={myTheme}>
                    <Panel >
                        <Users />
                        <MessageBox />
                    </Panel>
                </theme.Provider>
            </user.Provider>
        </div>
    )
}

export default UCon2


function Users() {
    const { myUser, setMyUser } = useContext(user)

    function changeUser(usr) {
        setMyUser(usr)
    }
    console.log(myUser)
    return (
        <div>
            <Button val="Milind" changeUser={changeUser}>Milind</Button>
            <Button val="Ram" changeUser={changeUser}>Ram</Button>
            <Button val="Sham" changeUser={changeUser}>Sham</Button>
        </div>
    )
}



function Button({ val, changeUser, children }) {
    const { myUser, setMyUser } = useContext(user)

    const myTheme = useContext(theme)

    return (
        <button
            onClick={(e) => changeUser(val)}

            style={(myTheme === "dark") ? { color: "white", backgroundColor: "gray", } : {}}
            disabled={myUser === val}
        > {children}</button >
    )
}

function Panel({ children }) {
    const myTheme = useContext(theme)

    return (
        <div style={(myTheme === "dark") ? { backgroundColor: "black" } : {}}>
            {children}
        </div>
    )
}

function MessageBox() {
    const myTheme = useContext(theme)
    const { myUser, setMyUser } = useContext(user)
    return (
        <>
            <textarea name="" id="" cols="30" rows="10"
                placeholder={`${myUser} is typing`}
                style={(myTheme === "dark") ? { color: "white", backgroundColor: "gray" } : {}}
            ></textarea>
            <button>Send</button>
        </>
    )
}