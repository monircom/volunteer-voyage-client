import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerNeedsNow = () => {
const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/posts`)
      setPosts(data)
    }
    getData()
  }, [])

    return (
        <div className=' container px-6 py-10 mx-auto'>
           <h1 className='text-2xl font-semibold text-center  capitalize lg:text-3xl '>
           Volunteer Needs Now
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
        Join hands, ignite hearts, make a difference today.
Serve with purpose, impact lives, be the change.
Volunteer passion, empower change, create tomorrow.
        </p>        
        
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
          {posts?.length > 6
    ? posts?.slice(0, 6)
        .map((post) => <PostCard key={post._id} post={post} />)
    : posts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}            
          </div>
          <div className='flex justify-center items-center my-5'>
              <Link className='w-[50%]' to={`/need-volunteer`}>  <button className="btn btn-primary w-full ">All Posts</button>  </Link>         
              </div>  

          
        
           
        </div>
    );
};

export default VolunteerNeedsNow;