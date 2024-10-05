import React , {lazy, Suspense , useState, useEffect }from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import SignUpPage from './components/SignUp.js';
import CustomError from './components/CustomError.js';
import RestaurentMenu from './components/RestaurentMenu.js';
import Cart from "./components/Cart.js"
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import SignIn from './components/SignIn.js';

import ProtectedRoute from './components/ProtectedRoute.js';




// import Grocery from './components/Grocery.js';

const Grocery = lazy(() => import("./components/Grocery.js"));


const AppLayout = () => {

  const [userName , setUserName] = useState(null);  //manage logged-in user state 


  useEffect(() => {
    const storedUser = localStorage.getItem('username');   //manage logged in user state
    if(storedUser){
      setUserName(storedUser);    //set user if found in local storage
    }
  },[]);

  return (

    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path: "/",
        element : <ProtectedRoute><Body /></ProtectedRoute>,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path : "/contact",
        element : <Contact /> 
      },
      {
        path: "/grocery",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<h1>Loading</h1>}>
              <Grocery />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path : "/restaurent/:resId",
        element : <RestaurentMenu/>
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path :"/signup",
        element : <SignUpPage/>
      },
      {
        path : "/login",
        element : <SignIn/>
      }
    ],
    errorElement: <CustomError />
  },
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);


