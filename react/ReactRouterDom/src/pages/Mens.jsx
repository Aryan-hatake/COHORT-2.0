import React from 'react'
import { useParams } from 'react-router-dom'

const Mens = () => {
    const query = useParams()
    console.log(query)
  return (
 <div className='text-white text-9xl h-full w-full flex justify-center items-center'>
      <p>Men's Product Page</p>
    </div>
  )
}

export default Mens
