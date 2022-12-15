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
      <svg className='curved-border' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f5f5f5" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,58.7C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  )
}
