import React from 'react'
import axios from 'axios'
import { useState } from 'react'

// Server - A working CPU that is programmed to recieve request and give response

// CSR (client server rendering) - takes some data in JSON from backend and render on frontend (compartively slow)

//SSR (server side rendering) - takes the whole html structure from backend and render on frontend side altogether (compartively fast)


const App = () => {

  const [allData, setAllData] = useState([])

 async function getData(){
   
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setAllData(response.data)

    console.log(response.data)
   
    
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

//never give key to your component