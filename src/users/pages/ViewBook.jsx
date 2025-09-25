import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

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
            <div>
              <h1 className="text-xl font-bold"></h1>
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