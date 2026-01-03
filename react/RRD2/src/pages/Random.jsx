import React from 'react'
import { useParams } from 'react-router-dom'

const Random = () => {

  const query = useParams()
  console.log(query)
  return (
    <div className='text-white flex-col-reverse gap-4  text-9xl h-full w-full flex justify-center items-center'>
      <p>Product Page</p>
      <span>{query.product}</span>
    </div>
  )
}

export default Random
