/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  const {
    _id,
    thumbnail,
    post_title,
    description,
    category,   
    location,
    no_of_volunteers_needed,
    deadline,    
  } = post || {}



  return (
    
    <div>        
    <div className="card w-full  h-full bg-base-100 shadow-xl border-2 rounded-md hover:scale-[1.05] transition-all">
          <figure className="rounded-xl bg-gray-300 m-5">
            <img src={thumbnail} alt="Post" className="w-[100%] h-full rounded-xl" />
          </figure>
          
          <div className="card-body text-left">
            <h2 className="card-title font-playfair-display text-2xl">{post_title}</h2>                
            <p className="">Category: {category}</p> 
            <p className="">Deadline: {new Date(deadline).toLocaleDateString()}</p>   
           
            <hr className="my-6 border-t-2 border-dashed"></hr>     
            <div className="">
              <div>
              <Link to={`/post/${_id}`} state={post_title}>  <button className="btn btn-primary w-full">View Details</button>  </Link>         
              </div>           
          </div>
          </div>          
        </div>        
      </div>
    
  )
}

export default PostCard