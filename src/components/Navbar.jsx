import React, {useContext} from 'react'
import {ThemeContext, UpdateTheme} from './themeContext'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const darkMode = useContext(ThemeContext);
  const themeChange = useContext(UpdateTheme);

  const [menuState, setMenuState] = React.useState('menu-close');

  function toggleMenu() {
    menuState==='menu-open' ? setMenuState('menu-close') : setMenuState('menu-open')
  }

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  }


  document.body.style.backgroundColor = darkMode ? 'var(--themeFgColor)' : 'var(--themeBgColor)';

  function fillProp () {
    return props.fill ? 'no-fill' : 'fill'
  }

  return (
    <div className={`navbar font flex ${themeColorSwitch()} ${fillProp()}`}>
      <Link to='/'>
        <div className={`logo flex ${themeColorSwitch()}`}>
            <div className="logo-txt">Pandemic Monitoring System</div>
            <div className="logo-txt-secondary">PMS</div>
        </div>
      </Link>
      <span onClick={themeChange} className={`material-symbols-outlined darkM flex ${themeColorSwitch()}`}>dark_mode</span>
      <span onClick={themeChange} className={`material-symbols-outlined lightM flex ${themeColorSwitch()}`}>light_mode</span>
      <span className={`material-symbols-outlined hamburger ${themeColorSwitch()}`} onClick={toggleMenu}>drag_handle</span>
      <span className={`material-symbols-outlined hamburger ${menuState}-ham ${themeColorSwitch()}`} onClick={toggleMenu}>close</span>
      <div className={`links flex ${menuState} ${themeColorSwitch()}`}>
        <Link to="/" className="link">Home</Link>
        <a href="#stats" className="link">Stats</a>
        <Link to="/PMS-Signup" className="link">Admin Portal</Link>
      </div>
    </div>
  )
}