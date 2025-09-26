import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const AdminSetting = () => {
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
              <input type="file" id='adminPic' className='hidden' />
              <label htmlFor="adminPic">
                <img width={'120px'} height={'120px'} className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_qFV8xAq4hSf0Tj_JCR6xRbZJpVBR3PXIQ&s" alt="admin-profile" />
                <FontAwesomeIcon style={{ marginLeft: '100px', marginTop: '-100px' }} icon={faPen} className='bg-yellow-400 p-1 text-white rounded' />

              </label>

              <div className="mb-3 w-full">
                <input type="text" placeholder='Username' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mb-3 w-full">
                <input type="text" placeholder='Password' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mb-3 w-full">
                <input type="text" placeholder='Confirm Password' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              </div>

              <div className="mY-3-3 w-full flex justify-evenly">
                <button className='bg-orange-600 px-3 py-2 text-white rounded'>RESET</button>
                <button className='rounded bg-green-900 text-white px-3 py-2 '>UPDATE</button>

              </div>



            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminSetting