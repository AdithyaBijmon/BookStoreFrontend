import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Header = () => {

  const [listStatus,setListStatus] = useState(false)

  return (
    <>
      <div className="grid grid-cols-3 p-3">

        {/* logo and title  */}
        <div className='flex items-center'>
          <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
          <h1 className="font-bold text-2xl ms-2 md:hidden">BOOKSTORE</h1>
        </div>

        <div className='md:flex justify-center items-center hidden'>
          <h1 className='font-bold text-4xl'>BOOK STORE</h1>
        </div>

        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon className='mx-3' icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />


          <Link to={'/login'}><button className='border border-black rounded py-2 px-3 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>
        </div>
      </div>

      <nav className='w-full p-3 bg-black text-white'>

        <div className="flex justify-between items-center md:hidden">
          <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
          <Link to={'/login'}><button className='border border-black rounded py-2 px-3 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>
        </div>
        <ul className={listStatus?'flex flex-col':'md:flex justify-center items-center hidden '}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >Home</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'} >Books</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'} >Careers</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} >Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header 