import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Mens from './pages/Mens'
import Female from './pages/Female'
import Random from './pages/Random'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (


    <div className='bg-black h-screen w-full '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/men' element={<Mens/>} />
        <Route path='/products/female' element={<Female/>} />
        <Route path='/products/men/:product' element={<Random/>} />
        <Route path='/products/female/:product' element={<Random/>} />
        <Route path='/:slug/men' element={<Mens/>}/>
        <Route path='/:slug/female' element={<Female/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
