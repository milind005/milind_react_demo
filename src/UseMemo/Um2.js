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
            <h1>here we memoized the exspensive  calculation so when we add todo and component rerenders the app shows stored input</h1>
            <h2>My Todos</h2>
            {todos.map((todo, i) => {
                return <p key={i}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo only</button>
            <button onClick={() => {
                increment()
                addTodo()
            }}>Add Todo and increment num too</button>
            <br />
            <div>
                <h5>count:{count}</h5>
                <button onClick={increment}>Add number only</button>
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