import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  
   const [authUser,setAuthUser] = useAuth();
   const navigate = useNavigate(); 
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
  
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  
    await axios.post("https://bookstore-mxxf.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          console.log(res.data); // Check the response data
  
          toast.success("Signup Successfully");
          setAuthUser(res.data.user); // Update authUser state here
          console.log(authUser); // Check if authUser is updated
          navigate(from, { replace: true });
          localStorage.setItem("User", JSON.stringify(res.data.user));
          console.log(localStorage.getItem("User")); // Check localStorage after updating
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  
  

  return (
    <>
      <div>
        <div className="flex h-screen justify-center items-center">
          <div className="modal-box">
            {/* Removed method="dialog" from the form tag */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"}>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="flex flex-col">
                <label className="py-4">Name</label>
                <input
                  className="pl-3 bg-sky-100 w-3/4 border border-black rounded-lg"
                  type="text"
                  placeholder="Enter your fullname"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className=" text-red-500">This field is required</span>
                )}

                <label className="py-4">Email</label>
                <input
                  className="pl-3 bg-sky-100 w-3/4 border border-black rounded-lg"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-500">This field is required</span>
                )}

                <label className="py-4">Password</label>
                <input
                  className="pl-3 bg-sky-100 w-3/4 border border-black rounded-lg"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-500">This field is required</span>
                )}

                <div className="py-4 flex justify-between w-full">
                 
                    <button
                      type="submit"
                      className="bg-black ml-2 text-white px-3 py-1 rounded-md  hover:bg-slate-500 duration-300 cursor-pointer"
                    >
                      Signup
                    </button>
                

                  <p className="ml-10 md:ml-0 mr-10">
                    Already have an account ?{" "}
                    {/* Corrected the onClick handler */}
                    <button
                      className="underline text-blue-400 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    {/* Moved the <Login /> component outside the paragraph */}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Render the Login component outside the main div */}
      <Login />
    </>
  );
};

export default Signup;
