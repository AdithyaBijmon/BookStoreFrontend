import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuthContext } from '../../contextAPI/AuthenticationContext'


const AdminHeader = () => {
  const navigate = useNavigate()
  const {role,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <>

        <div className="flex justify-between p-3 md:px-20">

        {/* logo and title  */}
        <div className='flex items-center'>
          <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
          <h1 className="font-bold text-2xl ms-2 ">BOOKSTORE</h1>
        </div>

    
          <button onClick={logout} className='border border-black rounded py-2 px-3 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faPowerOff} className='me-3' />Logout</button>
        
      </div>

      <nav className='w-full p-3 bg-black text-white'>
        <marquee >Welcome,Admin! You're all set to manage and monitor the system.Let's get to work!</marquee>
       
      </nav>
    
    </>
  )
}

export default AdminHeader