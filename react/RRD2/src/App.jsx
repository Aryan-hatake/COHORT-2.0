import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import Categories from './components/Categories.jsx'
import Mens from './pages/Mens.jsx'
import Female from './pages/Female.jsx'

const App = () => {
  return (
  <>
    <Navbar/>
    <div className='flex flex-col justify h-screen w-screen center items-center'>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}>
       <Route index element={<Categories/>}/>  {/* index refer to '/' of parent route and it is a boolean */}
       <Route path='men' element={<Mens/>}/>
       <Route path='female' element={<Female/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  </>
  )
}

export default App
