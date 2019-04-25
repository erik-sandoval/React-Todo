import React from 'react'

function TodoList(props) {

    return (
        <div>
            {
                props.list.map(item => (
                    <div key={item.id}>
                        {item.task}
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList