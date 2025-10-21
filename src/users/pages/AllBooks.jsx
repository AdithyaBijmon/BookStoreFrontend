import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify'
import { getAllBooksAPI } from '../../services/allAPI';

const AllBooks = () => {

  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [books, setBooks] = useState([])

  console.log(books);


  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      setToken(tok)
      getAllBooks(tok)
    }

  }, [])
   
  const getAllBooks = async (userToken) =>{
    const reqHeader = {
      "Authorization" : `Bearer ${userToken}`
    }

    try{
      const result = await getAllBooksAPI(reqHeader)
      if(result.status==200){
        setBooks(result.data)
      }
      else{
        console.log(result);
        toast.warning(result.response.data)
      }

    }catch(err){
      console.log(err);
      
    }
  }


  return (
    <>
      <Header />
      {
        token ?
          <>
            <div className="flex justify-center items-center flex-col my-5 w-full">
              <h1 className='text-3xl font-semibold'>Collections</h1>
              <div className="flex my-5 ">
                <input className='border p-2 border-gray-300' type="text" placeholder='Search by title' />
                <button className='px-3 py-2 bg-blue-600 text-white'>Search</button>
              </div>
            </div>

            <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
              <div className="col-span-1">
                <div className='flex justify-between p-3'>
                  <h1 className='text-xl font-semibold'>Filter</h1>
                  <button className='text-2xl md:hidden' onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>


                </div>
                <div className={listStatus ? 'block' : 'md:block hidden'}>
                  <div className='mt-3'>
                    <input type="radio" name="filter" id="Literary" />
                    <label className='ms-3' htmlFor="Literary">Literary function</label>
                  </div>
                  
                </div>
              </div>

              <div className="col-span-3">
                <div className="md:grid grid-cols-4 gap-5">
                  {
                    books.length>0?
                    books?.map(book=>(
                      <div className='shadow rounded p-3'>
                    <img width={'100%'} height={'400px'} src={book?.imgURL} alt="" />
                    <div className='flex justify-center items-center flex-col  my-5'>
                      <h3 className='text-blue-500 font-bold'>{book?.author.slice(0,20)}</h3>
                      <p>{book?.title.slice(0,20)}</p>
                      <Link to={`/book/${book?._id}/view`} className='px-3 py-2 mt-2 bg-blue-900 text-white'>View Book</Link>
                    </div>

                  </div>
                    ))
                    :
                    <p>No Books </p>
                  }
                </div>
              </div>
            </div>
          </>
          :
          <div className="my-10 flex justify-center items-center flex-col ">
            <img src="https://cdn-icons-gif.flaticon.com/6569/6569164.gif" alt="login" className='w-50' />
            <p className="font-semibold text-lg mt-6">Please <Link to={'/login'} className='text-blue-700 cursor-pointer font-bold underline'>Login</Link> to Explore More..</p>

          </div>
      }

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
    </>
  )
}

export default AllBooks