import React , {useState , useEffect }from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logout from "./Logout";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png' 
import { useSelector } from "react-redux";

const Header = () => {

  const [scrolling , setScrolling] = useState(false);
  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  if (!onlineStatus) return <h1>Something went wrong. Looks like you are offline</h1>;


  return (
    <div>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? 'bg-white shadow-md py-2' : 'bg-white py-3'}`}>
        <div className="container h-full mx-auto flex items-center px-4 justify-between">
           <div className="px-2 md:px-4 py-4">
            <Link to={"/"}>
            <img height={scrolling ? 50 : 70} width={scrolling ? 50 : 70} src={logo} ></img>
            </Link>
            {/* <p className='flex'>BiteNow</p> */}
           </div>


           {/* icons */}
           <div className='flex items-center gap-4 md:gap-7'>

            <div className='hidden md:flex items-center gap-3'>
           <div>
            Online Status: {onlineStatus ? "✅" : "⭕️"}
            </div>

           <div>
              <Link t0={"/"}>Home</Link>
            </div>
            <div>
              <Link to={"/about"}>About</Link>
            </div>
            <div>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <div>
              <Link to={"/grocery"}>Grocery</Link>
            </div>
            </div>
           <div className="flex items-center gap-2">
               <FaSearch/>
               <Link to={"/search"}><p>Search</p></Link>
            </div>

            <div className='text-2xl relative'>
              <Link to="/cart"><FaShoppingCart/></Link>
               <div className='bg-orange-500 text-white w-4 h-4 md:w-5 md:h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2 md:-top-2 md:-right-3'>
                  <p className='text-xs md:text-sm'>{cartItems.length}</p>
               </div>
            </div>

               {/* mobile Mene Toggle Button */}
           <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-3xl'>{isMenuOpen ? <HiX /> : <HiMenu />}</button>
           </div>

               {/* Login Button - Visible on Desktop */}
           <div className='hidden md:block'>
            <Link to={"/login"}><Logout/></Link>
           </div>
           </div>

        {/* Mobile menu - only visible when toggled */}
       {
        isMenuOpen && (
          <div className='fixed inset-0 top-[70px] bg-white flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden z-40'>
            <Link to={"/"} className='text-lg text-gray-700 hover:text-orange-500' onClick={toggleMenu}>Home</Link>
            <Link to={"/about"} className='text-lg text-gray-700 hover:text-orange-500' onClick={toggleMenu}>About</Link>
            <Link to={"/ccontact"} className='text-lg text-gray-700 hover:text-orange-500' onClick={toggleMenu}>Contact</Link>
            <Link to={"/grocery"} className='text-lg text-gray-700 hover:text-orange-500' onClick={toggleMenu}>Grocery</Link>
            <Link to={"/login"} className='px-4 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-500' onClick={toggleMenu}>Login</Link>
          </div>
        )
       } 
        </div>
      </header>
    </div>
  )
}

export default Header;
