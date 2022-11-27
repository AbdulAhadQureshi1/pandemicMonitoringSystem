import '../App.css'
import Content from './Content';
import Navbar from './Navbar.jsx'
import ThemeProvider from './themeContext.jsx'

function App() {

  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <Content></Content>
    </ThemeProvider>
  )
}

export default App
