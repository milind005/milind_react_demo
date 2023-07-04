import React, { useEffect, useState } from 'react'
import { createConnection } from './chat'

const Chatroom = ({ roomId }) => {
    const [serverUrl, setServerUrl] = useState("'https://localhost:1234'")

    useEffect(
        () => {
            const connection = createConnection(serverUrl, roomId)
            connection.connect()
            return () => {
                connection.disconnect()
            }
        }
        , [serverUrl, roomId])

    return (
        <>
            Server Url
            <input type=""
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
            />
            <h1>Welcome to {roomId} room</h1>
        </>
    )

}





const Chatconn = () => {
    const [roomId, setRoomId] = useState("general")
    const [show, setshow] = useState(false)
    console.log(roomId)
    return (
        <div>
            <label >Choose the chat room :{" "}
                <select
                    onChange={(e) => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button
                onClick={() => setshow(!show)}
            >
                {show ? "close chat" : "open chat"}
            </button>
            <br />
            <br />
            {show && <Chatroom roomId={roomId} />}

        </div>
    )
}

export default Chatconn