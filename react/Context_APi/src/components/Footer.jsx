import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const Footer = () => {

    const user = useContext(UserContext)
     console.log(user)
  return (
    <div className='bg-cyan-500 fixed bottom-0 px-4 py-4  w-full text-4xl font-bold flex flex-col justify-center text-white  '>
      Footer
    </div>
  )
}

export default Footer
