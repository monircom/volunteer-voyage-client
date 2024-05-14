/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  const {
    _id,
    Thumbnail,
    Post_Title,
    Description,
    Category,   
    Location,
    No_of_volunteers_needed,
    Deadline,    
  } = post || {}



  return (
    
    <div>        
    <div className="card w-full  h-full bg-base-100 shadow-xl border-2 rounded-md hover:scale-[1.05] transition-all">
          <figure className="rounded-xl bg-gray-300 m-5">
            <img src={Thumbnail} alt="Spot" className="w-[100%] h-full rounded-xl" />
          </figure>
          
          <div className="card-body text-left">
            <h2 className="card-title font-playfair-display text-2xl">{Post_Title}</h2>                
            <p className="">Category: {Category} $</p> 
            <p className="">VDeadline {Deadline}</p>   
           
            <hr className="my-6 border-t-2 border-dashed"></hr>     
            <div className="">
              <div>
              <Link to={`/post/${_id}`} state={Post_Title}>  <button className="btn btn-primary w-full">View Details</button>  </Link>         
              </div>           
          </div>
          </div>          
        </div>        
      </div>
    
  )
}

export default PostCard