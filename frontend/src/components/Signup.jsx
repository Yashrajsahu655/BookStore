import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data); // Check if this logs the form data correctly
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
                {...register("name", { required: true })}
              />
              {errors.email && <span className=" text-red-500">This field is required</span>}

              <label className="py-4">Email</label>
              <input
                className="pl-3 bg-sky-100 w-3/4 border border-black rounded-lg"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className=" text-red-500">This field is required</span>}

              <label className="py-4">Password</label>
              <input
                className="pl-3 bg-sky-100 w-3/4 border border-black rounded-lg"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.email && <span className=" text-red-500">This field is required</span>}

              <div className="py-4 flex justify-between w-full">
              <button type="submit" className="bg-black ml-2 text-white py-2 px-3 rounded-md  hover:bg-slate-500 duration-300 cursor-pointer">
                    Signup
                  </button>

                <p className="ml-10 md:ml-0 mr-10">
                  Already have an account ?{" "}
                  {/* Corrected the onClick handler */}
                  <button 
                    className="underline text-blue-400 cursor-pointer"
                    onClick={() => document.getElementById('my_modal_3').showModal()}
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

