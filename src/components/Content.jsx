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
      <h1>Can't Sign Up To Yelp!</h1>
      <div className='statement'>
        There is a problem with Yelp API, that I <strong>cannot Sign Up.</strong> For This Reason I was Unable to fetch Restaurant Data for Yelp Api.
        The problem was conveyed to GDSC through Email, but there was <strong>No Response</strong> On Time.
        Still the <strong>Commented Code For API Fetching</strong> is added to Application
      </div>
    </div>
  )
}
