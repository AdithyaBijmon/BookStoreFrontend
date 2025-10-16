import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {

  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)

      const user = JSON.parse(sessionStorage.getItem("user"))
       
      
      setUserDp(user.profile)
    }
  }, [token])

  const logout = ()=>{
    sessionStorage.clear()
    setToken("")
    userDp("")
    setDropDownStatus(false)
    navigate('/')
  }

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


          {!token ?
            <Link to={'/login'}><button className='border border-black rounded py-2 px-3 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>
            :
            <div className='relative inline-block text-left'>
              <div>
                <button onClick={() => setDropDownStatus(!dropDownStatus)} className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
                  <img style={{ width: '40px', height: '40px' }} className='rounded-full mx-2' src={userDp == "" ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : userDp.startsWith("https://lh3.googleusercontent.com/a/")?userDp:"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" />
                </button>

               { 
                dropDownStatus &&
                <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-hidden'>
                  <div className=" p-3 text-gray-600">
                    <Link to={'/profile'} className='block text-sm'><FontAwesomeIcon icon={faAddressBook} /> Profile</Link>
                    <button onClick={logout} className='block my-2 text-sm'><FontAwesomeIcon icon={faPowerOff} className='text-sm' />Logout</button>
                  </div>
                </div>
                }
              </div>
            </div>
          }
        </div>
      </div>

      <nav className='w-full p-3 bg-black text-white'>

        <div className="flex justify-between items-center md:hidden">
          <button onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
          <Link to={'/login'}><button className='border border-black rounded py-2 px-3 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>
        </div>
        <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden '}>
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