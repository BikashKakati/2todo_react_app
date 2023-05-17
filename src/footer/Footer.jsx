import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
    <span>you have <span className="pending-task">{taskAdd.length} </span> pending task</span>
    <button className="delete-all" onClick={deleteAll}>Delete All</button>
  </div>

  )
}

export default Footer