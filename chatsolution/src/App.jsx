import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
   <>
<BrowserRouter>

<Routes >
  <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
</Routes>
</BrowserRouter>
   </>
  )
}
  
export default App