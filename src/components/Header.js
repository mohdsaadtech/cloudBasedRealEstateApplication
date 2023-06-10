import React from "react";
import { RxDashboard } from "react-icons/rx";
import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { Link, Redirect, useNavigate, Navigate, json } from "react-router-dom";
import MyContext from "../components/MyContext";
// import logo
import Logo from "../assets/img/logo.svg";
const Header = () => {
  const history = useNavigate();
  const [usernamex, setUsername] = useState("");
  const { username, updateUsernameState } = useContext(MyContext);

  async function logout() {
    localStorage.removeItem("token");
    await history("/login");
  }

  //useEffect(() => {window.location.reload();}, []);

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
          data.isLoggedIn
            ? updateUsernameState(data)
            : updateUsernameState(null)
        )
        .catch((err) => alert(err));
    } else if (token === null) {
      updateUsernameState(null);
    }
  }, [username]);
  return (
    <header className="py-6  border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" float-left">
          <Link to="/" class="text-2xl py-25">
            <h2 className="bg-violet-600 text-white ">CloudRealEstate</h2>
          </Link>
        </div>
        {username ? (
          <div className=" float-left logout-parent">
            <h2 className="text-2xl font-bold text-center py-8  float-left">
              <span className="text-violet-800 font-semibold">
                Hello, {username.name} you are logged in
              </span>
            </h2>
            <div
              className="cursor-pointer mx-3 login-width bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              onClick={logout}
            >
              Logout
            </div>
          </div>
        ) : (
          <>
            <Link
              className="first-a bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
        <div className="flex items-center gap-6 ">
          <Link to="About"></Link>
          <Link to="Contact"></Link>
          {/* <Link to="Dashboard">
            <RxDashboard size={30} className="cursor-pointer" />
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
