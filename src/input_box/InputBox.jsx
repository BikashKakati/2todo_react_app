import React, {useContext} from "react"
import "./InputBox.css"
import Context from '../App'

const InputBox = () => {
    const {inputData, setInputData, editButton, setEditButton, setTaskAdd} = useContext(Context)

    const addTask = () => {
        if (!inputData) {
          alert("First fill something");
        }
        else if (inputData && editButton) {
          setTaskAdd(taskAdd.map((tasks, index) => {
            if (index === editItemIndex) {
              return (tasks, inputData);
    
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
        else {
          setTaskAdd([...taskAdd, inputData]);
          setInputData("");
        }
      }
    return (
        <div className="input-container">

            <input type="text" placeholder="write your new task" value={inputData} onChange={(data) => {setInputData(data.target.value) }}></input>
            {editButton ? (<button onClick={addTask}><i className="fas fa-edit"></i></button>) : (<button onClick={addTask}><i className="fas fa-plus"></i></button>)}


        </div>
    )
}
export default InputBox