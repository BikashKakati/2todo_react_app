import React, {useContext} from 'react'
import './TodoListBox.css'
import {Context} from '../App'

const TodoListBox = () => {
    const {taskList} = useContext(Context)
    return (
        <ul className="todo-list-container">
            {taskList.map((tasks) => (
                <li key={tasks.id}>
                    <p>{tasks.item}</p>
                    <i className="fas fa-edit" onClick={() => editTask(index)}></i>
                    <i className="fas fa-trash" onClick={() => deleteTask(index)}></i>
                </li>
            ))}
        </ul>
    )
}

export default TodoListBox