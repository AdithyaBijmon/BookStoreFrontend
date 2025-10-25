import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import SERVERURL from '../../services/serverURL'

const Edit = () => {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: '', password: '',cpassword:'',bio:'',profile:'',role:'' })
  const [token,setToken] = useState("")
  const [existingProfile,setExistingProfile] = useState("")
  const [preview,setPreview] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
      setExistingProfile(user.profile) 
    }
  },[])

  const handlePictureUpload = ()=>{
    setUserDetails({...userDetails,profile:e.target.files[0]})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  return (
    <>
      <button onClick={() => setOffCanvasStatus(true)} className='text-blue-500 border border-blue-600 rounded p-3 hover:text-gray-400'><FontAwesomeIcon icon={faPenToSquare} />Edit</button>

      {
        offCanvasStatus &&

        <div>
          <div className="fixed inset-0 bg-gray-400/75 transition-opacity w-full h-full"></div>
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-xl items-center">
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon icon={faXmark} onClick={() => setOffCanvasStatus(false)} />
            </div>
            <div className="flex justify-center items-center flex-col my-5">
              <label htmlFor="profilePic">
                <input type="file" id='profilePic' className='hidden' />
               { 
               existingProfile==""?
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                :
                existingProfile.startsWith("https://lh3.googleusercontent.com/")?
                <img src={existingProfile} alt="profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                :
                 <img src={`${SERVERURL}/uploads/${existingProfile}`} alt="profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />

                }

                <button className="bg-yellow-300 fixed text-white py-1 px-2 rounded-full" style={{ marginLeft: '65px', marginTop: '-25px' }}><FontAwesomeIcon icon={faPen} /></button>
              </label>

              <div className='mb-3  mt-10 w-full px-5'>
                <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' />
              </div>
              <div  className='mb-3 w-full px-5'>
                <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="text" placeholder='Password' className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' />
              </div>
              <div  className='mb-3 w-full px-5'>
                <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,cpassword:e.target.value})} type="text" placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' />
              </div>

              <div  className='mb-3 w-full px-5'>
                <input value={userDetails.bio} onChange={(e)=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' />
              </div>

              <div className='flex justify-end w-full mt-7'>
                <button className='bg-amber-600 text-white rounded py-2 px-3 hover:bg-amber-500 cursor-pointer'>Reset</button>
                <button className='bg-green-600 text-white rounded py-2 px-3 hover:bg-green-500 cursor-pointer mx-4'>Update</button>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Edit