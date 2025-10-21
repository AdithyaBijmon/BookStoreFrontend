import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward, faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { getSingleBookAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../services/serverURL'

const ViewBook = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const { id } = useParams()
  const [book, setBook] = useState({})

  useEffect(()=>{
    viewBookDetails()
  },[])

  const viewBookDetails = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await getSingleBookAPI(id, reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        }
        else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result)
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    return (
      <>
        <Header />
        <div className="md:m-10 m-5">
          <div className="border p-5 shadow border-gray-300">
            <div className="md:grid grid-cols-4 gap-10">
              <div className="col-span-1">
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqL2goMqMPT0aL8-s5rSCr4_t6Usj_Se9dg&s" alt="" />
              </div>

              <div className="col-span-3">
                <div className='flex justify-between'>
                  <h1 className="text-xl font-bold text-center">Title</h1>
                  <button onClick={() => setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
                </div>
                <p className='my-3 text-blue-600'>- Author</p>
                <div className="md:grid grid-cols-3 gap-5 my-10">
                  <p className="font-bold">Publisher : demo</p>
                  <p className="font-bold">Language : English</p>
                  <p className="font-bold">No of pages : 208</p>
                  <p className="font-bold">Seller Mail : seller@gmail.com</p>
                  <p className="font-bold">Retail Price : $20</p>
                  <p className="font-bold">ISBN : demo</p>
                </div>

                <div className="md:my-10 my-4">
                  <p className="font-bold ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quod eligendi ducimus fugiat ipsa, itaque obcaecati quas repellendus nihil, provident officiis dolor repellat magni reiciendis ex numquam. Voluptatem, reiciendis repudiandae?
                    Ipsum error amet accusantium at praesentium distinctio dolor pariatur voluptates enim rerum id iste dicta, eum quibusdam laboriosam nemo obcaecati excepturi, placeat in eligendi. Dignissimos sequi minima est. At, dolor!
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className='bg-blue-900 px-3 py-2 rounded text-white'><FontAwesomeIcon className='me-3' icon={faBackward} />Back</button>
                  <button className='bg-green-700 ms-3 px-3 py-2 rounded text-white'><FontAwesomeIcon className='me-3' icon={faSackDollar} />Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal */}

        {
          modalStatus &&
          <div className='relative z-10 overflow-y-auto' onClick={() => setModalStatus(false)}>
            <div className='bg-gray-500/75 fixed inset-0 '>
              <div className="flex justify-center items-center min-h-screen ">
                <div style={{ width: '700px' }} className='bg-white rounded-xl'>
                  <div className='bg-black text-white flex justify-between items-center p-3 '>
                    <h3>Book images</h3>
                    <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                  </div>

                  <p className='text-blue-600 my-5 mx-5'><FontAwesomeIcon icon={faCamera} className='me-2' />Camera click of the book in the hand of seller</p>

                  <div className="md:flex flex-wrap my-4 mx-5">
                   { 
                    book?.uploadImg?.length>0?
                    book?.uploadImg?.map(img=>(
                      <img width={'250px'} height={'250px'} className='mx-2' src={`${SERVERURL}/uploads/${img}`} alt="book-images" />
                    ))
                    :
                    <p>No images available</p>
                    }


                  </div>

                </div>
              </div>
            </div>
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
}

export default ViewBook