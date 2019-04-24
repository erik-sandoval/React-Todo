import React from 'react'

function TodoList(props) {

    return (
        <div >
            <p>{props.stateTask.task}</p>
        </div>
    )
}

export default TodoList