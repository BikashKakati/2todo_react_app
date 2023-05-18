import React, { useContext } from "react"
import "./InputBox.css"
import { Context } from "../App"

const InputBox = () => {
  const {inputData, setInputData,taskList, setTaskList} = useContext(Context)

  const addTask = () =>{
    if(!inputData){
      alert("Input Field is empty")
    }else{
      setTaskList([...taskList, {id: Date.now(), item:inputData}])
      setInputData("")
    }
  }
  return (
    <div className="input-container">

      <input type="text" placeholder="write your new task" value={inputData} onChange={(data) => setInputData(data.target.value)}></input>
      <button onClick={addTask}><i className="fas fa-plus"></i></button>
      {/* {editButton ? (<button onClick={addTask}><i className="fas fa-edit"></i></button>) : (<button onClick={addTask}><i className="fas fa-plus"></i></button>)} */}


    </div>
  )
}
export default InputBox