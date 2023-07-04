import React, { memo, useCallback, useState } from 'react'


const Todos = ({ todos, addTodos }) => {
    console.log("ucb child render")
    return (
        <div>
            <h2>My Todos</h2>
            <div>
                {todos.map((todo, i) => {
                    return <p key={i}>{todo}</p>
                })}
            </div>
            <button onClick={addTodos}>Add Todo</button>
        </div>
    )
}


const MemoedTodo = memo(Todos)

const UCB3 = () => {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(c => c + 1)
    }, [count])
    const addTodos = useCallback(() => {
        setTodos(t => [...t, "new Todo"])
    }, [todos])

    return (
        <div>
            <MemoedTodo
                todos={todos}
                addTodos={addTodos}
            />
            <hr />
            <div>
                <p>Count:{count}</p>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default UCB3