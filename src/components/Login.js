import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import App from "../App";
import Image from "../assets/img/cool-bg.jpg";
import { useLayoutEffect, useState, useContext } from "react";
import { Link, Redirect, useNavigate, Navigate } from "react-router-dom";
import MyContext from "../components/MyContext";

const Login = ({ login }) => {
  const { username, updateUsernameState } = useContext(MyContext);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value,
    };

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log("ldata ", data);
      localStorage.setItem("token", JSON.stringify(data));
      setErrorMessage(data.message);
    } catch (err) {
      setErrorMessage(err);
    }
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/isUserAuthenticated", {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("token")).token,
        },
      })
        .then((res) => res.json())
        .then((data) => (data.isLoggedIn ? history("/Addlisting") : null))
        .catch((err) => setErrorMessage(err));
    }
  }, [history]);

  return (
    <div className="relative w-full h-screen bg-zinc-900/80">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={Image}
        alt="/"
      />
      <div className=" flex justify-center items-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-violet-50 p-8"
          onSubmit={handleLogin}
        >
          <h2 className="text-4xl font-bold text-center py-8">
            <span className="text-violet-800 font-semibold">Log</span>in.
          </h2>
          {errorMessage === "success" ? (
            <Navigate to="/AddListing" />
          ) : (
            <div className="text-center">
              <p className="text-red-800 font-semibold text-2xl">
                {errorMessage}
              </p>
            </div>
          )}
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Username</label>
            <input
              className="border relative bg-gray-100 p-2"
              required
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              required
            />
          </div>
          <button className=" w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
