import React, { useState } from 'react'

const Uform = () => {
    const [inputs1, setInput1] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    })

    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })


    return (
        <div>
            <div className="simpleForm">
                <h1>simple Form</h1>
                <label>
                    First Name:
                    <input type='text'
                        value={inputs1.firstName}
                        onChange={(e) => setInput1({ ...inputs1, firstName: e.target.value })} />
                </label>
                <label>
                    Last Name:
                    <input type='text'
                        value={inputs1.lastName}
                        onChange={(e) => setInput1({ ...inputs1, lastName: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type='email'
                        value={inputs1.email}
                        onChange={(e) => setInput1({ ...inputs1, email: e.target.value })} />
                </label>

                <h3>i am {inputs1.firstName}  {inputs1.lastName} and my email is {inputs1.email}</h3>
            </div>
            <div className="nestedForm">
                <h1>Nested Form</h1>

                <label>
                    Name:
                    <input type='text'
                        value={person.name}
                        onChange={(e) => setPerson({ ...person, name: e.target.value })} />
                </label>
                <label>
                    Title:
                    <input type='text'
                        value={person.artwork.title}
                        onChange={(e) => setPerson({
                            ...person,
                            artwork: { ...person.artwork, title: e.target.value }
                        })} />
                </label>
                <label>
                    City:
                    <input type='text'
                        value={person.artwork.city}
                        onChange={(e) => setPerson({
                            ...person,
                            artwork: { ...person.artwork, city: e.target.value }
                        })} />
                </label>
                <label>
                    Image:
                    <input type='text'
                        value={person.artwork.image}
                        onChange={(e) => setPerson({
                            ...person,
                            artwork: { ...person.artwork, image: e.target.value }
                        })} />
                </label>


                <h4>{person.artwork.title} by {person.name} </h4>
                <h5>(located in {person.artwork.city})</h5>
                <img src={person.artwork.image} alt="image here" />
            </div>
        </div>
    )
}

export default Uform