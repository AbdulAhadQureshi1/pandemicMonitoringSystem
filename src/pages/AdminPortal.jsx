import React, {useContext, useRef, useState} from 'react'
import { ThemeContext } from '../components/themeContext';
import InsertEntityForm from '../components/InsertEntityForm';
import { useNavigate } from 'react-router-dom';

export default function AdminPortal() {

  const navigate = useNavigate();

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  }

  const [tableFound, setTableFound] = useState(false);
  const [deltableFound, setDelTableFound] = useState(false);

  const searchTableRef = useRef();
  const searchDeleteTableRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    if(e.target.name === 'insertUpdateTable'){
      if(searchTableRef.current.value === 'Person') {
        setTableFound(true);
        return;
      }
      alert('Table Not Found!')
    }
    if(e.target.name === 'deleteTable') {
      if(searchDeleteTableRef.current.value === 'Person') {
        setDelTableFound(true);
        return;
      }
      alert('Table Not Found!')
    }
  }

  let colNames = ['id', 'FirstName', 'LastName', 'Age', 'Address-Id', 'Family-Id'];
  let colTypes = ['Number', 'Text', 'Text', 'Number', 'Number', 'Number'];
  

  const handleLogout = () => {
    navigate('/', true)
  }

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
            Insert/Update Records
          </h2>
        </legend>
        <form  className='search' name='insertUpdateTable' onSubmit={handleSearch} >
          <input type={'text'} ref={searchTableRef} placeholder='Search Table' className='input-field' required/>
          <button className='submit-btn' type='submit'>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <InsertEntityForm btnName={'Insert'} showTable={tableFound} colNames={colNames} colTypes={colTypes} />
      </fieldset>


      <fieldset className={`admin card ${themeColorSwitch()}`}>
        <legend>
          <h2 className='font'>
            <span className="material-symbols-outlined">edit</span>
            Delete Records
          </h2>
        </legend>
        <form className='search' name='deleteTable' onSubmit={handleSearch} >
          <input type={'text'} ref={searchDeleteTableRef} placeholder='Search Table' className='input-field' required/>
          <button className='submit-btn' type='submit'>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <InsertEntityForm btnName={'Delete'} showTable={deltableFound} colNames={colNames} colTypes={colTypes} />
      </fieldset>


    </section>
    
    <button onClick={handleLogout} className='logout-btn' >LogOut</button>
    </>
  )
}
