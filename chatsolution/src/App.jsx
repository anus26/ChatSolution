import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'

const App = () => {
  return (
   <>


<Routes >
  <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
     <Route path='/Singup' element={<Singup/>}/>
</Routes>

   </>
  )
}
  
export default App