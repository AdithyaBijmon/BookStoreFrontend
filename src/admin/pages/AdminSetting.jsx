import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import SERVERURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { UpdateAdminProfileAPI } from '../../services/allAPI'
import { adminUpdateContext } from '../../contextAPI/ContextShare'


const AdminSetting = () => {
  const {setAdminEditResponse} = useContext(adminUpdateContext)
  const [adminDetails, setAdminDetails] = useState({ username: "", password: "", cPassword: "", profile: "" })

  const [existingProfilePic, setExistingProfilePic] = useState("")
  const [preview, setPreview] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({ ...adminDetails, username: user.username, password: user.password, cPassword: user.password })
      setExistingProfilePic(user.profile)
    }
  }, [])

  const handleUploadProfilePic = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleReset = () => {
    setAdminDetails({ profile: "", username: user.username, password: user.password, cPassword: password })
    setExistingProfilePic(user.profile)
    setPreview("")
  }

  const handleUpdateAdminProfile = async () => {
    const { username, password, profile, cPassword } = adminDetails

    if(!username || !password || !cPassword){
      toast.info("Please fill the form completely")
    }
    else if (password != cPassword) {
      toast.warning("Password and confirm password must be same")
      handleReset()
    }
    else {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("password",password)
      reqBody.append("bio","")
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingProfilePic)
      try{
        const result = await UpdateAdminProfileAPI(reqBody,reqHeader)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data))
          setAdminEditResponse(result.data)
          toast.success("Profile updated successfully!")
          handleReset()
        }
        else{
          console.log(result)
        }

      }catch(err){
        toast.error("Something went wrong")
      }
    }


  }

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2 ">
        <div className="col-span-1">
          <AdminSideBar />
        </div>

        <div className='col-span-4'>
          <h1 className="text-2xl font-bold text-center my-10">Settings</h1>
          <div className="md:grid grid-cols-2 gap-5 mx-5 items-center">
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque, iure architecto nam, accusantium tempora tenetur fugit facilis adipisci sapiente voluptas. Ipsum esse autem reprehenderit. Aliquid dicta dolores quas velit.
                Similique, reiciendis ullam est in rerum laudantium consectetur culpa distinctio nesciunt repellendus et, quasi ipsum corporis voluptatem, eveniet itaque veniam odit iure doloribus saepe. Voluptas commodi eveniet praesentium velit dolore?
                Earum porro nisi ab nesciunt! Nulla totam praesentium ipsum pariatur facilis animi veniam distinctio veritatis soluta, dolores repudiandae quo provident laudantium laborum a error reprehenderit fuga tenetur vel iusto ex.z</p>

              <p className='text-justify mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque, iure architecto nam, accusantium tempora tenetur fugit facilis adipisci sapiente voluptas. Ipsum esse autem reprehenderit. Aliquid dicta dolores quas velit.
                Similique, reiciendis ullam est in rerum laudantium consectetur culpa distinctio nesciunt repellendus et, quasi ipsum corporis voluptatem, eveniet itaque veniam odit iure doloribus saepe. Voluptas commodi eveniet praesentium velit dolore?
                Earum porro nisi ab nesciunt! Nulla totam praesentium ipsum pariatur facilis animi veniam distinctio veritatis soluta, dolores repudiandae quo provident laudantium laborum a error reprehenderit fuga tenetur vel iusto ex.z</p>
            </div>

            <div className='md:mt-0 mt-10 rounded bg-blue-100 p-10 flex justify-center items-center flex-col'>
              <input onClick={(e) => handleUploadProfilePic(e.target.value)} type="file" id='adminPic' className='hidden' />
              <label htmlFor="adminPic">
                {
                  existingProfilePic ?
                    <img width={'120px'} height={'120px'} className='rounded-full' src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt="admin-profile" />
                    :
                    <img width={'120px'} height={'120px'} className='rounded-full' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_qFV8xAq4hSf0Tj_JCR6xRbZJpVBR3PXIQ&s"} alt="admin-profile" />
                }
                <FontAwesomeIcon style={{ marginLeft: '100px', marginTop: '-100px' }} icon={faPen} className='bg-yellow-400 p-1 text-white rounded' />

              </label>

              <div className="mb-3 w-full">
                <input value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" placeholder='Username' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mb-3 w-full">
                <input value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" placeholder='Password' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mb-3 w-full">
                <input value={adminDetails.cPassword} onChange={(e) => setAdminDetails({ ...adminDetails, cPassword: e.target.value })} type="text" placeholder='Confirm Password' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mY-3-3 w-full flex justify-evenly">
                <button onClick={handleReset} className='bg-orange-600 px-3 py-2 text-white rounded'>RESET</button>
                <button onClick={handleUpdateAdminProfile} className='rounded bg-green-900 text-white px-3 py-2 '>UPDATE</button>

              </div>



            </div>
          </div>

        </div>

      </div>
      <Footer />
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
    </>
  )
}

export default AdminSetting