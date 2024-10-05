import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-pink-100 shadow-lg mb-4">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img className="w-24" src={LOGO_URL} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li className="text-gray-700 hover:text-pink-500">
              Online Status: {onlineStatus ? "✅" : "⭕️"}
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-pink-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-pink-500 font-semibold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-pink-500 font-semibold"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-pink-500 font-semibold"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-pink-500 font-bold text-lg"
              >
                Cart ({cartItems.length})
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Login/Logout Button */}
          <button
            className="ml-4 px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>

          {/* Logged In User */}
          {loggedInUser && (
            <span className="ml-4 text-gray-700 font-semibold">
              {loggedInUser}
            </span>
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
