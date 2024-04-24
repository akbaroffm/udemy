import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddStudent from './pages/Auth/AddTeacher/AddTeacher'
import SingleStudent from "./pages/Auth/SingleStudent/SingleStudent"
import Dashboard from './pages/Dashboard/Dashboard'
import Teachers from "./pages/Teachers/Teachers"
import Students from "./pages/Students/Students"
import Billing from "./pages/Billing/Billing"
import Settings from "./pages/Settings/Settings"
import Exams from "./pages/Exams/Exams"
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function Authentication() {
  const [dashboard, setDashboards] = useState(JSON.parse(window.localStorage.getItem("dashboard")) || [])
  return (
    <>
    <div>
      {/* <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
      </Routes> */}
    </div>
    <div className='flex'>
      <nav className='w-[20%] py-[21px] overflow-auto h-[100vh] bg-[#152259]'>
        <NavBar />
      </nav>
      <div className='w-[80%] overflow-auto h-[100vh]'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers dashboard={dashboard} setDashboards={setDashboards} />} />
          <Route path="/students" element={<Students />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/add' element={<AddStudent setDashboards={setDashboards} dashboard={dashboard} />} />
          <Route path='/teachers/more/:id' element={<SingleStudent dashboard={dashboard} />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default Authentication
