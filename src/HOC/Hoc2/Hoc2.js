import React from 'react'

import { Books, Songs, HBooks, HSongs } from './Higher'


const DB = {
    books: [
        { title: "Harry Potter", author: "Rowling" },
        { title: "Outlier", author: "Gladwell" }
    ],
    songs: [
        { title: "Du HAst", album: "Sehnsucht" },
        { title: "DeserRose", album: "Brand" },
    ]
}




const Hoc2 = () => {
    return (
        <div>
            <h1>App</h1>
            <Books books={DB.books} />
            <Songs songs={DB.songs} />
            <p>Here all following components are wraped in higher order component and using common functionality with arguments</p>
            <HBooks books={DB.books} />
            <HSongs songs={DB.songs} />
        </div>
    )
}

export default Hoc2