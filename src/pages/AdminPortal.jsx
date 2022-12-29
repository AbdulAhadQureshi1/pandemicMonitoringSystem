import React, {useContext, useRef, useState} from 'react'
import { ThemeContext } from '../components/themeContext';
import InsertEntityForm from '../components/InsertEntityForm';
import { useNavigate } from 'react-router-dom';

export default function AdminPortal() {

  const [colNames, setColNames] = useState([])
  const [colTypes, setColTypes] = useState([])

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

    // tell which form was searched!
    if(e.target.name === 'insertUpdateTable'){
      setTableFound(true);
    }
    if(e.target.name === 'deleteTable') {
      setDelTableFound(true);
    }
    
    // check which table was searched!
    if(searchTableRef.current.value==='Person' || searchDeleteTableRef.current.value==='Person') {
      setColNames(['id', 'FirstName', 'LastName', 'Age', 'Address-Id', 'Family-Id']);
      setColTypes(['Number', 'Text', 'Text', 'Number', 'Number', 'Number']);
      return;
    }
    else if(searchTableRef.current.value==='locked_down_area' || searchDeleteTableRef.current.value==='locked_down_area') {
      setColNames(['Address_id', 'Date_of_lockdown_start', 'Date_of_lockdown_end', 'Threat_level']);
      setColTypes(['Number', 'Text', 'Text', 'Number']);
      return;
    }
    else if(searchTableRef.current.value==='vaccination_center' || searchDeleteTableRef.current.value==='vaccination_center') {
      setColNames(['id', 'Name', 'Address']);
      setColTypes(['Number', 'Text', 'Text']);
      return;
    }

    alert('Table Not Found!')
  }
  

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
            <img src='../public/edit.png' className='edit-icon' width={'40px'}/>
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
            {/* <span className="material-symbols-outlined">edit</span> */}
            <img src='../public/edit.png' className='edit-icon' width={'40px'}/>
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
