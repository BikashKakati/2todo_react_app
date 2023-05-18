import React, { useState, createContext } from 'react'
import './App.css'
import InputBox from './input_box/InputBox'
import TodoListBox from './todolist_box/TodoListBox'
import Footer from './footer/Footer'
export const Context = createContext()


const App = () => {
  const [inputData, setInputData] = useState("")
  const [taskList, setTaskList] = useState([])

  return (
    <div className="todo-container">
      <Context.Provider value={{inputData, setInputData, taskList, setTaskList }}>
        <Header />
        <InputBox />
        <TodoListBox />
        <Footer />
      </Context.Provider>

    </div>
  )
}
const Header = () => {
  return (
    <header>
      <h1>TodoList</h1>
      <div className="dark-btn"></div>
    </header>
  )
}

export default App