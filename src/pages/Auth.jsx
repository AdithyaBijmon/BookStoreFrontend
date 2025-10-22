import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Auth = ({ register }) => {
  const navigate = useNavigate()
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' })

  // console.log(userDetails)

  const handleRegister = async () => {
    console.log("Inside handle register");
    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    }
    else {
      // toast.success("Proceed to API call")
      try {

        const result = await registerAPI(userDetails)
        console.log(result)
        if (result.status == 200) {
          toast.success("Registeration successfull ✅,please login.")
          navigate('/login')
          setUserDetails({ username: "", email: "", password: "" })
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        }
        else {
          console.log(result)
          toast.error("Something went wrong!")
          setUserDetails({ username: "", email: "", password: "" })
        }

      }
      catch (err) {
        console.log(err)
      }
    }

  }

  const handleLogin = async () => {
    console.log("Inside handle login");
    const { email, password } = userDetails

    if (!email || !password) {
      toast.info("Please fill the form completely")
    }
    else {
      // toast.success("Proceed to API call")
      try {

        const result = await loginAPI(userDetails)
        console.log(result)
        if (result.status == 200) {
          toast.success("Login successfull")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", JSON.stringify(result.data.token))

          setTimeout(() => {
            if (result.data.user.role == 'admin') {
              navigate('/admin-dashboard')
            }
            else {
              navigate('/')
             
            }
          }, 3000)
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }
        else if (result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }
        else {
          toast.error("Something went wrong!")
          setUserDetails({ username: "", email: "", password: "" })
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  const handleGoogleLogin = async (credentialResponse) =>{
    console.log("Inside handle google");
    const credential = credentialResponse.credential
    const details =  jwtDecode(credential)
    console.log(details)

    try{
      const result = await googleLoginAPI({username:details.name,email:details.email,password:'google',profile:details.picture})
      console.log(result);
      if(result.status == 200){
        toast.success("Login successfull")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", JSON.stringify(result.data.token))

          setTimeout(() => {
            if (result.data.user.role == 'admin') {
              navigate('/admin-dashboard')
            }
            else {
              navigate('/')
             
            }
          }, 3000)
      }
      else{
        toast.error("Something went wrong!")
          
      }
      
    }
    catch(err){
      console.log(err);
      
    }
    
  }

  return (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2024/10/12/17/15/flowers-9115519_1280.jpg)] min-h-screen w-full bg-cover flex flex-col items-center justify-center'>

      <h1 className='text-3xl text-white font-bold text-center py-5 cursor-pointer'><Link to={'/'}>BOOKSTORE</Link></h1>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.33)' }} className='rounded p-3 w-95 flex justify-center items-center flex-col'>

        <img width={'100px'} src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />

        <h1 className='text-3xl font-bold text-login mt-3'>{register ? 'Register' : 'Login'}</h1>

        {register &&
          <input onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} value={userDetails.username} type="text" className='placeholder-gray-600 w-full p-3 mt-4 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your name' />}

        <input onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} type="text" className='placeholder-gray-600 w-full p-3 my-5 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your email' />

        <div className='flex items-center w-full'>
          <input onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} type={viewPasswordStatus ? "text" : "password"} className='placeholder-gray-600 w-full p-3 rounded ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }} placeholder='Enter your password' />

          {!viewPasswordStatus ?
            <FontAwesomeIcon icon={faEye} style={{ marginLeft: '-30px' }} onChange={() => setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-700 ' /> :
            <FontAwesomeIcon icon={faEyeSlash} style={{ marginLeft: '-30px' }} onChange={() => setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-700 ' />
          }
        </div>

        <div className='flex justify-between items-center text-xs w-full my-2'>
          <p className='text-yellow-800 '>*Never share the password with others.</p>
          <Link className='text-blue-500 underline'>Forgot password?</Link>
        </div>

        {
          register ?
            <button type='button' onClick={handleRegister} className='w-full bg-green-700 text-white px-5 py-2 text-xl cursor-pointer'>Register</button> : <button onClick={handleLogin} className='w-full bg-green-700 text-white px-5 py-2 text-xl cursor-pointer'>Login</button>
        }



        {!register &&
          <p className='text-lg my-3 text-white'>-----------or-----------</p>
        }

        {!register &&
          
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                handleGoogleLogin(credentialResponse)
              }}
              onError={() => {
                console.log('Login Failed');
              }}

             
            />

          
        } 




        {
          register ?
            <p className='text-white'>Already a user?<Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
            :
            <p className='text-white'>Are you a new user?<Link to={'/register'} className='text-blue-500 underline'>Register</Link></p>
        }



      </div>


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


    </div>
  )
}

export default Auth