import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path='/register' element={<App/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>

 </Routes>
 </BrowserRouter>
)

export default App
