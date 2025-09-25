import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

const ViewBook = () => {
  return (
    <>
    <Header/>
    <div className="md:m-10 m-5">
      <div className="border p-5 shadow border-gray-300">
        <div className="md:grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqL2goMqMPT0aL8-s5rSCr4_t6Usj_Se9dg&s" alt="" />
          </div>

          <div className="col-span-3">
            <div className='flex justify-between'>
              <h1 className="text-xl font-bold text-center">Title</h1>
              <button className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
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
    <Footer/>
    </>
  )
}

export default ViewBook