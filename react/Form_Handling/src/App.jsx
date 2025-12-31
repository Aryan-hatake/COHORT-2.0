import React from 'react'

function App() {

  const submitHandler = (e)=>{
    e.preventDefault() //for avoiding default relod behaviour on submitting form
    console.log("submitted")
  }



  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
