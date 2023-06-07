import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Addlisting() {
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
  let handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setFailureMessage("");
    console.log("addlisting", title);
    console.log("addlisting", address);
    console.log("addlisting", description);
    console.log("addlisting", area_name);
    console.log("addlisting", rent);
    console.log("addlisting", area);
    console.log("addlisting", type);
    console.log("addlisting", bedroom_count);
    console.log("addlisting", bathroom_count);
    console.log("addlisting", user_id);
    console.log("addlisting", imageUrl);
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
        //setUser_id("64724d60aed0dca72ee0347d ");
        setSuccessMessage("Listing created successfully");
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
              className="border relative bg-gray-100 p-2"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
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
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Description</label>
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
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
