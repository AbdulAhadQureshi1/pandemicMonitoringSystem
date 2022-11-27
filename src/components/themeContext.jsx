import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();
export const UpdateTheme = createContext();

export default function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false);

    function switchTheme() {
        setDarkMode(darkMode=>!darkMode) 
    }


  return (
    <ThemeContext.Provider value={darkMode}>
        <UpdateTheme.Provider value={switchTheme}>
            {children}
        </UpdateTheme.Provider>
    </ThemeContext.Provider>
  )
}
