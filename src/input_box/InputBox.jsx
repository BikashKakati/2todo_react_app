import React, { useContext } from "react"
import "./InputBox.css"
import { Context } from "../App"

const InputBox = () => {
  const {inputData, setInputData,taskList, setTaskList, editItemId, setEditItemId} = useContext(Context)

  const handleAdd = (e) =>{
    if(e.key === "Enter"){
      addTask()
    }
  }

  const addTask = () =>{
    if(!inputData){
      alert("Input Field is empty")
    }
    else if(editItemId){
        const newList = taskList.map(tasks => {
          return tasks.id === editItemId ? {id:tasks.id, item:inputData} : {id: tasks.id, item:tasks.item}
        })
        setTaskList(newList)
        setInputData("")
        setEditItemId(null)
    }
    else{
      setTaskList([...taskList, {id: Date.now(), item:inputData}])
      setInputData("")
    }
  }

  return (
    <div className="input-container">

      <input type="text" placeholder="write your new task" value={inputData} onKeyUp = {handleAdd} onChange={(data) => setInputData(data.target.value)}></input>
      
      {editItemId ? (<button onClick={addTask}><i className="fas fa-edit"></i></button>) : (<button onClick={addTask}><i className="fas fa-plus"></i></button>)}
      
    </div>
  )
}
export default InputBox