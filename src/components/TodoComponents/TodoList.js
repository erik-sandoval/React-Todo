import React from 'react'

function TodoList(props) {

    return (
        <div >
            {/* stateTask becomes an object from tasksOnState*/}
            <p>{props.stateTask.task}</p>
        </div>
    )
}

export default TodoList