import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


function UnAuthentication({setToken, setSignUpdate}) {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/login' element={<Login setToken={setToken}/>}/>
      <Route path='/sign-up' element={<Signup setSignUpdate={setSignUpdate}/>}/>
    </Routes>
  )
}

export default UnAuthentication
