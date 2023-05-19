import React, {useContext} from 'react'
import './Footer.css'
import {Context} from '../App'

const Footer = () => {

  const{taskList, deleteAll} = useContext(Context)
  return (
    <div className="footer">
      <span>you have <span className="pending-task">{taskList.length}</span> pending task</span>
      <button className="delete-all" onClick={deleteAll}>Delete All</button>
    </div>

  )
}

export default Footer