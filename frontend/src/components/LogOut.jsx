import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const LogOut = () => {
  const [authUser,setAuthUser] = useAuth();

  function handleLogOut(){
      try {
          setAuthUser({
            ...authUser,
            user:null
           }
          )
            localStorage.removeItem("User");
            toast.success("You are Logged out")
            
          
            setTimeout(() => {
                window.location.reload();
            }, 1000);

      } catch (error) {
           toast.error(error.message)
           setTimeout(()=>{},2000)
      }
  }

  return (
    <>
      <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogOut} >
          Logout
        </button>
      </div>
    </>
  );
};

export default LogOut;
