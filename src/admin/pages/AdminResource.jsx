import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { approveBookStatusAPI, getAllBooksAdminAPI, getAllUsersAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const AdminResource = () => {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [allBooks, setAllBooks] = useState([])
  const [approveBookStatus, setApproveBookStatus] = useState({})

  // console.log(allUsers)
  // console.log(allBooks)


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus == true) {
        getAllBooks(token)

      }
      else if (usersListStatus == true) {
        getAllUsers(token)
      }
      else {
        console.log("Something went wrong")
      }
    }
  }, [usersListStatus, approveBookStatus])

  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }

    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      }
      else {
        console.log(result)
      }

    } catch (err) {
      console.log(err)
    }
  }

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }

    try {
      const result = await getAllBooksAdminAPI(reqHeader)
      if (result.status == 200) {
        setAllBooks(result.data)
      }
      else {
        console.log(result)
      }

    } catch (err) {
      console.log(err)
    }
  }

  const approveBook = async (book) => {
    const userToken = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await approveBookStatusAPI(book,reqHeader)
      if(result.status==200){
        setApproveBookStatus(result.data)
      }
   
    }
    catch (err) {
      console.log(err)
    }
  }


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
            <div className='grid md:grid-cols-4 grid-cols-1  my-10 w-full '>

              {
                allBooks?.length > 0 ?
                  allBooks?.map((book) => (
                    <div key={book?._id} className='shadow rounded p-3 m-4'>
                      <img style={{ width: '100%', height: '400px' }} src={book?.imgUrl} alt="" />
                      <div className='flex justify-center items-center flex-col  my-5'>
                        <h3 className='text-blue-500 font-bold'>{book?.author}</h3>
                        <p>{book?.title}</p>
                        <h5>${book?.discountPrice}</h5>
                        {
                          book?.status == "pending" &&
                          <button onClick={()=>approveBook(book)} className='w-full mt-2 bg-green-600 py-2 text-white rounded cursor-pointer hover:bg-green-500'>Approve</button>
                        }
                        {
                          book?.status == "approved" &&
                          <div className="flex justify-end w-full">
                            <FontAwesomeIcon className='text-green-500 text-2xl' icon={faCircleCheck} />
                          </div>
                        }


                      </div>

                    </div>
                  ))
                  :
                  <p>No Books here...</p>
              }


            </div>
          }


          {
            usersListStatus &&
            <div className='my-10 md:grid grid-cols-3 gap-5 px-10 w-full'>

              {
                allUsers.length > 0 ?
                  allUsers?.map((user, index) => (
                    <div className='bg-gray-200 w-full p-5'>
                      <h6 className='text-lg text-red-500'>ID : {user?._id}</h6>

                      <div className='my-5 flex items-center'>
                        <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={user?.profile ? `${SERVERURL}/uploads/${user?.profile}` : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"} alt="user" />

                        <div className='flex flex-col ms-5'>
                          <h3>{user?.username}</h3>
                          <h4>{user?.email}</h4>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>No users!!</p>
              }




            </div>
          }


        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource