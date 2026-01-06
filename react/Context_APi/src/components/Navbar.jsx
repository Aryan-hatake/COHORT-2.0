import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {
   const user =  useContext(UserContext)
   const theme =  useContext(ThemeContext)
   console.log(user)
  return (
    <div className='bg-emerald-500 px-4 py-4  w-full text-4xl font-bold flex flex-col justify-center text-white '>

      {theme}
      
    </div>
  )
}

export default Navbar
