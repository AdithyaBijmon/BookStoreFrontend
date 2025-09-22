import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
   <div className='flex justify-between mx-10'>
      <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
      <h1 className='md:text-4xl text-2xl font-bold'>BOOK STORE</h1>
      <div className='flex items-center justify-center' >
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon className='mx-3' icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />

        <button className='ms-5 border px-3 py-1'>Login</button>
      </div>
   </div>

   <div className='h-10 w-full bg-stone-950 text-white'>
    <ul className='flex justify-evenly align-items-center pt-2 font-semibold'>
      <li>Home</li>
      <li >Books</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
   </div>
    </>
  )
}

export default Header