// MyContextProvider.js
import React, { useState } from "react";
import MyContext from "../components/MyContext";

const MyContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const updateUsernameState = (usernameValue) => {
    setUsername(usernameValue);
  };

  return (
    <MyContext.Provider value={{ username, updateUsernameState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
