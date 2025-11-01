import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationAPI, getAllJobsAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [jobTitle,setJobTitle] = useState("")
  const [jobId,setJobId] = useState("")
  const [jobListStatus, setJobListStatus] = useState(true)
  const [applicationDetails, setApplicationDetails] = useState({ fullName: "", email: "", qualification: "", phone: "", coverLetter: "", resume: "" })
  // reset resume input (file type)
  const [fileKey, setFileKey] = useState(Date.now())
  const navigate = useNavigate()

  console.log(applicationDetails)

  useEffect(() => {
    if (jobListStatus == true) {
      getAllJobs()
    }
  }, [searchKey])


  const handleApplyJob = (job)=>{
    setJobId(job._id)
    setJobTitle(job.title)
    setModalStatus(true)
  }

  const handleSubmitApplication = async () => {
   
    const { fullName, email, qualification, phone, coverLetter, resume } = applicationDetails

    const token = sessionStorage.getItem("token")
    if (token) {
      if (!fullName || !email || !qualification || !phone || !coverLetter || !resume ) {
        toast.info("Please fill the form completely.")
      }
      else {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        for (let key in applicationDetails) {
          reqBody.append(key, applicationDetails[key])
        }

        reqBody.append("jobTitle",jobTitle)
        reqBody.append("jobId",jobId)

        const result = await addApplicationAPI(reqBody,reqHeader)
        console.log(result)
        if(result.status==200){
          toast.success("Application sent successfully.")
          handleReset()
          setModalStatus(false)
        }
        else if(result.status==409){
          toast.warning(result.response.data)
          handleReset()
        }
        else{
          toast.error("Something went wrong")
          handleReset()
        }
      }


    }
    else {
      toast.info("Please login to apply job.")
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }

  }

  const getAllJobs = async () => {
    try {
      const result = await getAllJobsAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)

      }

    } catch (err) {
      console.log(err)
    }
  }

  const handleReset = async () => {
    setApplicationDetails({ fullName: "", email: "", qualification: "", phone: "", coverLetter: "", resume: "" })

    setFileKey(Date.now())
  }

  return (
    <>

      <Header />

      <div className='flex items-center justify-center flex-col md:px-40 my-10'>
        <h1 className='text-2xl font-semibold'>Careers</h1>
        <p className='my-5 md:text-center text-justify md:mx-0 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus tempora odit ipsam animi molestiae enim cupiditate a tempore nesciunt rerum recusandae maxime sapiente, laboriosam autem illo, eaque aspernatur beatae.
          Ipsa laboriosam, libero expedita aut quae quasi quas cumque illo illum eaque, ipsam fuga ea iste soluta est fugiat! Rem totam iste harum veniam consequatur et earum. Et, ipsa enim.</p>


      </div>

      <h5 className='text-xl md:mx-10 md:my-5'>Current Openings</h5>
      <div className="flex my-5 justify-center ">
        <input onChange={(e) => setSearchKey(e.target.value)} className='border p-2 border-gray-300' type="text" placeholder='Search by title' />
        <button className='px-3 py-2 bg-blue-600 text-white'>Search</button>
      </div>

      {
        allJobs?.length > 0 ?
          allJobs?.map(job => (
            <div key={job?._id} className='my-10 shadow px-5 py-3 md:mx-40 border-gray-300'>
              <div className='flex mb-3'>

                <div className='w-full'>
                  <h5 className='text-xl'>{job?.title}</h5>
                  <hr className='mt-3 text-gray-300' />
                </div>
                <button onClick={() => handleApplyJob(job)} className='px-3 py-2 text-white bg-blue-900 flex items-center ms-3'>Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
              </div>

              <div>
                <h4><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{job?.location}</h4>
                <p className=' my-2'>Job Type:{job?.jobType}</p>

                <p className='my-2'>Salary: ₹{job?.salary}</p>

                <p className=' my-2'>Qualification: {job?.qualification}</p>

                <p className=' my-2'>Experience: {job?.experience}</p>

                <p className=' my-2'>Description : {job?.description}</p>


              </div>


            </div>
          ))
          :
          <p>No jobs available...</p>
      }

      {
        modalStatus &&
        <div className='relative z-10 overflow-y-auto ' >
          <div className='bg-gray-500/75 fixed inset-0 '>
            <div className="flex justify-center items-center min-h-screen ">
              <div style={{ width: '700px' }} className='bg-white rounded-xl md:mx-0 mx-5'>
                <div className='bg-black text-white flex justify-between items-center p-3 '>
                  <h3>Application form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                </div>

                <div className="relative p-5 ">
                  <div className="md:grid grid-cols-2 gap-x-5">
                    <div className="mb-3">
                      <input value={applicationDetails.fullName} onChange={(e) => setApplicationDetails({ ...applicationDetails, fullName: e.target.value })} type="text" placeholder='Full Name' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={applicationDetails.qualification} onChange={(e) => setApplicationDetails({ ...applicationDetails, qualification: e.target.value })} type="text" placeholder='Qualification' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={applicationDetails.email} onChange={(e) => setApplicationDetails({ ...applicationDetails, email: e.target.value })} type="text" placeholder='Email ID' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={applicationDetails.phone} onChange={(e) => setApplicationDetails({ ...applicationDetails, phone: e.target.value })} type="text" placeholder='Phone' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3 col-span-2">
                      <textarea value={applicationDetails.coverLetter} onChange={(e) => setApplicationDetails({ ...applicationDetails, coverLetter: e.target.value })} placeholder='Cover Letter' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>


                    <div className="mb-3 col-span-2 flex flex-col text-gray-600">
                      <label htmlFor="">Resume</label>
                      <input key={fileKey} onChange={(e) => setApplicationDetails({ ...applicationDetails, resume: e.target.files[0] })} type="file" className='w-full border rounded file:bg-gray-300 file:p-2 file:text-white' />
                    </div>
                  </div>
                </div>

                {/* Modal footer */}
                <div className="bg-gray-200 p-2 w-full flex justify-end">
                  <button onClick={handleReset} className='bg-black rounded text-white py-2 px-3'>Reset</button>
                  <button onClick={handleSubmitApplication} className='ms-3 bg-blue-600 rounded text-white py-2 px-3'>Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      }


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

export default Careers