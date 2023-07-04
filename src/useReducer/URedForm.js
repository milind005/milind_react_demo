import React, { useReducer } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                age: state.age + 1
            }
        }
        case "change_name": {
            return {
                ...state, name: action.nextName
            }
        }

        default:
            return state;
    }


}


const URedForm = () => {
    const [state, dispatch] = useReducer(reducer, { name: "milind", age: 10 })

    return (
        <div>
            <h1>Simple form</h1>
            <h3>your name is {state.name} and age is {state.age}</h3>
            <input type="text"
                value={state.name}
                onChange={(e) => dispatch({ type: "change_name", nextName: e.target.value })}
            />
            <button
                onClick={() => dispatch({ type: "INC" })}
            >Increse</button>
        </div>
    )
}

export default URedForm