import React, {useContext} from 'react'
import { ThemeContext } from './themeContext.jsx';
import { Link } from 'react-router-dom';

export default function Footer() {

    const darkMode = useContext(ThemeContext);

    function themeColorSwitch() {
        return darkMode ? 'dark-enabled' : 'light-enabled'
    }
    return (
        <div className={`footer flex font ${themeColorSwitch()}`}>
            <p>Group Members<br/>AbdulAhad Qureshi<br />Arsal Rehman<br/>Muhammad AbuBakar</p>
            <p>Site By AbdulAhad Qureshi</p>
            <Link to='/PMS-Login'>
                <button className='font'>
                    Admin Portal
                </button>
            </Link>
        </div>
  )
}
