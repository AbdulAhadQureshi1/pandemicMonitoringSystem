import '../App.css'
import Content from './Content';
import Navbar from './Navbar.jsx'
import ThemeProvider from './themeContext.jsx'
import useElementOnScreen from './ObserverHook.jsx';

function App() {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.75
  })

  isVisible ? console.log("Fill Navbar") : console.log("Un-Fill Navbar")

  return (
      <ThemeProvider>
        <div className='landing_pg' ref={containerRef}>
          <Navbar fill={isVisible}></Navbar> 
          <Content></Content>
        </div>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
        <h1>Hello Guys!</h1>
      </ThemeProvider>
  )
}

export default App
