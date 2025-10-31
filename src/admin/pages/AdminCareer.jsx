import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddJob from '../components/AddJob'
import { getAllJobsAPI, removeJobAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'


const AdminCareer = () => {
  const { addjobResponse, setAddJobResponse } = useContext(jobContext)
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicantionStatus, setListApplicationStatus] = useState(false)


  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [deleteJobResponse, setDeleteJobResponse] = useState({})
  // console.log(allJobs);

  useEffect(() => {
    if (jobListStatus == true) {
      getAllJobs()
    }
  }, [searchKey, deleteJobResponse, addjobResponse])


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

  const removeJob = async (id) => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await removeJobAPI(id, reqHeader)
        if (result.status == 200) {
          setDeleteJobResponse(result.data)
        }
        else {
          console.log(result)
        }

      } catch (err) {
        console.log(err)
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
          <h1 className="text-2xl font-bold text-center my-10">Careers</h1>
          <div className="flex justify-center items-center my-5">
            <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false) }} className={jobListStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false) }} className={listApplicantionStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>View Applications</p>
          </div>

          {/* contents */}
          {
            jobListStatus &&
            <>
              <div className='flex justify-between items-center my-10 mx-5'>
                <div>
                  <input onChange={(e) => setSearchKey(e.target.value)} className='border p-2 border-gray-300' type="text" placeholder='Search by title' />
                  <button className='px-3 py-2 bg-blue-600 text-white'>Search</button>
                </div>

                <AddJob />
              </div>
              {
                allJobs.length > 0 ?
                  allJobs?.map(job => (
                    <div key={job?._id} className='shadow px-5 py-3 md:mx-20 mx-5 border-gray-300 my-10'>
                      <div className='flex mb-3'>

                        <div className='w-full'>
                          <h5 className='text-xl font-bold'>{job?.title}</h5>
                          <hr className='mt-3 text-gray-300' />
                        </div>
                        <button onClick={() => removeJob(job?._id)} className='px-3 py-2 text-white bg-red-700 flex items-center ms-3 cursor-pointer'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                      </div>

                      <div>
                        <h4><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{job?.location}</h4>
                        <p className=' my-2'>Job Type: {job?.jobType}</p>

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
            </>


          }


          {
            listApplicantionStatus &&
            <div className='p-10 overflow-hidden'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500' >S.No</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Email</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='md:p-3 p-2 bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3 text-center"> 1</td>
                    <td className="border border-gray-500 p-3 text-center">Full stack developer</td>
                    <td className="border border-gray-500 p-3 text-center">Lily John</td>
                    <td className="border border-gray-500 p-3 text-center"> B.Tech</td>
                    <td className="border border-gray-500 p-3 text-center"> lily@gmail.com</td>
                    <td className="border border-gray-500 p-3 text-center"> 8978675645</td>
                    <td className="border border-gray-500 p-3 text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio ipsam et dicta eum voluptatum porro nesciunt, saepe excepturi dolorum maxime debitis aperiam cum nostrum est voluptas commodi reiciendis sapiente.</td>
                    <td className="border border-gray-500 p-3 text-center"> <Link className='text-blue-600 underline'>Resume</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          }

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminCareer