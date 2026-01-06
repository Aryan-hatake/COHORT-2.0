import React, { Children, createContext } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    console.log(children)
  return (
    <div className='theme-context'>
        <ThemeContext.Provider value={"light"}>
         {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
