import React from 'react'
import { useState } from 'react'

const Navbar = ({theme,setTheme}) => {
 
    const [newTheme, setNewTheme] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        setTheme(newTheme)
        setNewTheme("")
    
    }

    return (
        <nav>
           {theme} 

          <form onSubmit={submitHandler}>
           <input type="text" value={newTheme} onChange={(e)=>{setNewTheme(e.target.value)}} />
           <button>Submit</button>
          </form>

        </nav>
    )
}

export default Navbar
