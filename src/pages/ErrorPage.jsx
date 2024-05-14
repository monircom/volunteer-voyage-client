import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex-col flex justify-center items-center mt-96">
        <h1 className="text-3xl font-bold">Error Found</h1>    
        <Link to='/'><button className="btn bg-green-600 mt-3">Go Back To Home</button></Link>    
      </div>
            
            
        </div>
    );
};

export default ErrorPage;