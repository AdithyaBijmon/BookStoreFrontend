import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

const AdminResource = () => {
  return (
   <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2 ">
        <div className="col-span-1">
          <AdminSideBar />
        </div>

        <div className='col-span-4'>
          <h1 className="text-2xl font-bold text-center my-10">Resources</h1>
          

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource