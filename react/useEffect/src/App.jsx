import React, { useEffect, useState } from 'react'


const App = () => {
  
  const [sample, setSample] = useState(0)

  useEffect(()=>{
    console.log("doin something with useEffect..")
  },) 
  // , ke baad is dependency that can be updated or change like nothing after comma means useEffect will run for every re-render , [] means useEffect wwill run only when first time the page is loaded ,[sample] means useEffect will run whenever the sample state gets updated 

  return (
    <div>
      <h1>{sample}</h1>
      <button onClick={()=>setSample(sample+1)}>Click to update sample state</button>
    </div>
  )
}

export default App

// React Does 2 Things :
// 1. Making UI
// 2. Data Insertion from backend or apis

// Whenever the data is changed or updated in usestates react re-render UI with updated data.
// useEffect is hook which is used to do something when something gets updated, or only one time when page is loaded or everytime whenever the prop or states are changed