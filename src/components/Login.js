import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import App from "../App";
import { useForm } from "react-hook-form";
import Image from "../assets/img/cool-bg.jpg";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="relative w-full h-screen bg-zinc-900/80">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={Image}
        alt="/"
      />
      <div className=" flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[400px] w-full mx-auto bg-violet-50 p-8"
        >
          <h2 className="text-4xl font-bold text-center py-8">
            <span className="text-violet-800 font-semibold">Log</span>in.
          </h2>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Username</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              {...register("username", { required: true })}
            />
            <error className="text-red-700">
              {errors.username?.type === "required" && "Username is required"}
            </error>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              {...register("password", { required: true })}
            />
            <error className="text-red-700">
              {errors.password?.type === "required" && "Password is required"}
            </error>
          </div>
          <button className=" w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
