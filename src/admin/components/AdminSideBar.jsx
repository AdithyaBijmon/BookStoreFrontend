import { faBook, faGear, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



const AdminSideBar = () => {
    return (
        <div className='bg-blue-200  md:min-h-screen h-fit md:flex text-center flex-col py-10'>
            <div className='flex justify-center'> <img width={'120px'} height={'120px'} className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_qFV8xAq4hSf0Tj_JCR6xRbZJpVBR3PXIQ&s" alt="admin-profile" /></div>
            <h1 className="text-xl font-bold my-5">
                Admin name
            </h1>

            <div className='md:text-left mx-auto md:mt-10'>
                <div className='mt-3'>
                    <Link to={'/admin-dashboard'}><FontAwesomeIcon icon={faHouse} />Home</Link>
                </div>
                <div className='mt-3'>
                    <Link to={'/admin-resources'}><FontAwesomeIcon icon={faBook} />Resources</Link>
                </div>
                <div className='mt-3'>
                    <Link to={'/admin-careers'}><FontAwesomeIcon icon={faGraduationCap} />Careers</Link>
                </div>
                <div className='mt-3'>
                   <Link to={'/admin-settings'}> <FontAwesomeIcon icon={faGear} />Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminSideBar