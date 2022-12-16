import './App.css'
import Prosucts from './Prosucts.jsx'
import './Menu.jsx'
import './Menu.css'
import './Input.jsx'
import './Input.css'


import React from 'react'
import Menu from './Menu.jsx'
import Input from './Input.jsx'

function App() {
  return (
    <div>
      <Menu/>
      <Input/>
      <Prosucts/>
    </div>
  )
}

export default App