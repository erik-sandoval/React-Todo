import React from 'react'
import "./Todo.scss"

function TodoForm(props) {
    return (
        <form onSubmit={props.addTask}>
            <input
                placeholder="Add a task"
                value={props.formState.tasks.task}
                onChange={props.handleProp}
                name="task"
            >
            </input>
            <button>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm