import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
const AddPost = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date())
    //console.log(user);

    //displayName

    const handleAddPost = async event =>{
       
        event.preventDefault();
        const form = event.target;

        // "thumbnail": "https://i.ibb.co/kxTFdDm/9.jpg",
        // "post_title": "Medical Camp for Rural Communities",
        // "description": "Provide medical check-ups and basic healthcare services to rural communities.",
        // "category": "healthcare",
        // "location": "Rural village, Province X, Country Y",
        // "no_of_volunteers_needed": 10,
        // "deadline": "2024-06-15",
        // "organizer_name": "MD Moniruzzaman",
        // "organizer_email": "admin@volunteervoyage.com"

        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;    
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const no_of_volunteers_needed = form.no_of_volunteers_needed.value;
        const deadline = startDate;        
        const organizer_email = user?.email;
        const organizer_name = user?.displayName;

        const newPost = {thumbnail, post_title, description, category, location, no_of_volunteers_needed, deadline, organizer_email, organizer_name};
        console.log(newPost);


        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/post`,
              newPost
            )
            console.log(data)
            toast.success('Post Added Successfully!')
            navigate('/my-list')
          } catch (err) {
            console.log(err)
          }

        // fetch('https://b9a10-destination-unknown-server.vercel.app/tourist-spot',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newTouristSpot)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'Volunteer Post Added Successfully',
        //             icon: 'success',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //           setTimeout(function () {
        //             navigate("/my-list");
        //           }, 2500);
        //     }
        // })

    }
  return (
    <div> 
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Add Volunteer Post</h1>        
      </div>   
      <form onSubmit={handleAddPost}>
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
                <select name="category" className="select select-primary w-full md:max-w-sm">
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
          <input type="submit" value="Add Post" className="btn btn-block font-bold text-2xl" />
          </div>
        </div>        
      </form>
    </div>
  );
};

export default AddPost;
