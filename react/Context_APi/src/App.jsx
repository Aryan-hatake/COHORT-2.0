import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'
import { UserContext } from './context/UserProvider'

const App = () => {
  return (
    <div className='app-div h-screen w-screen bg-black'>

      <UserContext.Provider value="aryan">
        {/* you can wrap any component with context provider to use that particular context data , example context regarding user data */}
        <Navbar />
      </UserContext.Provider>
         {/* Its is better if you wrap the whole <App/> with the data context so that the data remains centralised and any component can use it  */}

        <Section />
        <Footer />
    </div>
  )
}

export default App
