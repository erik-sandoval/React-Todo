import React from 'react'
import Todo from './Todo'
import "./Todo.scss"

function TodoList(props) {
    return (
        <div className="list-item-container">
            {
                props.list.map(item => (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
                ))
            }
        </div>
    )
}

export default TodoList