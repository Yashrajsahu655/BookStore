import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-mxxf.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          toast.success("Login Successfully");
         
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 2000);
        }
       
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);

        setTimeout(()=>{},3000);
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Use button instead of Link for form submission */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg ">Login</h3>

              <div className="flex flex-col">
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
                  name="password"
                  autoComplete="on"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-500">This field is required</span>
                )}

                <div className="py-4 flex justify-between w-3/4 ">
                  
                    <button
                      type="submit"
                      className="bg-black ml-2 text-white  py-1 px-3 rounded-md  hover:bg-slate-500 duration-300 cursor-pointer"
                    >
                      Login
                    </button>
                

                  <p className="ml-10 md:ml-0">
                    Not registered ?{" "}
                    <Link to={"/signup"} className="underline text-blue-500">
                      Signup
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
