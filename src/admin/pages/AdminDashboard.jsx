import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const AdminDashboard = () => {
  return (
     <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2 ">
        <div className="col-span-1">
          <AdminSideBar />
        </div>

        <div className='col-span-4 p-10'>
          <div className='md:grid grid-cols-3 '>
            <div className="md:px-5">
              <div className="bg-blue-900 p-4 flex  items-center rounded text-white">
               <FontAwesomeIcon className='text-5xl' icon={faBook}/>
               <div className='text-center ms-10 md:ms-5'>
                <h3 className='text-lg'>Total number of Books</h3>
                <h2 className='text-3xl'>100+</h2>
               </div>
              </div>
            </div>
             <div className="md:px-5 md:my-0 my-5">
              <div className="bg-green-900 p-4 flex  items-center rounded text-white">
               <FontAwesomeIcon className='text-5xl' icon={faUser}/>
               <div className='text-center ms-10 md:ms-5'>
                <h3 className='text-lg'>Total number of Users</h3>
                <h2 className='text-3xl'>100+</h2>
               </div>
              </div>
            </div>
             <div className="md:px-5">
              <div className="bg-yellow-500 p-4 flex  items-center rounded text-white">
               <FontAwesomeIcon className='text-5xl' icon={faUsers}/>
               <div className='text-center ms-10 md:ms-5'>
                <h3 className='text-lg'>Total number of Employees</h3>
                <h2 className='text-3xl'>100+</h2>
               </div>
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-2 p-5 my-5">
            <div>Bar chart</div>
            <div>Pie chart</div>
          </div>
          

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminDashboard