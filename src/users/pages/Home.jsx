import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <>
      <Header />
      {/* Landing */}

      <div className='text-white w-full flex flex-col h-155 justify-center items-center bg-[url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwyNTE2NnwwfDF8c2VhcmNofDM0fHxib29rc3xlbnwwfHx8fDE2ODI1MDIxMjQ&ixlib=rb-4.0.3&q=85&w=2160)] bg-cover bg-center'>
        <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
        <p>Give your family and friend a book.</p>

        <div className='my-3'>
          <input type="text" className='bg-white px-4 py-3 rounded-full placeholder-gray-400 w-100 font-semibold' placeholder='Search book' />
          <FontAwesomeIcon style={{marginLeft:'-40px'}} className='text-gray-400 z-5 cursor-pointer' icon={faMagnifyingGlass}/>
        </div>
        

      </div>

      {/* New arrivals */}
      <div className='md:px-40 px-10 flex justify-center items-center flex-col my-15'>
        <h2 className='text-3xl font-bold'>New Arrivals</h2>
        <p>Explore our latest collections</p>

        <div className='grid md:grid-cols-4 grid-cols-1   gap-10 my-10 w-full'>

          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
          <div className='shadow rounded p-3'>
            <img width={'100%'} height={'400px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" />
            <div className='flex justify-center items-center flex-col  my-5'>
              <h3 className='text-blue-500 font-bold'>Dan Brown</h3>
              <p>The Da Vinci Code</p>
              <h5>$18</h5>
            </div>

          </div>
        </div>

        <Link to={'/all-books'}><button className='px-3 py-2 bg-blue-900 text-white'>Explore More</button></Link>

      </div>

      {/* Featured authors */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 text-center my-10 md:px-40 px-10 '>
        <div className='p-3  font-bold flex justify-center items-center flex-col'>
          <h4 >FEATURED AUTHORS</h4>
          <h3 className='text-xl '>Captivates with every word</h3>

          <p className='text-justify my-5'>   Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.</p>

          <p className='md:flex hidden text-justify '>
            Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.
          </p>
        </div>

        <div className='md:p-10 p-2 flex justify-center items-center'>
          <img src="https://blogposdigital.mackenzie.br/wp-content/uploads/2025/03/experiencia-pos-graduacao.jpg" className='h-50 w-full md:h-100' alt="" />
        </div>

      </div>

      {/* Testimonial */}

      <div className='md:px-40 px-10 flex justify-center items-center flex-col'>

        <h2 className='text-2xl font-bold'>TESTIMONIALS</h2>
        <p className='text-3xl'>See what others say</p>
        <div className="my-5 flex justify-center items-center flex-col">
          <img width={'100px'} height={'100px'} className='rounded-full object-cover' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" alt="user-image" />
          <h4>Olivia Stephen</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ea, autem dolores enim, cupiditate minus obcaecati odit voluptatum, totam maiores quibusdam. Modi dolorem magni nesciunt doloribus voluptatem temporibus deleniti sapiente!
          Doloremque molestiae est quaerat debitis vel laborum repudiandae, perferendis magnam porro, asperiores tenetur minima excepturi vero perspiciatis consequuntur, nulla cum. Culpa molestiae inventore minus corporis tempora, odit debitis quos similique.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home