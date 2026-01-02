import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-[6rem]  w-full bg-neutral-300 flex justify-between items-center px-6 '>
            <h1 className='text-3xl font-bold'>Navbar</h1>
            <input className='bg-amber-500 rounded-lg p-4' type="text" />
            <ul className='flex gap-8 text-xl font-semibold'>
               <Link to='/' ><li>Home</li></Link> 
               <Link to='/about' ><li>About</li></Link> 
               <Link to='/products' ><li>Products</li></Link> 
               <Link to='/cart' > <li>Cart</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
