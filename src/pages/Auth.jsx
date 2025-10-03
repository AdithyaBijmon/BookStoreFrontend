import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = ({register}) => {

  const [viewPasswordStatus,setViewPasswordStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({username:'',email:'',password:''})

  return (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2024/10/12/17/15/flowers-9115519_1280.jpg)] min-h-screen w-full bg-cover flex flex-col items-center justify-center'>
        
        <h1 className='text-3xl text-white font-bold text-center py-5'>BOOKSTORE</h1>
      <div style={{backgroundColor:'rgba(255, 255, 255, 0.33)'}} className='rounded p-3 w-95 flex justify-center items-center flex-col'>

        <img width={'100px'} src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />

        <h1 className='text-3xl font-bold text-login mt-3'>{register?'Register':'Login'}</h1>

        {register &&  
        <input onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} value={userDetails.username} type="text" className='placeholder-gray-600 w-full p-3 mt-4 rounded' style={{backgroundColor:'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your name' />}

        <input onChange={(e)=>setUserDetails({...userDetails,email:e.target.email})} type="text" className='placeholder-gray-600 w-full p-3 my-5 rounded' style={{backgroundColor:'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your email' />

       <div className='flex items-center w-full'>
          <input onChange={(e)=>setUserDetails({...userDetails,password:e.target.password})} type={viewPasswordStatus?"text":"password"} className='placeholder-gray-600 w-full p-3 rounded ' style={{backgroundColor:'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your password' />

         { !viewPasswordStatus? 
         <FontAwesomeIcon icon={faEye} style={{marginLeft:'-30px'}} onChange={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-700 '/> :
          <FontAwesomeIcon icon={faEyeSlash} style={{marginLeft:'-30px'}} onChange={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-700 '/>
          }
       </div>

        <div className='flex justify-between items-center text-xs w-full my-2'>
           <p className='text-yellow-800 '>*Never share the password with others.</p>
           <Link className='text-blue-500 underline'>Forgot password?</Link>
        </div>

        {
        register?<button className='w-full bg-green-700 text-white px-5 py-2 text-xl'>Register</button>:<button className='w-full bg-green-700 text-white px-5 py-2 text-xl'>Login</button>
        }

        

        <p className='text-lg my-3 text-white'>-----------or-----------</p>


        {
          register?
          <p className='text-white'>Already a user?<Link className='text-blue-500 underline'>Login</Link></p>
          :
          <p className='text-white'>Are you a new user?<Link className='text-blue-500 underline'>Register</Link></p>
        }

        

      </div>


    </div>
  )
}

export default Auth