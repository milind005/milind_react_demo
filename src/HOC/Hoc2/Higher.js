import React from 'react'

const Songs = ({ songs }) => {
    return (
        <div>
            <h1>Songs</h1>
            <ul>
                {songs.map((cur) => <li><p>Book:{cur.title}/Album:{cur.album}</p></li>)}
            </ul>
        </div>
    )
}


const Books = ({ books }) => {

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((cur) => <li><p>Book:{cur.title}/Auther:{cur.author}</p></li>)}
            </ul>
        </div>
    )
}


const WithHIgher = (Component, bColor) => {
    return (props) => {
        return <div style={{ background: bColor }}>
            <Component {...props} />
        </div>
    }
}


const HBooks = WithHIgher(Books, "red")
const HSongs = WithHIgher(Songs, "yellow")

export { Songs, Books, HBooks, HSongs }