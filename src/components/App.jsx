import React, {lazy, Suspense, suspense} from 'react'
import ReactDOM from 'react-dom';
import '../App.css'
import Content from './Content';
import Navbar from './Navbar.jsx'
import ThemeProvider from './themeContext.jsx'
import useElementOnScreen from './ObserverHook.jsx';
import DailyStats from './DailyStats.jsx';
import OverallStats from './OverallStats.jsx';
import Map from './Gmaps.jsx';
import Footer from './Footer.jsx';

function App() {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.75
  })

  return (
    <ThemeProvider>
        <div className='landing_pg' ref={containerRef}>
          <Navbar fill={isVisible}></Navbar> 
          <Content></Content>
        </div>
        <DailyStats></DailyStats>
        <OverallStats></OverallStats>
        <Map></Map>
        <Footer></Footer>
      </ThemeProvider>
  )
}

export default App
