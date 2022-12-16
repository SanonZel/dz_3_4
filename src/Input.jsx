import React from 'react'
import './Input.css'

function Input() {
  const subLog = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  const inpAdd = (e) => {
    console.log(e.target.value)
  }

    return (
    <div>
        <p>filters</p>
        <input type="text" className='inp' onChange={inpAdd}/>
        <button onClick={subLog}>find</button>
    </div>
  )
} 

export default Input