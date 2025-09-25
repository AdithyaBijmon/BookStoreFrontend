import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
      <img width={'500px'} src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="page not found" />
      <h6>Oh No!!</h6>
      <h1 className='text-5xl font-bold my-5 text-center'>Look Like You're Lost</h1>
      <p>The page you are looking for is not available</p>
      <Link to={'/'}><button className='px-3 py-2 bg-blue-900 text-white rounded my-5'>Back to Home</button></Link>

    </div>
  )
}

export default Pnf