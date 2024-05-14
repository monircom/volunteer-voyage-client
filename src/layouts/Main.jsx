import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react';

const Main = () => {

    const loc = useLocation();
    
    useEffect(()=>{

        if(loc.pathname === '/')
        {
            document.title = "Volunteer Voyage";
        }
        else{
        document.title = `${loc.pathname.replace("/", "").toUpperCase()}`;
        }

        if (loc.state)
        {
            document.title = `${loc.state.replace("/", "").toUpperCase()}`;
        }



        console.log(loc);
    },[loc.pathname]);


  return (
    <div>       
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main