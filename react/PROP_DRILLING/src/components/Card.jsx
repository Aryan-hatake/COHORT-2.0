import React from 'react'

const Card = (props) => {
         
     {/* recieved in the form of object like 
        {
        props:{
           user:"aryan"
        }
     } */}
      
  return (
    <div className='p-10 bg-white w-fit rounded mb-10 text-3xl'>
      This is portfolio card of  of age  {props}
    </div>
  )
}

export default Card
