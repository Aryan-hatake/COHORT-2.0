import React from 'react'
import { Outlet } from 'react-router-dom'
const Products = () => {
  return (
      <div className='text-white flex-col  gap-10 text-9xl h-full w-full flex justify-center items-center'>
      <p>Products Page</p>
      <Outlet/> {/* <Outlet/> is just a place holder that dynamically render the child route elements as per the path  (placeholder that says extra content might be added if found or needed) */}
    </div>
  )
}

export default Products
