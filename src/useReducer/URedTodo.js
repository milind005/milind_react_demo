import { type } from '@testing-library/user-event/dist/type';
import React, { useId, useReducer, useState } from 'react'




let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];

const reducer = (todos, action) => {
    switch (action.type) {
        case "addTodo": {
            return [
                ...todos, {
                    id: nextId++,
                    text: action.text,
                    done: false
                }
            ]
        }
        case "editTodo": {

            return todos.map((cur) => {
                if (cur.id === action.id) {
                    return action.todo
                }
                else {
                    return cur
                }
            })
        }
        case "deteTodo": {
            return todos.filter((cur) => cur.id !== action.id)
        }
        default:
            return todos
    }
}




const URedTodo = () => {
    const [todos, dispatch] = useReducer(reducer, initialTasks)

    function addTodo(text) {
        dispatch({ type: "addTodo", text })
    }

    function onEdit(id, todo) {
        dispatch({ id, todo, type: "editTodo" })
    }

    function deleteTodo(id) {
        dispatch({ id, type: "deteTodo" })
    }


    return (
        <div>
            <Editor addTodo={addTodo} />
            <List todos={todos}
                onEdit={onEdit}
                deleteTodo={deleteTodo}

            />
        </div>
    )
}


function Editor({ addTodo }) {
    const [input, setInput] = useState("")
    return (
        <>
            <h3>Todo list in reducer</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                addTodo(input)
                setInput("")
            }}>Add</button>
        </>
    )
}
function List({ todos, onEdit, deleteTodo }) {
    return (
        <ul>
            {todos.map((t) => {
                return <Todo data={t} onEdit={onEdit} deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}


function Todo({ data, onEdit, deleteTodo }) {

    const [isEdit, setIsEdit] = useState(false)

    let content = undefined
    if (isEdit) {
        content = (
            <>
                <input type="text" value={data.text} onChange={(e) => onEdit(data.id, { ...data, text: e.target.value })} />
                <button onClick={() => setIsEdit(false)}>save</button>
            </>
        )
    }
    else {
        content = (
            <>
                <span>{data.text}</span>
                <button onClick={() => setIsEdit(true)}>Edit</button>

            </>
        )
    }

    return (
        <div>
            <input type="checkbox" checked={data.done} onChange={(e) => onEdit(data.id, { ...data, done: e.target.checked })} />
            {content}
            <button onClick={() => {
                deleteTodo(data.id)
                setIsEdit(false)
            }}>delete</button>
        </div>
    )
}

export default URedTodo