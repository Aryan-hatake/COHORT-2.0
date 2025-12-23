import React from 'react'
import Card from './components/Card';

const App = () => {

   //js should be in function itself

   const arr = [90,30,45,70];

  return (
    <div onDra className=' bg-black h-screen p-20'>
        {arr.map((e)=>{            //as map returns new array
          return <h1>{e}</h1>
        })}


        <div>

         <Card user='aryan'/> 
         
        {/*This goes in the form of object like {user:'aryan'} */}
         

          {/* <Card user='aryan'  age={19}/>         */}

          {/* same as passing arguments Card({user:'rashi',age:19}) */}

          {/* for <Card/> same as calling function {Card()} as react uses functional components not class components */}
        </div>
    </div>
  )
}

export default App
