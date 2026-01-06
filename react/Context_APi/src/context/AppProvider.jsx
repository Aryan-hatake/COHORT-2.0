import React from 'react'
import UserProvider from './UserProvider'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'

const AppProvider = ({children}) => {
  return (
    <div className='all-composed-contexts'>
        <ThemeProvider>
           <AuthProvider>
               <UserProvider>
                 {children}
               </UserProvider>
           </AuthProvider>
        </ThemeProvider>
    </div>
  )
}

export default AppProvider
