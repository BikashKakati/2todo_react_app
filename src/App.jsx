import React, { useState, useEffect } from 'react'
import './App.css';


const getLocalStorage = () =>{
  let storageItem = localStorage.getItem("newTodo");
  if(storageItem){
    return JSON.parse(storageItem);
  }
  else{
    return [];
  }
}
const App = () => {
  const [inputData, setInputData] = useState("");
  const [taskAdd, setTaskAdd] = useState(getLocalStorage());
  const [editItemIndex, setEditItemIndex] = useState("");
  const [editButton, setEditButton] = useState(false);




  const addTask = () => {
    if(!inputData){
      alert("First fill something");
    }
    else if(inputData && editButton){
      setTaskAdd(taskAdd.map((tasks,index) =>{
        if(index === editItemIndex){
          return (tasks,inputData);

        }
        return tasks;
      }))
      setInputData("");
      setEditButton(false);
    }
    // else{
    //   let newTaskadd = {
    //     id: new Date().getTime().toString(), NOTE: to give task unique id we should also use Time
    //     task: inputData,
    //   }
    else{
      setTaskAdd([...taskAdd, inputData]);
      setInputData("");
    }
  }

  useEffect(() =>{
    localStorage.setItem("newTodo",JSON.stringify(taskAdd));
  },[taskAdd])

  const deleteTask = (tasksIndex) =>{
    let updatedList = taskAdd.filter((index) =>{
      return index !== tasksIndex;
    })
    setTaskAdd(updatedList);
  }

  const editTask = (taskIndex) =>{
    let editedItem =  taskAdd.find((task,index) =>{
      return index === taskIndex;
    })
    setInputData(editedItem);
    setEditItemIndex(taskIndex);
    setEditButton(true);
  }

  const deleteAll = () =>{
    setTaskAdd([]);
  }

  return (


    <div className="todo-container">
      <header>
        <h1>TodoList</h1>
        <div className="dark-btn"></div>
      </header>
      <div className="input-container">

        <input type="text" placeholder="write your new task" value={inputData} onChange={(data)=>{setInputData(data.target.value)}}></input>

        {editButton ? (<button onClick={addTask}><i className="fas fa-edit"></i></button>) : (<button onClick={addTask}><i className="fas fa-plus"></i></button>)}
        

      </div>

      <ul className="todo-list-container">
        {taskAdd.map((taskItem,index) => {
          return <li key={index}> {taskItem} 
          <i className="fas fa-edit" onClick={() =>editTask(index)}></i>
          <i className="fas fa-trash" onClick={() =>deleteTask(index)}></i>
          </li>
        })}
      </ul>


      <div className="footer">
        <span>you have <span className="pending-task">{taskAdd.length} </span> pending task</span>
        <button className="delete-all" onClick={deleteAll}>Delete All</button>
      </div>

    </div>
  )
}

export default App