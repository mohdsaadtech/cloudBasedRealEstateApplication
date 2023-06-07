import React from 'react';
import {
  BiBed,
  BiBath,
  BiArea,
  BiGame
} from 'react-icons/bi';
import { useState } from "react";

const Signup = ({
}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setFailureMessage("");
    try {
      let res = await fetch("http://localhost:5000/addUser", {
        method: "POST",
        headers: {"Accept":"application/x-www-form-urlencoded", 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          phone_no: mobileNumber,
          password: password,
          role: 'tenant'
        }),
      });
      let resJson = await res.json();
      console.log(JSON.stringify(resJson));
      if (res.status === 201) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setSuccessMessage("User created successfully");
      } else {
        setFailureMessage(resJson.message);
      }
    } catch (err) {
      setFailureMessage(err.message);
    }
  };
  
  return (
    <div className="relative w-full h-screen bg-zinc-900/80">
    <div className=" flex justify-center items-center h-full">
      <form className="max-w-[400px] w-full mx-auto bg-violet-50 p-8" onSubmit={handleSubmit}>
      {successMessage ? <div className='text-center'><p className="text-green-800 font-semibold text-2xl">{successMessage}</p></div> : null}
      {failureMessage ? <div className='text-center'><p className="text-red-800 font-semibold text-2xl">{failureMessage}</p></div> : null}
        <h2 className="text-4xl font-bold text-center py-8">
          <span className="text-violet-800 font-semibold">Sign</span>Up.
        </h2>
        <div className="flex flex-col mb-4">
          <label className="font-semibold">Enter name</label>
          <input className="border relative bg-gray-100 p-2" type="text" value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold">Enter email</label>
          <input className="border relative bg-gray-100 p-2" type="text" value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold">Enter Mobile Number</label>
          <input className="border relative bg-gray-100 p-2" type="text" value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}/>
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold">Create Password</label>
          <input className="border relative bg-gray-100 p-2" type="password" value={password}
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold">Confirm Password</label>
          <input className="border relative bg-gray-100 p-2" type="password" />
        </div>
        <button type="submit" className=" w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white">
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;
