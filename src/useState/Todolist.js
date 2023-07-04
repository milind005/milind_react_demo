import React, { useState } from 'react'


let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

const Todolist = () => {

    const [tasks, setTasks] = useState(initialTodos)

    function AddTodo(value) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                title: value,
                done: false

            }
        ])
    }
    function DeleteTodo(id) {
        console.log(id)
        setTasks(tasks.filter((ele) => {
            if (ele.id !== id) {
                return true
            }
            return false
        }))
    }

    function onChangeTodo(todo) {
        setTasks(tasks.map((ele) => {
            if (ele.id === todo.id) {
                return todo
            }
            else {
                return ele
            }
        }))
    }


    return (
        <div>
            <InputValues
                addingTodo={AddTodo}
            />
            <TaskList
                AllTasks={tasks}
                DeleteTodo={DeleteTodo}
                onChangeTodo={onChangeTodo}
            />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Todolist


function InputValues({ addingTodo }) {
    const [input, setInput] = useState("")
    return (
        <>
            <label htmlFor="">
                <input type="text"
                    placeholder='Add Todo'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <button
                    onClick={() => {
                        addingTodo(input)
                        setInput('')
                    }}
                >Add</button>
            </label>
        </>
    )
}


function TaskList({ AllTasks, DeleteTodo, onChangeTodo }) {

    return (
        <ul>
            {
                AllTasks.map((task) =>
                    <li key={task.id}>
                        <Task
                            DeleteTodo={DeleteTodo}
                            onChangeTodo={onChangeTodo}
                            Todo={task}
                        />
                    </li>)
            }
        </ul>
    )
}


function Task({ Todo, DeleteTodo, onChangeTodo }) {
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState(Todo.title)

    let showContent
    if (edit) {
        showContent = (
            <>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button
                    onClick={() => {
                        onChangeTodo({
                            ...Todo, title: input
                        })
                        setEdit(false)
                    }}
                >Save</button>
            </>
        )
    }
    else {
        showContent = (
            <>
                {Todo.title}
                < button onClick={() => setEdit(true)}> Edit</button >
            </>
        )

    }
    return (
        <>
            <input type="checkbox" checked={Todo.done} onChange={(e) => onChangeTodo({
                ...Todo, done: e.target.checked
            })} />

            {showContent}
            <button onClick={() => DeleteTodo(Todo.id)}>Delete</button>
        </>
    )
}