import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  
  const [notes, setNotes] = useState([])

  const fetchNotes = async()=>{
    const notesAll = await axios.get("http://localhost:3000/notes");
    setNotes(notesAll.data.notes)
  }

  useEffect(() => {
    
  fetchNotes()
  
  }, [])
  

  return (
    <>
      
      {
        notes.map((e)=>{
          return      <div className='bg-neutral-400 w-fit rounded-lg px-3 py-1 text-neutral-700'>
         <div>
         {e.title}
         </div>
         <div>{e.description}</div>
     </div>
        })
      }
    
    </>
  )
}

export default App
