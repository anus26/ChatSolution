import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Components/Authprovider';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        {/* Home route - only accessible if user is logged in */}
  <Route path='/' element={
  authUser ? <Home /> : <Navigate to="/Login" />
} />

        {/* Login route - redirect to home if already logged in */}
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />

        {/* Signup route - redirect to home if already logged in */}
        <Route path='/Singup' element={authUser ? <Navigate to="/" /> : <Singup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
