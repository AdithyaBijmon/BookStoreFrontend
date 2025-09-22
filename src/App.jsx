import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBook from './users/pages/ViewBook'
import Profile from './users/pages/Profile'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminCareer from './admin/pages/AdminCareer'
import AdminResource from './admin/pages/AdminResource'
import AdminSetting from './admin/pages/AdminSetting'
import Pnf from './pages/Pnf'

function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 7000);
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />
        <Route path='/login' element={<Auth />} />

        {/* user */}
        <Route path='/register' element={<Auth register />} />
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/book/:id/view' element={<ViewBook />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />

        {/* admin */}
        <Route path='/admin-dashboard' element={loading ? <Preloader /> : <AdminDashboard />} />
        <Route path='/admin-careers' element={<AdminCareer />} />
        <Route path='/admin-resources' element={<AdminResource/>}/>
        <Route path='/admin-settings' element={<AdminSetting/>}/>

        {/* Page not found */}
        <Route path='/*' element={<Pnf/>}/>



      </Routes>
    </>
  )
}

export default App
