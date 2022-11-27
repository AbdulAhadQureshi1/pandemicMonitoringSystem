import React, {useContext} from 'react'
import { ThemeContext } from './themeContext'

export default function Content() {

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  } 

  // const API_URL = '';

  // const output = fetch(API_URL)
  // .then(res=>res.json())

  // This will Return result res as json, which we can later use

  // I was not able to signup for Yelp API, which was conveyed to you through GMAIL, but there was no response from
  // your side, Thus I used Commented Code To Explain How it is Done 

  return (
    <div className={`content font flex ${themeColorSwitch()}`}>
      <h1>Pandemic Monitoring System</h1>
      <div className='statement'>
        Worlds #1 Monitoring System
      </div>
    </div>
  )
}
