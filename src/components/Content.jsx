import React, {useContext} from 'react'
import { ThemeContext } from './themeContext'

export default function Content() {

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  } 

  return (
    <div className={`content font flex ${themeColorSwitch()}`}>
      <div className='statement'>
        <h1>Pandemic Monitoring System</h1>
        <p>Worlds #1 Monitoring System</p>
      </div>
      <div className='heroImg'>
        <img src='/pandemic.png' width={'100%'} alt='vaccination'></img>
      </div>
    </div>
  )
}
