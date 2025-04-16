import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import Register from '../Screens/Register'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='register' element={ <Register/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes