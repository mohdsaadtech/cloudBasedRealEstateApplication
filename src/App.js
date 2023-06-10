import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyContextProvider from "./components/MyContextProvider";
// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import HouseList from "./components/House";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addlisting from "./components/Addlisting";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Contact from "./components/ContactComponent/Contact";
import Dashboard from "./components/Dashboard";
import emailjs from "@emailjs/browser";
function App() {
  const [data, setData] = useState([]);

  return (
    <MyContextProvider>
      <div className="max-w-[2600px] mx-auto bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/list" element={<HouseList />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Addlisting" element={<Addlisting />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </MyContextProvider>
  );
}

export default App;
