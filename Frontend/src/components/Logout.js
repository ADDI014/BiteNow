import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { LuUserCircle2 } from "react-icons/lu";

const Logout = () => {
  const [btnName, setBtnName] = useState("Login"); // Default to "Login"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      setIsLoggedIn(true);
      setUserName(username);
      setBtnName("Logout"); // Update to "Logout" if token exists
    }
  }, [setUserName]);

  const handleAuthButton = () => {
    if (isLoggedIn) {
      // Logout logic
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setUserName(null);
      setIsLoggedIn(false);
      setBtnName("Login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="hidden md:flex items-center gap-2">
      <button
        className='px-3 py-1 rounded-full text-white bg-orange-400 hover:bg-orange-500'
        onClick={handleAuthButton}
      >
         {btnName}
      </button>

      {/* Display Logged In Username */}
      {loggedInUser ? (
  <span className="flex ml-4 text-gray-700 font-semibold">
    {loggedInUser}
  </span>
) : (
  <LuUserCircle2 className="text-gray-700 text-2xl" />
)}
    </div>
  );
};

export default Logout;
