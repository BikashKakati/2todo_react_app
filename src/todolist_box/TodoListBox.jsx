import React, {useContext} from 'react'
import './TodoListBox.css'
import {Context} from '../App'

const TodoListBox = () => {
    const {taskList,editTask, deleteTask} = useContext(Context)
    return (
        <ul className="todo-list-container">
            {taskList.map((tasks) => (
                <li key={tasks.id}>
                    <p>{tasks.item}</p>
                    <i className="fas fa-edit" onClick={() => editTask(tasks.id)}></i>
                    <i className="fas fa-trash" onClick={() => deleteTask(tasks.id)}></i>
                </li>
            ))}
        </ul>
    )
}

export default TodoListBox