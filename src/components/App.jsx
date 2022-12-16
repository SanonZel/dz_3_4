import '../components/App.jsx'
import Products from '../goods/Products.jsx'
import '../menu/Menu.jsx'
import '../menu.css'
import '../input/Input.jsx'
import '../input.css'


import React from 'react'
import Menu from '../menu/Menu.jsx'
import Input from '../input/Input.jsx'

function App() {
  return (
    <div>
      <Menu/>
      <Input/>
      <Products/>
    </div>
  )
}

export default App