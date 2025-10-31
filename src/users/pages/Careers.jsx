import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { getAllJobsAPI } from '../../services/allAPI'




const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [jobListStatus, setJobListStatus] = useState(true)

  useEffect(() => {
    if (jobListStatus == true) {
      getAllJobs()
    }
  }, [searchKey])

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
      allJobs?.length>0?
      allJobs?.map(job=>(
          <div key={job?._id} className='my-10 shadow px-5 py-3 md:mx-40 border-gray-300'>
        <div className='flex mb-3'>

          <div className='w-full'>
            <h5 className='text-xl'>{job?.title}</h5>
            <hr className='mt-3 text-gray-300' />
          </div>
          <button onClick={() => setModalStatus(true)} className='px-3 py-2 text-white bg-blue-900 flex items-center ms-3'>Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
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
                      <input type="text" placeholder='Full Name' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input type="text" placeholder='Email ID' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input type="text" placeholder='Phone' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3 col-span-2">
                      <textarea placeholder='Cover Letter' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>


                    <div className="mb-3 col-span-2 flex flex-col text-gray-600">
                      <label htmlFor="">Resume</label>
                      <input type="file" className='w-full border rounded file:bg-gray-300 file:p-2 file:text-white' />
                    </div>
                  </div>
                </div>

                {/* Modal footer */}
                <div className="bg-gray-200 p-2 w-full flex justify-end">
                  <button className='bg-black rounded text-white py-2 px-3'>Reset</button>
                  <button className='ms-3 bg-blue-600 rounded text-white py-2 px-3'>Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      }


      <Footer />
    </>
  )
}

export default Careers