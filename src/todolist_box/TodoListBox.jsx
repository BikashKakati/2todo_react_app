import React from 'react'
import './TodoListBox.css'

const TodoListBox = () => {
    return (
        <ul className="todo-list-container">
            {taskAdd.map((taskItem, index) => (
                <li key={index}> {taskItem}
                    <i className="fas fa-edit" onClick={() => editTask(index)}></i>
                    <i className="fas fa-trash" onClick={() => deleteTask(index)}></i>
                </li>
            ))}
        </ul>
    )
}

export default TodoListBox