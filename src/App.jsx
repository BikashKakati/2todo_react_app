import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import InputBox from './input_box/InputBox'
import TodoListBox from './todolist_box/TodoListBox'
import Footer from './footer/Footer'
export const Context = createContext()


const App = () => {
  
  const [inputData, setInputData] = useState("")
  const [taskList, setTaskList] = useState([])
  const [editItemId, setEditItemId] = useState(null)
  const LOCAL_STORAGE_KEY = "NewTaks"


  useEffect(() =>{
    setTaskList(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  },[])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList))
  },[taskList])


  const deleteTask = (id) =>{
     const updatedList = taskList.filter((tasks) =>tasks.id !== id )
     setTaskList(updatedList)
  }


  const editTask = (id) =>{
     const tasks = taskList.find((tasks) => tasks.id === id)
     setInputData(tasks.item)
     setEditItemId(tasks.id)

  }

  const deleteAll  = () =>{
    setTaskList([])
  }

  return (
    <div className="todo-container">
      <Context.Provider value={{inputData, setInputData, taskList, setTaskList, deleteTask, editTask, editItemId, setEditItemId, deleteAll }}>
        <Header />
        <InputBox />
        <TodoListBox />
        <Footer />
      </Context.Provider>

    </div>
  )
}
const Header = () => {
  const LOCAL_STORAGE_KEY = "Theme"
  const [theme, setTheme] = useState(false)

  useEffect(()=>{
    const Theme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTheme(Theme)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(theme))
  },[theme])

  theme ? document.querySelector("body").classList.add("dark-theme") : document.querySelector("body").classList.remove("dark-theme")
  return (
    <header>
      <h1>TodoList</h1>
      <div className={theme ? "dark-btn on":"dark-btn"} onClick={()=>setTheme(!theme)}>
      </div>
    </header>
  )
}

export default App