import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

const AllBooks = () => {
  return (
    <>
    <Header/>
     <div className="flex justify-center items-center flex-col my-5 w-full">
      <h1 className='text-3xl font-semibold'>Collections</h1>
      <div className="flex my-5 ">
        <input className='border p-2 border-gray-300' type="text" placeholder='Search by title'/>
        <button className='px-3 py-2 bg-blue-600 text-white'>Search</button>
      </div>
     </div>

     <div className="grid grid-cols-3 md:px-40 p-5">
     <div className="col-span-1">
      <h1 className='text-xl font-semibold'>Filter</h1>
      <div className='mt-3'>
        <input type="radio" name="filter" id="Literary" />
        <label className='ms-3' htmlFor="Literary">Literary function</label>
      </div>
     </div>

     <div className="col-span-2">
      <div className="md:grid grid-cols-4">
           <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
      </div>
     </div>
     </div>

    <Footer/>
    </>
  )
}

export default AllBooks