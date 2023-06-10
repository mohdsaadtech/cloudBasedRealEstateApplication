import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLayoutEffect, useEffect, useContext } from "react";
import { Link, Redirect, useNavigate, Navigate, json } from "react-router-dom";
import MyContext from "../components/MyContext";
function Addlisting() {
  const { username, updateUsernameState } = useContext(MyContext);
  const history = useNavigate();
  const [usernamex, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [area_name, setArea_name] = useState("");
  const [rent, setRent] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [bedroom_count, setBedroom_count] = useState("");
  const [bathroom_count, setBathroom_count] = useState("");
  const [user_id, setUser_id] = useState("64724d60aed0dca72ee0347d");
  const [imageUrl, setImageUrl] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function logout() {
    localStorage.removeItem("token");
    await history("/login");
  }
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/isUserAuthenticated", {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("token")).token,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          data.isLoggedIn ? updateUsernameState(data.email) : navigate("/login")
        )
        .catch((err) => alert(err));
    } else if (token === null) {
      updateUsernameState(null);
      navigate("/login");
    }
  }, [navigate]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccessMessage("");
    setFailureMessage("");

    if (
      !title ||
      !address ||
      !description ||
      !area_name ||
      !rent ||
      !area ||
      !type ||
      !bedroom_count ||
      !bathroom_count ||
      !user_id ||
      !imageUrl
    ) {
      setFailureMessage("*Please fill in all the required fields.");
      return;
    }

    //   setSuccessMessage("");
    //   setFailureMessage("");
    //   console.log("addlisting", title);
    //   console.log("addlisting", address);
    //   console.log("addlisting", description);
    //   console.log("addlisting", area_name);
    //   console.log("addlisting", rent);
    //   console.log("addlisting", area);
    //   console.log("addlisting", type);
    //   console.log("addlisting", bedroom_count);
    //   console.log("addlisting", bathroom_count);
    //   console.log("addlisting", user_id);
    //   console.log("addlisting", imageUrl);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("area_name", area_name);
      formData.append("rent", rent);
      formData.append("area", area);
      formData.append("type", type);
      formData.append("bedroom_count", bedroom_count);
      formData.append("bathroom_count", bathroom_count);
      formData.append("user_id", user_id);
      formData.append("image_url", imageUrl);

      let result = await fetch("http://localhost:5000/addListing", {
        method: "POST",
        body: formData,
      });

      let resultJson = await result.json();
      if (result.status === 201) {
        setTitle("");
        setAddress("");
        setArea_name("");
        setRent("");
        setArea("");
        setType("");
        setBedroom_count("");
        setBathroom_count("");
        setDescription("");
        setUser_id("");
        setImageUrl("");
        //setUser_id("64724d60aed0dca72ee0347d ");
        setSuccessMessage("Listing created successfully");
        setSubmitted(false);
      } else {
        setFailureMessage(resultJson.message);
      }
    } catch (err) {
      setFailureMessage(err.message);
    }
  };

  return (
    <div className="relative w-full h-full bg-zinc-900/80">
      <div className=" flex justify-center items-center w-full  bg-violet-600">
        <form
          className="max-w-[800px] w-full mx-auto bg-violet-50 p-8 h-[vh-400] scrollbar scrollbar-thumb-red-500"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
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
            <span className="text-violet-800 font-semibold">Add</span>listings.
          </h2>

          <div className="flex flex-col mb-4">
            <label className="font-semibold">Title</label>
            <input
              className="border relative bg-white-100 p-2"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {submitted && !title && (
              <p className="text-red-800">*Please enter a Title.</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Address</label>
            <input
              className="border relative bg-white p-2"
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            {submitted && !address && (
              <p className="text-red-800">*Please enter a Address.</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Area Name</label>
            <input
              className="border relative bg-white p-2"
              type="text"
              value={area_name}
              placeholder="Area Name"
              onChange={(e) => setArea_name(e.target.value)}
            />
            {submitted && !area_name && (
              <p className="text-red-800">*Please enter a Area Name.</p>
            )}
          </div>
          <div className="grid w-1/5 mr-1">
            <label className="font-semibold">Rent</label>

            <input
              className="border relative bg-white p-2 "
              type="number"
              value={rent}
              placeholder="Rent ₹"
              onChange={(e) => setRent(e.target.value)}
            />
            {submitted && !rent && (
              <p className="text-red-800">*Please enter a Rent Amount.</p>
            )}
          </div>
          <div className="grid w-1/5 mr-1">
            <label className="font-semibold">Area</label>

            <input
              className="border relative bg-white p-2 "
              type="number"
              value={area}
              placeholder="Area in sqft"
              onChange={(e) => setArea(e.target.value)}
            />
            {submitted && !area && (
              <p className="text-red-800">*Please enter a Area.</p>
            )}
          </div>
          <div className="container">
            <label className="font-semibold">
              <input
                type="radio"
                value="House"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <span>House</span>
            </label>
            <label className="font-semibold">
              <input
                type="radio"
                value="Apartment"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <span>Apartment</span>
            </label>
            {submitted && !type && (
              <p className="text-red-800">*Please select a Type.</p>
            )}
          </div>
          <div className="grid w-1/5 mr-1">
            <label className="font-semibold">Bedrooms</label>
            <input
              className="border relative bg-white p-2"
              type="numeric"
              value={bedroom_count}
              placeholder="Bedrooms"
              onChange={(e) => setBedroom_count(e.target.value)}
            />
            {submitted && !bedroom_count && (
              <p className="text-red-800">*Please enter a no of Bedroom.</p>
            )}
          </div>
          <div className="grid w-1/5 mr-1">
            <label className="font-semibold">Bathrooms</label>
            <input
              className="border relative bg-white p-2"
              type="numeric"
              value={bathroom_count}
              placeholder="Bathrooms"
              onChange={(e) => setBathroom_count(e.target.value)}
            />
            {submitted && !bathroom_count && (
              <p className="text-red-800">*Please enter a no of Bathroom.</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Description</label>
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {submitted && !description && (
              <p className="text-red-800">*Please add a Description.</p>
            )}
          </div>
          <div className="grid mr-1">
            <label className="font-semibold image-upload">
              Select listing image
            </label>
            <input
              className="border relative bg-white p-2"
              type="file"
              accept=".png, .jpg, .jpeg"
              name="image_url"
              onChange={(e) => setImageUrl(e.target.files[0])}
            />
            {submitted && !imageUrl && (
              <p className="text-red-800">*Please add a Image.</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addlisting;
