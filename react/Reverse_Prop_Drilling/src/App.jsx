import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AllSection from './components/AllSection'
import  './style.scss'

const App = () => {

  const [theme, setTheme] = useState('light')
  
  console.log("App: ",theme)
  return (
    <div className='main'>
      <Navbar theme={theme} setTheme={setTheme} />
      
    </div>
  )
}

export default App
