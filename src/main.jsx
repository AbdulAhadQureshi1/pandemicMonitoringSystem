import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Loader from './components/Loader';
// import App from './components/App'
import { BrowserRouter } from "react-router-dom";
import './App.css';

const App = lazy(()=> import('./components/App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
