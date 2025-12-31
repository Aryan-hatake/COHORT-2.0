import React from 'react'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('')
  const [allUsers,setAllUsers] = useState([]);
  const [details, setDetails] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    setAllUsers([...allUsers,name])
      console.log(allUsers) //prev value because useState is asynchrounous you get old value until the action is completed and when action is completed then only all changes to the value of useState are made 
    
    let oldDetails = [...details];
    oldDetails.push({name,email,num})
    setDetails(oldDetails);
    // setDetails([...details,{name,email,num}])
    console.log(oldDetails)
    console.log(name,email,num)  
    setName("")
    setEmail("")
    setNum("")
    
  }



  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder='Enter Name' required value={name}
          onChange={(e) => {
             
            setName(e.target.value)
          }} />
        <input type="email" placeholder='Enter Email' required value={email}
          onChange={(e) => {
             
            setEmail(e.target.value)
          }} />
        <input type="number" placeholder='Enter Number' required value={num}
          onChange={(e) => {
             
            setNum(e.target.value)
          }} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
