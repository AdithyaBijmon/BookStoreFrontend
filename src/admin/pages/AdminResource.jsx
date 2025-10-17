import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

const AdminResource = () => {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)


  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2 ">
        <div className="col-span-1">
          <AdminSideBar />
        </div>

        <div className='col-span-4'>
          <div className="p-10">
            <h1 className='text-3xl text-center'>All Resources</h1>
          </div>
          {/* Tabs */}

          <div className="flex justify-center items-center my-5">
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false); }} className={bookListStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false); }} className={usersListStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>

          {
            bookListStatus && 
            <div className='grid md:grid-cols-4 grid-cols-1 gap-10 my-10 w-full '>

          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
        </div>
          }


          {
            usersListStatus &&
            <div className='my-10 md:grid grid-cols-3 gap-5 px-10 w-full'>
              
              <div className='bg-gray-200 w-full p-5'>
                <h6 className='text-lg text-red-500'>ID : 12345678</h6>

                <div className='my-5 flex '>
                  <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="user" />

                  <div className='flex flex-col ms-5'>
                    <h3>Max Miller</h3>
                    <h4>max@gmail.com</h4>
                  </div>
                </div>
              </div>

              <div className='bg-gray-200 w-full p-5'>
                <h6 className='text-lg text-red-500'>ID : 12345678</h6>

                <div className='my-5 flex '>
                  <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="user" />

                  <div className='flex flex-col ms-5'>
                    <h3>Max Miller</h3>
                    <h4>max@gmail.com</h4>
                  </div>
                </div>
              </div>
              <div className='bg-gray-200 w-full p-5'>
                <h6 className='text-lg text-red-500'>ID : 12345678</h6>

                <div className='my-5 flex '>
                  <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="user" />

                  <div className='flex flex-col ms-5'>
                    <h3>Max Miller</h3>
                    <h4>max@gmail.com</h4>
                  </div>
                </div>
              </div>
              

            </div>
          }


        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource