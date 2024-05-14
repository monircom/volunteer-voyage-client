import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import toast, { Toaster } from "react-hot-toast";
import avater from "../assets/avatar.png";
import { Tooltip } from 'react-tooltip';
import { AuthContext } from "../provider/AuthProvider";

//import ThemeControllerBtn from "./ThemeControllerBtn";

const Navbar = () => {

  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if(localTheme){
      setTheme(localTheme);
      document.documentElement.setAttribute("data-theme", localTheme);
      console.log("first",localTheme);
    }
    }, []); 
  

  useEffect(() => {
    
    //const localTheme = localStorage.getItem('theme');
    //if(localTheme)
    //setTheme(localTheme);
    if(theme!=null){
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute("data-theme", localTheme);
    setTheme(localTheme)
    console.log(localTheme);
    }

  }, [theme]);

  const handleTheme = e => {
    console.log(e.target.checked);
    if(e.target.checked)
    {
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
    //setTheme(theme === "dark" ? "light" : "dark");
  };

  // const handleThemeT = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  function handleLogOut() {
    logOut()
      .then(() => {
        toast.error("User Logged out", {
          duration: 2000,
          position: "top-center",
        });
        setTimeout(function () {
          navigate("/");
        }, 2500);
        console.log("user Logged out successfully");
      })
      .catch((error) => console.error(error));
  }





  const navLinks = (
    <>
      <li data-tooltip-id="my-tooltip" data-tooltip-content="Home">
        <NavLink to="/"> Home</NavLink>
      </li>
      
      <li data-tooltip-id="my-tooltip" data-tooltip-content="All Tourists Spot">
        <NavLink to="/posts"> Need Volunteer</NavLink>
      </li>
      {/* <li><NavLink to="/login"> Login</NavLink></li>*/}
      {!user && (
        <li data-tooltip-id="my-tooltip" data-tooltip-content="Register">
          <NavLink to="/register"> Register</NavLink>
        </li>
      )}
      {user && (
        <>
          <li data-tooltip-id="my-tooltip" data-tooltip-content="Add Tourists Spot">
            <NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink>
          </li>
          <li>
             <details>
               <summary>
                 My Profile
               </summary>
               <ul className="p-2 bg-base-100 rounded-t-none z-50">
                 <li><a>Link 1</a></li>
                 <li><a>Link 2</a></li>
              </ul>
             </details>
           </li>
          <li data-tooltip-id="my-tooltip" data-tooltip-content="My List">
            <NavLink to="/my-list">My List</NavLink>
          </li>
          
          {/* <li>
            <NavLink to="/update"> Update Profile</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/profile"> Profile</NavLink>
          </li> */}
        </>
      )}

      {/* <li>
        <NavLink to="/about"> About</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar w-max-[80%] bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
           <img className='w-auto h-7' src={logo} alt='' />
           <span className='font-bold'>Volunteer Voyage</span>
         </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
      <label className="swap swap-rotate mr-2">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleTheme} type="checkbox" name="themechoice" className="theme-controller" value={theme} />  
  {/* sun icon */}
  
  <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
 
  <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
 
</label>

{/* <button onClick={handleThemeT}>
      {theme === "dark" ? (
        <svg
          className="swap-off fill-current w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
      ) : (
        <svg
          className="swap-on fill-current w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      )}
    </button> */}

        {/* <ThemeControllerBtn></ThemeControllerBtn> */}
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
             {/*  <Link to="/profile">
                <div className="tooltip tooltip-bottom z-[10]" data-tip={user?.displayName || "User Name Not Found"}>                  
                  <div                  
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user?.photoURL || avater} />
                  </div>
                </div>
                </div>
                </Link> */}
              
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user?.photoURL || avater} />
                  </div>
                </div>
                
              
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-300 rounded-box w-52 "
              >
                <li>
                  <span>{user?.displayName || "User Name Not Found"}</span>
                </li>
                <li><button onClick={handleLogOut} className="btn btn-sm">
              Log Out
            </button></li>
              </ul>
            
            </div> 
            {/* <button onClick={handleLogOut} className="btn btn-sm">
              Log Out
            </button> */}
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
      <Toaster />
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;





// import logo from '../assets/logo.png'
// import { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../provider/AuthProvider'
// import { Link, useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast'
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext)  
//   const [theme, setTheme] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const localTheme = localStorage.getItem('theme');
//     if(localTheme){
//       setTheme(localTheme);
//       document.documentElement.setAttribute("data-theme", localTheme);
//       console.log("first",localTheme);
//     }
//     }, []); 
  

//   useEffect(() => {
    
//     //const localTheme = localStorage.getItem('theme');
//     //if(localTheme)
//     //setTheme(localTheme);
//     if(theme!=null){
//     localStorage.setItem('theme',theme);
//     const localTheme = localStorage.getItem('theme');
//     document.documentElement.setAttribute("data-theme", localTheme);
//     setTheme(localTheme)
//     console.log(localTheme);
//     }

//   }, [theme]);

//   const handleTheme = e => {
//     console.log(e.target.checked);
//     if(e.target.checked)
//     {
//       setTheme("dark")
//     }
//     else{
//       setTheme("light")
//     }
//     //setTheme(theme === "dark" ? "light" : "dark");
//   };

//   function handleLogOut() {
//     logOut()
//       .then(() => {
//         toast.error("User Logged out", {
//           duration: 2000,
//           position: "top-center",
//         });
//         setTimeout(function () {
//           navigate("/");
//         }, 2500);
//         console.log("user Logged out successfully");
//       })
//       .catch((error) => console.error(error));
//   }


//   return (
//     <div className='navbar bg-base-200 shadow-sm container px-4 mx-auto'>
//       <div className='flex-1'>
//         <Link to='/' className='flex gap-2 items-center'>
//           <img className='w-auto h-7' src={logo} alt='' />
//           <span className='font-bold'>Volunteer Voyage</span>
//         </Link>
//       </div>
//       <div className='flex-none'>
//         <ul className='menu menu-horizontal px-1'>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/jobs'>Need Volunteer</Link>
//           </li>
//           {user && (
//             <li>
//             <details>
//               <summary>
//                 My Profile
//               </summary>
//               <ul className="p-2 bg-base-100 rounded-t-none z-50">
//                 <li><a>Link 1</a></li>
//                 <li><a>Link 2</a></li>
//               </ul>
//             </details>
//           </li>

            
//           )}

//           {!user && (
//             <li>
//               <Link to='/login'>Login</Link>
//             </li>
//           )}
//         </ul>        

//         {user && (
//           <div className='dropdown dropdown-end z-50'>
//             <div
//               tabIndex={0}
//               role='button'
//               className='btn btn-ghost btn-circle avatar'
//             >
//               <div title={user?.displayName} className='w-10 rounded-full'>
//                 <img
//                   referrerPolicy='no-referrer'
//                   alt='User Profile Photo'
//                   src={user?.photoURL}
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//             >
//               <li>
//                 <Link to='/add-job' className='justify-between'>
//                   Add Job
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/my-posted-jobs'>My Posted Jobs</Link>
//               </li>
//               <li>
//                 <Link to='/my-bids'>My Bids</Link>
//               </li>
//               <li>
//                 <Link to='/bid-requests'>Bid Requests</Link>
//               </li>
//               <li className='mt-2'>
//                 <button
//                   onClick={handleLogOut}
//                   className='bg-gray-200 block text-center'
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}

// <label className="swap swap-rotate">
  
//   {/* this hidden checkbox controls the state */}
//   <input onChange={handleTheme} type="checkbox" name="themechoice" className="theme-controller" value={theme} />  
//   {/* sun icon */}
  
//   <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
//   {/* moon icon */}
 
//   <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
 
// </label>
//       </div>
//     </div>
//   )
// }

// export default Navbar
