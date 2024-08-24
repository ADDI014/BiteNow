import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import CustomError from './components/CustomError.js';
import RestaurentMenu from './components/RestaurentMenu.js';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path: "/",
        element : <Body/>
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
        path : "/restaurent/:resId",
        element : <RestaurentMenu/>
      }
    ],
    errorElement: <CustomError />
  },
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);


