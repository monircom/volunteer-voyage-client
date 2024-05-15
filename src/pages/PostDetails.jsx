import { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import useAxiosSecure from '../hooks/useAxiosSecure'
import { AuthContext } from '../provider/AuthProvider'
const PostDetails = () => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  //const [startDate, setStartDate] = useState(new Date())
  const { user } = useContext(AuthContext)
  const post = useLoaderData()
  const [showModal, setShowModal] = useState(false);

  const {
    _id,
    thumbnail,
    post_title,
    description,
    category,   
    location,
    no_of_volunteers_needed,
    deadline, 
    organizer_email,
    organizer_name,   
  } = post || {}  

  const handleFormSubmission = async e => {
    setShowModal(false)
    e.preventDefault()
    if (user?.email === organizer_email)
      return toast.error('Action not permitted!')
    const form = e.target

    const postId = _id    
    const suggestion = form.suggestion.value
    //const deadline = startDate
    const email = user?.email
    const name = user?.displayName
    //const Organizer_email = Organizer?.email
    const status = 'Requested'

    const appliedData = {
      postId,      
      deadline,      
      post_title,
      description,
      category,
      email,
      name,      
      location,
      no_of_volunteers_needed,
      organizer_email,
      status,
      suggestion,      
      organizer_name,
    }

   // console.log(appliedData);
    //return;
    try {
      const { data } = await axiosSecure.post(`/applied`, appliedData)
      console.log(data)
      toast.success('Requested Successfully!')
      //navigate('/my-posts')
    } catch (err) {
      toast.success(err.response.data)
      e.target.reset()
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1  px-4 py-7  rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light  '>
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold  '>
            {post_title}
          </h1>

          <p className='mt-2 text-lg  '>{description}</p>
          <p className='mt-6 text-sm font-bold  '>
            Organizer Details:
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm   '>
                Name: {organizer_name}
              </p>
              <p className='mt-2 text-sm   '>
                Email: {organizer_email}
              </p>
            </div>
            
          </div>
          <p className='mt-6 text-lg font-bold  '>
            No of Volunteer Needed: {no_of_volunteers_needed}
          </p>
         

        <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Be A Volunteer
      </button>
     
              
        </div>
      </div>
      {/* Place A Bid Form */}
       {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Be a Volunteer
                  </h3>   
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    X
                    
                  </button>               
                </div>
                {/*body*/}


      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>       
        <form onSubmit={handleFormSubmission}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='thumbnail'>
              Thumbnail
              </label>
              <input
                id='thumbnail'
                type='text'
                name='thumbnail'
                disabled
                defaultValue={thumbnail}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='post_title'>
              Post Title
              </label>
              <input
                id='post_title'
                type='text'
                name='post_title'
                disabled
                defaultValue={post_title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='description'>
              Description
              </label>
              <input
                id='description'
                type='text'
                name='description'
                disabled
                defaultValue={description}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='category'>
              Category
              </label>
              <input
                id='category'
                type='text'
                name='category'
                disabled
                defaultValue={category}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='location'>
              Location
              </label>
              <input
                id='location'
                type='text'
                name='location'
                disabled
                defaultValue={location}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>


            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='no_of_volunteers_needed'>
              Volunteers Needed
              </label>
              <input
                id='no_of_volunteers_needed'
                type='email'
                name='no_of_volunteers_needed'
                disabled
                defaultValue={no_of_volunteers_needed}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700' htmlFor='deadline'>
                Deadline</label>
              <input
                id='deadline'
                type='text'
                name='deadline'
                disabled
                defaultValue={deadline}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />


              {/* Date Picker Input Field */}
              {/* <DatePicker
                className='border p-2 rounded-md bg-white'
                selected={startDate}
                disabled
                onChange={date => setStartDate(date)}
              /> */}
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='suggestion'>
              Suggestion
              </label>
              <input
                id='suggestion'
                name='suggestion'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    
                  >
                    Request
                  </button>
                </div>

          <div className='flex justify-end mt-6'>
            
            
          </div>
        </form>        
      </section>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
     
    </div>
  )
}

export default PostDetails
