import React, { createContext } from 'react'

export const UserContext = createContext(); //postmen joh value provide karega jis bhi component ko lage use

const UserProvier = ({children}) => {

  console.log(children)

  return (
    <div className='user-context h-screen w-full bg-black'>

    <UserContext.Provider value={"aryan"}>
      {children}
    </UserContext.Provider>


    </div>
  )
}

export default UserProvier
