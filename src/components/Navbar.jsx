import React, {useContext} from 'react'
import {ThemeContext, UpdateTheme} from './themeContext'

export default function Navbar() {

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

  return (
    <div className={`navbar font flex ${themeColorSwitch()}`}>
      <a href='/'>
        <div className={`logo flex ${themeColorSwitch()}`}>
            <span className="material-symbols-outlined logo-img">code</span>
            <div className="logo-txt">GDSC</div>
        </div>
      </a>
      <span onClick={themeChange} className={`material-symbols-outlined darkM flex ${themeColorSwitch()}`}>dark_mode</span>
      <span onClick={themeChange} className={`material-symbols-outlined lightM flex ${themeColorSwitch()}`}>light_mode</span>
      <span className={`material-symbols-outlined hamburger ${themeColorSwitch()}`} onClick={toggleMenu}>drag_handle</span>
      <span className={`material-symbols-outlined hamburger ${menuState}-ham ${themeColorSwitch()}`} onClick={toggleMenu}>close</span>
      <div className={`links flex ${menuState} ${themeColorSwitch()}`}>
        <a href="/" className="link">Home</a>
        <a href="/" className="link">About</a>
        <a href="/" className="link">Contact</a>
      </div>
    </div>
  )
}