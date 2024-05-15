import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../providers/AuthProvider'

const UpdatePost = () => {
  const navigate = useNavigate()
  const post = useLoaderData()
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

  
  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date())

  const handleUpdatePost = async e => {
    e.preventDefault()
    const form = e.target
    const thumbnail = form.thumbnail.value
    const post_title = form.post_title.value
    const description = form.description.value
    const category = form.category.value
    const location = form.location.value
    const no_of_volunteers_needed = parseInt(form.no_of_volunteers_needed.value)
    const deadline = startDate
    

    const postData = {
      thumbnail,
    post_title, 
    description, 
    category, 
    location, 
    no_of_volunteers_needed, 
    deadline, 
    organizer_email, 
    organizer_name,
    }

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/post/${_id}`,
        postData
      )
      console.log(data)
      toast.success('Post Data Updated Successfully!')
      navigate('/my-list')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div >
      
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Update Post</h1>        
      </div>

        <form onSubmit={handleUpdatePost}>
        <div className="md:max-w-[80%] mx-auto">
          <div className="flex">
            <div className="form-control w-full mx-6">
              <label className="label">
                <span className="label-text text-2xl">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="thumbnail"
                  defaultValue={post?.thumbnail}
                  placeholder="Image URL"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* row */}

          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Post Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="post_title"
                  defaultValue={post?.post_title}
                  required
                  placeholder="Post Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Description</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="description"
                  defaultValue={post?.description}
                  placeholder="short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>


            {/* row */}
          <div className="flex flex-col md:flex-row ">          
            
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Category</span>
              </label>
              <label className="input-group">
                <select name="category" defaultValue={post?.category} className="select select-primary w-full md:max-w-sm">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Social service</option>
                  <option>Animal welfare</option>
                  <option>Environment</option>
                  <option>Senior care</option>
                  <option>Community development</option>
                </select>
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  defaultValue={post?.location}
                  placeholder="Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

           {/* row */}
           <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Volunteers needed</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="no_of_volunteers_needed"
                  defaultValue={post?.no_of_volunteers_needed}
                  placeholder="8"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Deadline</span>
              </label>
              <label className="input-group">
               {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md bg-white'
                selected={startDate}                
                onChange={date => setStartDate(date)}
              />
              </label>
            </div>
          </div>

            {/* row */}
          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}  
                  readOnly           
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">User Name</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="userName"
                  readOnly
                  defaultValue={user?.displayName}                  
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mx-6 mt-5 mb-10">
          <input type="submit" value="Update Post" className="btn btn-block font-bold text-2xl" />
          </div>
        </div>        
      </form>
      
    </div>
  )
}

export default UpdatePost
