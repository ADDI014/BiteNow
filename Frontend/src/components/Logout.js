import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
    <div>
      <button
        className="ml-4 px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
        onClick={handleAuthButton}
      >
         {btnName}
      </button>

      {/* Display Logged In Username */}
      {loggedInUser && (
        <span className="ml-4 text-gray-700 font-semibold">
          {loggedInUser}
        </span>
      )}
    </div>
  );
};

export default Logout;
