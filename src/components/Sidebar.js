import React, { useState } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { TfiAlignRight } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLayoutEffect, useEffect, useContext } from "react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="absolute z-30 flex items-center
    cursor-pointer right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="#5f1bf3" viewBox="0 0 100 80" width="40" height="50">
            <TfiAlignRight size={80} className="cursor-pointer" />
          </svg>
        </button>
      ) : (
        <button
          class="text-xl text-black fixed top-3 right-3 z-30 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      )}
      <div
        className={`top-0 right-0 z-10 fixed   bg-gray-100  w-[20vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-100`}
      >
        <h2 className="text-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/40">
          CloudRealEstate
        </h2>
        <br />

        <div className="flex items-center rounded-md   hover:shadow-violet-600/30 shadow-lg backdrop-blur-[30px] bg-[#ffffff10] mt-6 px-4 py-2 ">
          <BsSearch
            className={`text-black text-lg block float-left cursor-pointer`}
          />

          <input
            type={"search"}
            placeholder="Search"
            className={`text-base px-2 bg-transparent w-full text-black focus:outline-none`}
          />
        </div>
        <br />

        <div className="mt-4 flex flex-col gap-7 relative text-center">
          <Link to={"/"}>
            <h2 className=" hover:shadow-violet-600/30 shadow-lg">Home</h2>
          </Link>
          <Link to={"/Addlisting"}>
            <h2 className=" hover:shadow-violet-600/30 shadow-lg">
              + Addlisting
            </h2>
          </Link>
          <Link to={"/Contact"}>
            <h2 className="  hover:shadow-violet-600/30 shadow-lg">
              Contact Us
            </h2>
          </Link>
          <Link to={"/About"}>
            <h2 className="  hover:shadow-violet-600/30 shadow-lg">About Us</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
