import React, {useContext, useRef, useState} from 'react'
import { ThemeContext } from '../components/themeContext';
import {Link} from 'react-router-dom'

export default function Login() {

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  }

  const [nameErr, setNameErr] = useState('');
  const [passErr, setPassErr] = useState('');


  const nameRef = useRef()
  const passRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value)
  }

  return (
    <div className={`signup flex`}>
        <div className={`login card flex ${themeColorSwitch()}`}>
          <header className='card-head font'>Log into your account</header>
          <form className='form flex' onSubmit={handleSubmit}>
            <div className='input-set' >
              <input type={'text'} ref={nameRef} placeholder='Username' required/>
              <p className={`error font`}>{nameErr}</p>
            </div>
            <div className='input-set'>
              <input type={'password'} ref={passRef} placeholder='Password' required/>
              <p className={`error font`}>{passErr}</p>
            </div>
              <button className='font submit-btn' type='submit'>Submit</button>
          </form>
          <footer className='font'>Don't have an account?
            <Link to='/PMS-Signup' className='login-link'>  Signup</Link>
          </footer>
        </div>
    </div>
  )
}
