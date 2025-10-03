import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>

    <div className='bg-gray-700 w-full min-h-45 md:px-20 px-10'>
      <div className="md:grid grid-cols-3 gap-10 text-white py-10">
        <div>
           <h1 className='text-xl'>ABOUT US</h1>
           <p className='mt-5 text-justify text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur illo enim iure possimus molestiae. Exercitationem corrupti consequatur eveniet iusto voluptas tempore qui sunt magnam facere, quas, architecto necessitatibus assumenda facilis.</p>
        </div>

         <div>
           <h1 className='text-xl md:mt-0 mt-5'>NEWSLETTER</h1>
           <p className='md:mt-5 mt-3 text-justify'>Stay updated with our latest trend.</p>
           <input type="text" className='bg-white p-1 w-50 my-4 ' />
           <button className='bg-yellow-500 py-1 px-2'><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>

        <div>
           <h1 className='text-xl md:mt-0 mt-5'>FOLLOW US</h1>
           <p className='md:mt-5 my-3 text-justify'>Let us be social</p>
           <FontAwesomeIcon className='md:text-2xl' icon={faInstagram}/>
           <FontAwesomeIcon className='md:text-2xl' icon={faTwitter}/>
           <FontAwesomeIcon className='md:text-2xl' icon={faFacebook}/>
           <FontAwesomeIcon className='md:text-2xl' icon={faLinkedin}/>
          
        </div>
      </div>

    </div>

    <div className='bg-black text-white w-full p-5'>

      <h3 className='text-center'>Copyright © 2025 All rights reserved | This website is made with ❤️ by Adithya Bijimon </h3>

    </div>


    </>
  )
}

export default Footer