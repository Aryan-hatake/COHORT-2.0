import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
     const navigate = useNavigate();
  return (
    <div className='flex gap-20 text-xl '>
      <div onClick={()=>{navigate('/products/men')}} className="men w-[20rem] h-[30rem] cursor-pointer active:scale-[0.99] rounded-xl flex justify-center items-center bg-blue-500  ">
        Men's Products
      </div>
      <div onClick={()=>{navigate('/products/female')}} className="men w-[20rem] flex justify-center items-center cursor-pointer active:scale-[0.99] rounded-xl h-[30rem] bg-pink-500  ">
        Female's Products
      </div>
    </div>
  )
}

export default Categories
