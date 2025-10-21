import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'

const Profile = () => {

  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imgUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
  })

  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  // const [token, setToken] = useState("")

  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     setToken(sessionStorage.getItem("token"))
  //   }
  // }, [])

  // console.log(bookDetails)

  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imgUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
    })
    setPreview("")
    setPreviewList([])

  }

  const handleUploadBookImage = (e) => {
    const newFile = e.target.files[0];
    const url = URL.createObjectURL(newFile)

    const fileArray = bookDetails.uploadImages
    fileArray.push(newFile)
    setBookDetails({ ...bookDetails, uploadImages: fileArray })
    setPreview(url)

    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)

  }

  const handleBookSubmit = async () => {
    const token = sessionStorage.getItem("token");
    console.log("Token being sent:", token);
    const { title, author, noOfPages, imgUrl, price, discountPrice, abstract, publisher, language, isbn, category, uploadImages } = bookDetails

    if (!title || !author || !noOfPages || !imgUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImages.length === 0) {
      toast.info("Please fill the form completely")
    }
    else {
      // api call

      const reqBody = new FormData()

      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key])
        }
        else {
          bookDetails.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }

      try {
        const result = await addBookAPI(reqBody, {
          Authorization: `Bearer ${token}`
        });

        if (result.status === 200) {
          toast.success("Book added successfully");
          handleReset();
        } else if (result.status === 401) {
          toast.warning(result.data || "Unauthorized");
          handleReset();
        } else {
          toast.error("Something went wrong");
          handleReset();
        }
      } catch (err) {
        console.log("Axios Error:", err.response);
      }

    }
  }
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div className="bg-white p-3 " style={{ width: '200px', height: '200px', borderRadius: '50%', marginTop: '-130px', marginLeft: '80px' }}>
        <img style={{ width: '180px', height: '180px', borderRadius: '50%' }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
      </div>

      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className='font-bold text-2xl'>Username</h1>
          <FontAwesomeIcon className='text-blue-400 ms-3 mt-1' icon={faCircleCheck} />
        </div>

        <div>Edit</div>
      </div>

      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus recusandae repellendus, inventore earum corporis animi suscipit maiores itaque illum harum ex quas et corrupti dolorem est? Ab, mollitia cumque?
        Assumenda consectetur ad dolore placeat iure quidem, expedita ullam neque voluptates exercitationem veritatis nam enim minus consequatur unde dolorem labore perspiciatis quod harum asperiores repudiandae dignissimos doloremque? Cum, odio reprehenderit.
      </p>

      <div className="md:px-40">
        <div className="flex justify-center items-center my-5">
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-2  border-gray-200 border-t border-l border-r rounded cursor-pointer ' : 'p-2 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>

        {/* contents */}
        {/* Sell books */}

        {sellBookStatus &&

          <div>
            <div className="p-10 my-20 mx-5 bg-gray-200">
              <h1 className='text-3xl font-medium text-center'>Book Details</h1>
              <div className="md:grid grid-cols-2 gap-x-5 mt-10 w-full">
                <div>

                  <div className='mb-3'>
                    <input value={bookDetails.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Title' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.noOfPages} onChange={(e) => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} type="text" placeholder='No of Pages' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className='mb-3'>
                    <input value={bookDetails.imgUrl} onChange={(e) => setBookDetails({ ...bookDetails, imgUrl: e.target.value })} type="text" placeholder='Image URL' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.price} onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.discountPrice} onChange={(e) => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <textarea value={bookDetails.abstract} onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" placeholder='Abstract' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' rows={5} />
                  </div>


                </div>

                <div>

                  <div className='mb-3'>
                    <input value={bookDetails.publisher} onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.language} onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.isbn} onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3'>
                    <input value={bookDetails.category} onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className='mb-3 mt-10 flex justify-center items-center'>
                    <label htmlFor='bookImage'>

                      <input onChange={e => handleUploadBookImage(e)} type="file" id='bookImage' className='hidden' />
                      {
                        !preview ?
                          <img width={'200px'} height={'200px'} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" alt="" /> :
                          <img width={'200px'} height={'200px'} src={preview} alt="bookImage" />
                      }
                    </label>
                  </div>

                  {preview &&
                    <div className=' flex justify-center items-center'>
                      {
                        previewList?.map(imgUrl => (
                          <img style={{ width: '70px', height: '70px', objectFit: 'cover' }} src={imgUrl} alt="bookImage" className='ms-3' />
                        ))
                      }
                      {
                        previewList.length < 3 &&
                        <label htmlFor='bookImage'>
                          <input onChange={e => handleUploadBookImage(e)} type="file" id='bookImage ' className='hidden' />
                          <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-400' />
                        </label>
                      }
                    </div>
                  }

                </div>

              </div>

              <div className=" p-2 w-full flex justify-end">
                <button onClick={handleReset} className='bg-black rounded text-white py-2 px-3 hover:bg-white hover:text-black'>Reset</button>
                <button onClick={handleBookSubmit} className='ms-3 bg-blue-600 rounded text-white py-2 px-3 hover:bg-white hover:text-blue-600'>Submit</button>
              </div>
            </div>
          </div>
        }


        {/* Book Status */}

        {
          bookStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to the book */}

            <div className="p-5 rounde mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className='text-2xl'>Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className='text-lg text-blue-500'>$ 300</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi perspiciatis sunt illo quam veniam facere quasi maxime deserunt numquam accusantium, consequuntur fuga atque quia vero fugiat nesciunt odio temporibus?</p>

                  <div className="flex">
                    <img width={'120px'} height={'100px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" />

                    <img width={'100px'} height={'100px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="" />
                  </div>


                </div>

                <div className="px-4 mt-4 md:mt-0">
                  <img height={'200px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" className='w-full' />


                  <div className='mt-4 flex justify-end'>
                    <button className='py-2 px-3 bg-red-500 text-white rounded'>Delete</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }


        {/* Purchase History */}

        {
          purchaseStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to the book */}

            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className='text-2xl'>Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className='text-lg text-blue-500'>$ 300</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi perspiciatis sunt illo quam veniam facere quasi maxime deserunt numquam accusantium, consequuntur fuga atque quia vero fugiat nesciunt odio temporibus?</p>

                  <div className="flex mt-5">
                    <img width={'100px'} height={'100px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" />


                  </div>


                </div>

                <div className="px-4 mt-4 md:mt-0">
                  <img height={'200px'} src="https://rukminim2.flixcart.com/image/480/640/jtsz3bk0/book/0/1/7/the-da-vinci-code-original-imaff2myzh34vpzy.jpeg?q=90" alt="" className='w-full' />

                </div>
              </div>
            </div>

          </div>

        }
      </div>


      <Footer />

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
    </>
  )
}

export default Profile