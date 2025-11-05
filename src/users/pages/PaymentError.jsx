import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const PaymentError = () => {
    return (
        <>
            <Header />
            <div className="container my-20 flex ">

                <div className="md:grid grid-cols-2 px-20 justify-center items-center ">
                    <div>
                        <h1 className='md:text-2xl text-blue-600'>Sorry!Payment is unsuccessful</h1>
                        <p className="text-2xl my-4">
                            We apologize for the inconvenience caused.
                        </p>

                        <Link to={'/all-books'} className='bg-blue-800 px-4 py-3 text-white'><FontAwesomeIcon icon={faBackward} />Explore More Books</Link>
                    </div>
                    <div className="flex justify-center items-center  w-full">
                        <img className='img-fluid ' style={{width:'200px',height:'200px'}} src="https://assets-v2.lottiefiles.com/a/6a1f0bce-1178-11ee-a807-ebab7337127e/5rsPIZBogk.gif" alt="success" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentError