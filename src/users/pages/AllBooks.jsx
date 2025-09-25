import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const AllBooks = () => { 
  
  const [listStatus,setListStatus] = useState(false)

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

     <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
     <div className="col-span-1">
     <div className='flex justify-between p-3'> 
      <h1 className='text-xl font-semibold'>Filter</h1>
      <button className='text-2xl md:hidden' onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
     

     </div>
    <div className={listStatus?'block':'md:block hidden'}>
        <div className='mt-3'>
          <input type="radio" name="filter" id="Literary" />
          <label className='ms-3' htmlFor="Literary">Literary function</label>
        </div>
        <div className='mt-3'>
          <input type="radio" name="filter" id="Literary" />
          <label className='ms-3' htmlFor="Literary">Literary function</label>
        </div>
        <div className='mt-3'>
          <input type="radio" name="filter" id="Literary" />
          <label className='ms-3' htmlFor="Literary">Literary function</label>
        </div>
    </div>
     </div>

     <div className="col-span-3">
      <div className="md:grid grid-cols-4 gap-5">
           <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <Link to={'/books/id/view'} className='px-3 py-2 mt-2 bg-blue-900 text-white'>View Book</Link>
            </div>

          </div>
           <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <Link to={'/books/id/view'} className='px-3 py-2 mt-2 bg-blue-900 text-white'>View Book</Link>
            </div>

          </div>
           <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <Link to={'/books/id/view'} className='px-3 py-2 mt-2 bg-blue-900 text-white'>View Book</Link>
            </div>

          </div>
           <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <Link to={'/books/id/view'} className='px-3 py-2 mt-2 bg-blue-900 text-white'>View Book</Link>
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