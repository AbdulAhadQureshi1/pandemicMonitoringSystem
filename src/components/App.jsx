import React from 'react'
import '../App.css'
import ThemeProvider from './themeContext.jsx'
import Home from '../pages/home';
import Navbar from './Navbar';
import Footer from './Footer';
import useElementOnScreen from './ObserverHook';
import Content from './Content';
import {Routes, Route} from 'react-router-dom'
import AdminPortal from '../pages/AdminPortal';

function App() {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
})

  return (
    <ThemeProvider>
      <Navbar fill={isVisible}/>
        <div ref={containerRef} className='useless'></div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/PMS-Admin-Portal' element={<AdminPortal />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  )
}

export default App
