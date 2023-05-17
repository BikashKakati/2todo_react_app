import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import InputBox from './input_box/InputBox'
import TodoListBox from './todolist_box/TodoListBox'
import Footer from './footer/Footer'
export const Context = createContext()


const getLocalStorage = () => {
  let storageItem = localStorage.getItem("newTodo");
  if (storageItem) {
    return JSON.parse(storageItem);
  }
  else {
    return [];
  }
}
const App = () => {
  const [inputData, setInputData] = useState("");
  const [taskAdd, setTaskAdd] = useState(getLocalStorage());
  const [editItemIndex, setEditItemIndex] = useState("");
  const [editButton, setEditButton] = useState(false);


  useEffect(() => {
    localStorage.setItem("newTodo", JSON.stringify(taskAdd));
  }, [taskAdd])

  const deleteTask = (tasksIndex) => {
    let updatedList = taskAdd.filter((index) => {
      return index !== tasksIndex;
    })
    setTaskAdd(updatedList);
  }

  const editTask = (taskIndex) => {
    let editedItem = taskAdd.find((task, index) => {
      return index === taskIndex;
    })
    setInputData(editedItem);
    setEditItemIndex(taskIndex);
    setEditButton(true);
  }

  const deleteAll = () => {
    setTaskAdd([]);
  }

  return (
    <div className="todo-container">
      <Context.Provider value={{inputData, setInputData, editButton, setTaskAdd}}>
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