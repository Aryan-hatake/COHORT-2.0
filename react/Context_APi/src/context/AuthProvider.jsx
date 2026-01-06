import React, { createContext } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    console.log(children)
  return (
   <AuthContext.Provider>
      <div className='auth-context'>
        {children}
      </div>
   </AuthContext.Provider>
  )
}

export default AuthProvider
