import React from "react";
import { BiBed, BiBath, BiArea, BiGame } from "react-icons/bi";
import { useState } from "react";

import { isEmail, isMobilePhone } from "validator";

const Signup = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccessMessage("");
    setFailureMessage("");

    if (!name || !email || !mobileNumber || !password) {
      setFailureMessage("Please fill in all the required fields.");
      return;
    }

    if (!isEmail(email)) {
      setFailureMessage("Please enter a valid email address.");
      return;
    }

    if (!isMobilePhone(mobileNumber)) {
      setFailureMessage("Please enter a valid mobile number.");
      return;
    }

    try {
      let res = await fetch("http://localhost:5000/addUser", {
        method: "POST",
        headers: {
          Accept: "application/x-www-form-urlencoded",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone_no: mobileNumber,
          password: password,
          role: "tenant",
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
        setSubmitted(false);
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
        <form
          className="max-w-[400px] w-full mx-auto bg-violet-50 p-8"
          onSubmit={handleSubmit}
        >
          {successMessage ? (
            <div className="text-center">
              <p className="text-green-800 font-semibold text-2xl">
                {successMessage}
              </p>
            </div>
          ) : null}
          {failureMessage ? (
            <div className="text-center">
              <p className="text-red-800 font-semibold text-2xl">
                {failureMessage}
              </p>
            </div>
          ) : null}
          <h2 className="text-4xl font-bold text-center py-8">
            <span className="text-violet-800 font-semibold">Sign</span>Up.
          </h2>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Enter name</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {submitted && !name && (
              <p className="text-red-800">Please enter your name.</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Enter email</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {submitted && !email && (
              <p className="text-red-800">Please enter your email address.</p>
            )}
            {email && !isEmail(email) && (
              <p className="text-red-800">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Enter Mobile Number</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              value={mobileNumber}
              placeholder="Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {submitted && !mobileNumber && (
              <p className="text-red-800">Please enter your mobile number.</p>
            )}
            {submitted && mobileNumber && !isMobilePhone(mobileNumber) && (
              <p className="text-red-800">
                Please enter a valid mobile number.
              </p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Create Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              value={password}
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {submitted && !password && (
              <p className="text-red-800">Please enter a password.</p>
            )}
          </div>
          <button
            type="submit"
            className=" w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
