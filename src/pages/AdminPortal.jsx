import React, {useContext, useRef, useState, useEffect} from 'react'
import { ThemeContext } from '../components/themeContext';
import InsertEntityForm from '../components/InsertEntityForm';
import Footer from '../components/Footer';

export default function AdminPortal() {

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  }

  const searchTableRef = useRef();

  return (
    <>

    <section className={`admin-portal ${themeColorSwitch()}`}>
      <header className='font'>
        <h1>Admin Portal</h1>
      </header>
      <fieldset className={`admin card ${themeColorSwitch()}`}>
        <legend>
          <h2 className='font'>
            <span className="material-symbols-outlined">edit</span>
            Insert Records
          </h2>
        </legend>
        <form  className='search' >
          <input type={'text'} ref={searchTableRef} placeholder='Search Table' className='input-field' />
          <button className='submit-btn' type='submit'>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <InsertEntityForm/>
      </fieldset>
      <fieldset className={`admin card ${themeColorSwitch()}`}>
        <legend>
          <h2 className='font'>
            <span className="material-symbols-outlined">edit</span>
            Delete Records
          </h2>
        </legend>
        <form  className='search' >
          <input type={'text'} ref={searchTableRef} placeholder='Search Table' className='input-field' />
          <button className='submit-btn' type='submit'>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <InsertEntityForm/>
      </fieldset>
    </section>
    <h1></h1>
    </>
  )
}
