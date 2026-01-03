import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-[6rem]  w-full bg-neutral-300 flex justify-between items-center px-6 '>
            <h1 className='text-3xl font-bold'>Navbar</h1>
            <input className='bg-amber-500 rounded-lg p-4' type="text" />
            <ul className='flex gap-8 text-xl font-semibold'>
                <NavLink 
                className={({ isActive }) => ( isActive ? "red" : "" )}
                    to='/' >
                    <li>Home</li>
                </NavLink>

                <NavLink 
                className={({ isActive }) => ( isActive ? "red" : "" )}
                    to='/about' >
                    <li>About</li>
                </NavLink>

                <NavLink 
                 className={({ isActive }) => ( isActive ? "red" : "" )}
                    to='/products' >
                    <li>Products</li>
                </NavLink>

                <NavLink 
               className={({ isActive }) => ( isActive ? "red" : "" )}
                    to='/cart' >
                    <li>Cart</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
