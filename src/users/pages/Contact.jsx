import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center flex-col md:px-40 my-10'>

        <h1 className='text-2xl font-semibold'>Contact</h1>
        <p className='my-5 md:text-center text-justify md:mx-0 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus tempora odit ipsam animi molestiae enim cupiditate a tempore nesciunt rerum recusandae maxime sapiente, laboriosam autem illo, eaque aspernatur beatae.
          Ipsa laboriosam, libero expedita aut quae quasi quas cumque illo illum eaque, ipsam fuga ea iste soluta est fugiat! Rem totam iste harum veniam consequatur et earum. Et, ipsa enim.</p>



      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 md:px-40">
        <div className='flex items-center justify-center'>
          <FontAwesomeIcon icon={faLocationDot} className='bg-gray-300 p-3 rounded-full' />
          <p className='ms-3'>123 Main streer,<br />cr 5634</p>
        </div>

        <div className='flex items-center justify-center'>
          <FontAwesomeIcon icon={faPhone} className='bg-gray-300 p-3 rounded-full' />
          <p className='ms-3'>+91 8767564535</p>
        </div>
        <div className='flex items-center justify-center'>
          <FontAwesomeIcon icon={faEnvelope} className='bg-gray-300 p-3 rounded-full' />
          <p className='ms-3'>luminar@gmail.com</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:px-40 my-10 flex ">

        <div className='md:p-20 p-10'>
          <div className=' bg-gray-300 h-80 rounded px-10'>
            <h2 className='text-center font-bold py-5'>Send a message</h2>
            <form action="">
              <input type="text" placeholder='Name' className='bg-white placeholder-gray-400 p-1 w-full rounded' />
              <input type="text" placeholder='Email ID' className='bg-white placeholder-gray-400 p-1 w-full rounded my-5' />
              <textarea name="" id="" placeholder='Message' className='bg-white placeholder-gray-400 p-1 w-full rounded' rows={3}></textarea>
              <button className='p-2 bg-black text-white my-3 w-full'>Send <FontAwesomeIcon icon={faPaperPlane} /></button>

            </form>

          </div>
        </div>

        <div className='flex items-center justify-center p-10'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113634!3d10.008813464705792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758706852988!5m2!1sen!2sin" width={"500"} height={"300"} style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>


      <Footer />

    </>
  )
}

export default Contact