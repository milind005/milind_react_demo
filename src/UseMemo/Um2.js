import React, { useMemo, useState } from 'react'

const Um2 = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([]);


    const calculation = useMemo(() => expensiveCal(count), [count]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New todos"])
    }

    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, i) => {
                return <p key={i}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
            <hr />
            <div>
                count:{count}
                <button onClick={increment}>+</button>
                <h2>Expensice Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}




const expensiveCal = (num) => {
    console.log("calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }

    return num;
};
export default Um2