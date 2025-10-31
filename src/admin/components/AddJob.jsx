import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { jobContext } from '../../contextAPI/ContextShare'
import { addJobAPI } from '../../services/allAPI'


const AddJob = () => {
  const { addjobResponse, setAddJobResponse } = useContext(jobContext)
  const [modalStatus, setModalStatus] = useState(false)
  const [newJob, setNewJob] = useState({ title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: "" })

  const handleReset = () => {
    setNewJob({ title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: "" })
  }

  const handleAddJob = async () => {
    const token = sessionStorage.getItem("token")

    const { title, location, jobType, salary, qualification, experience, description } = newJob

    if (!title || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely")
    }
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await addJobAPI(newJob, reqHeader)
        if (result.status == 200) {

          toast.success("Job added successfully")
          handleReset()
          setAddJobResponse(result.data)
          setModalStatus(false)


        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          handleReset()
        }
        else {
          toast.error("Something went wrong!")
        }

      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <button onClick={() => setModalStatus(true)} className='px-3 py-2 text-white bg-blue-900 flex items-center ms-3'><FontAwesomeIcon icon={faPlus} />Add Jobs</button>


      {
        modalStatus &&
        <div className='relative z-10 overflow-y-auto ' >
          <div className='bg-gray-500/75 fixed inset-0 '>
            <div className="flex justify-center items-center min-h-screen ">
              <div style={{ width: '700px' }} className='bg-white rounded-xl md:mx-0 mx-5'>
                <div className='bg-black text-white flex justify-between items-center p-3 '>
                  <h3>New Job Opening Form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                </div>

                <div className="relative p-5 ">
                  <div className="">
                    <div className="mb-3">
                      <input value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} type="text" placeholder='Job Title' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} type="text" placeholder='Job Location' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={newJob.jobType} onChange={(e) => setNewJob({ ...newJob, jobType: e.target.value })} type="text" placeholder='Job Type' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3">
                      <input value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} type="text" placeholder='Salary' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>
                    <div className="mb-3">
                      <input value={newJob.qualification} onChange={(e) => setNewJob({ ...newJob, qualification: e.target.value })} type="text" placeholder='Qualification' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>
                    <div className="mb-3">
                      <input value={newJob.experience} onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })} type="text" placeholder='Experience' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>

                    <div className="mb-3 col-span-2">
                      <textarea value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} placeholder='description' className='w-full border rounded placeholder-gray-600 p-2 ' />
                    </div>



                  </div>
                </div>

                {/* Modal footer */}
                <div className="bg-gray-200 p-2 w-full flex justify-end">
                  <button onClick={handleReset} className='bg-black rounded text-white py-2 px-3'>Reset</button>
                  <button onClick={handleAddJob} className='ms-3 bg-blue-600 rounded text-white py-2 px-3'>Add</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      }

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

export default AddJob