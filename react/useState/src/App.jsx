import React, { useState } from 'react'


const App = () => {

  

  const [num,setNum] = useState(0);  // [preValue(variable), updatingValue(function)]

  const increment = ()=>{
    //num++
    setNum(num+1)
  }

//   let a = 0;

//   const increment =()=>{ 
//     a++;
//     console.log(a)                            
//   }

//   Why the console updates but UI doesn’t

// Because React does NOT re-render on normal variable changes.

// React re-renders only when state or props change.

  return (
    <div className='bg-black gap-10 h-screen text-white flex justify-center items-center flex-col ' >
      <h1 className='text-7xl font-bold'>{num}</h1>
      <div className="btns ">
      <button onClick={increment} className='bg-emerald-500 px-4 py-2 font-semibold text-3xl mx-3 rounded-full'>Increase</button>
      <button className='bg-red-500 px-4 py-2 font-semibold text-3xl mx-3 rounded-full'>Decrease</button>
      </div>
    </div>
  )
}

export default App
