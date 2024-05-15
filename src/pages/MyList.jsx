import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyList = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure()
  
  const [posts, setPosts] = useState([])
  const [applied, setApplied] = useState([])

  useEffect(() => {
    getData()    
  }, [user])

  const getData = async () => {
    const { data } = await axiosSecure(`/posts/${user?.email}`)
    setPosts(data)   
  }

  useEffect(() => {
    getAppliedData()    
  }, [user])

  const getAppliedData = async () => {
    const { data } = await axiosSecure(`/applied/${user?.email}`)
    setApplied(data)   
  }

  
  // const { user } = useAuth() || {};
 // const [item, setItem] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log("deleted");
              const remainingSpots = posts.filter((post) => post._id !== id);
              setPosts(remainingSpots);
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });
            }
          });
        
      }
    });
  };

  // console.log(user);
  // useEffect(() => {
  //   fetch(`https://b9a10-destination-unknown-server.vercel.app/my-list/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItem(data);
  //       console.log(data);
  //     });
  // }, [user]);

  return (
    <div className="pt-10 mx-auto">

    <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">My Need Volunteer Post</h1>        
      </div> 

      <div className="overflow-x-auto mb-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Volunteers Needed</th>
              <th>Deadline</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={post?.thumbnail} alt="Image" />
                    </div>
                  </div>
                </td>
                <td>{post?.post_title}</td>
                <td>{post?.no_of_volunteers_needed}</td>
                <td>{new Date(post?.deadline).toLocaleDateString()}</td>
                <td>
                  <Link to={`/update-post/${post?._id}`}>
                    <button className="btn mr-2 bg-green-600">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(post?._id)}
                    className="btn bg-red-700"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!posts.length && (
              <div className="w-full h-[100px] bg-[rgba(214,111,111,0.05)] rounded-xl flex justify-center items-center">
              <h1 className="text-2xl font-bold">No Data Available</h1>        
            </div>  
            )}

      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">My Requested Volunteer Post</h1>        
      </div>        

      <div className="overflow-x-auto mb-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Status</th>
              <th>Deadline</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>         
            {applied.map((post) => (
              <tr key={post._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={post?.thumbnail} alt="Image" />
                    </div>
                  </div>
                </td>
                <td>{post?.post_title}</td>
                <td>{post?.status}</td>
                <td>{new Date(post?.deadline).toLocaleDateString()}</td>
                <td>
                  
                  <button title="Cancel"
                    onClick={() => handleDelete(post?._id)}
                    className="btn bg-red-700"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!applied.length && (
              <div className="w-full h-[100px] bg-[rgba(214,111,111,0.05)] rounded-xl flex justify-center items-center">
              <h1 className="text-2xl font-bold">No Data Available</h1>        
            </div>  
            )}
      </div>

    </div>
  );
};

export default MyList;
