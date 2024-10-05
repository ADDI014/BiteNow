
import React from 'react';
import Map from "./MapBox";


class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

   componentDidMount(){
    // console.log("Parent Component Did Mount");
   }

    render(){
        // console.log("Parent Render");
        return (
        <div>
      <div className="relative ">
  <img
    className="object-cover h-96 w-full"
    src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Descriptive Alt Text"
  />

  <div className="absolute inset-0 flex justify-center items-center">
    <h1 className="text-white text-8xl font-bold">About Us</h1>
  </div>
</div>



        <div className="flex flex-col items-center m-16">
  <h1 className="text-4xl font-bold mb-8">Introduction</h1>
  {/* <img src="src/assets/flower-decor-2.jpg" alt="Flower decoration" className="mb-6" /> */}
  <p className="text-xl text-center px-4">
    Welcome to BiteNow – a seamless online food ordering experience designed for your convenience. Whether you're craving a quick bite or planning a feast, our platform connects you with a wide variety of restaurants offering delicious options. With an intuitive interface, secure payment system, and real-time tracking, ordering your favorite meal has never been easier. Enjoy fast delivery, exclusive deals, and a user-friendly platform built for your satisfaction. Taste the convenience today with BiteNow!
  </p>

  <h1 className="text-2xl mt-6 font-bold">- Ankit Sharma</h1>
<p className="mt-2 text-xl text-red-400">Founder - CEO</p>
</div>
<div className="grid grid-cols-2 gap-4 mx-20">
  <div className="relative group w-full">
    <img
      src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Delicious food"
      className="object-cover w-full h-96 rounded-lg transition-opacity duration-500 group-hover:opacity-0"
    />
    <img
      src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Another delicious food"
      className="absolute inset-0 object-cover w-full h-96 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />
  </div>

  <div className="relative group w-full">
    <img
      src="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
      alt="Tasty dish"
      className="object-cover w-full h-96 rounded-lg transition-opacity duration-500 group-hover:opacity-0"
    />
    <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      alt="Another tasty dish"
      className="absolute inset-0 object-cover w-full h-96 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />
  </div>
</div>



<div className="mt-16 bg-black p-8 flex flex-col items-center">
   <h1 className="text-4xl font-bold text-white border border-orange-400 p-4">Begin Here</h1>

   <div className="relative w-full  h-screen"> 

    <div className="bg-yellow-600 h-full w-0.5 absolute left-1/2"></div>
    
    <div className="flex items-center justify-start">
      {/* <div className="w-1/2 flex items-center justify-end">
      <div className="bg-yellow-600 h-48 w-0.5"></div>
      </div> */}

      <div className="w-1/3 mt-20 ml-48 p-4 bg-gray-700 rounded-lg shadow-md flex items-center">
      <img src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-48 h-48 rounded-3xl object-cover"/>
      <div className="ml-10">
        <h2 className="text-xl font-semibold text-yellow-600">Origin</h2>
        <p className="text-white">We started with a vision to deliver tasty meals to everyone’s doorstep.</p>
      </div>
    </div>
    </div>

    <div className="flex items-center justify-end">
      {/* <div className="w-1/2 flex items-center justify-end">
      <div className="bg-yellow-600 h-48 w-0.5"></div>
      </div> */}

      <div className="w-1/3 mr-48 p-4 bg-gray-700 rounded-lg shadow-md flex items-center">
      <img src="https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-48 h-48 rounded-3xl object-cover"/>
      <div className="ml-10">
        <h2 className="text-xl font-semibold text-yellow-600">Growth</h2>
        <p className="text-white">Expanding our reach and bringing more restaurant options to our users.</p>
      </div>
    </div>
    </div>

    <div className="flex items-center justify-start">
      <div className="w-1/3 ml-48 p-4 bg-gray-700 rounded-lg shadow-md flex items-center">
      <img src="https://images.pexels.com/photos/3727207/pexels-photo-3727207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-48 h-48 rounded-3xl object-cover"/>
      <div className="ml-10">
        <h2 className="text-xl font-semibold text-yellow-600">Future</h2>
        <p className="text-white">Innovating for a brighter tomorrow in food delivery with new technology.</p>
      </div>
    </div>
    </div>
   </div>
</div>

<div className="bg-black py-16">
  <h2 className="text-center text-5xl font-bold text-yellow-400 mb-12">Our Achievements</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <img src="https://media.gettyimages.com/id/1500127574/photo/valencia-valencian-community-spain-the-award-winners-during-the-gala-the-worlds-50-best.jpg?s=612x612&w=0&k=20&c=iFZra8zrCRFgdNCNEt7N5iWXNg4U5NiuoTYQ4zz_CrI=" alt="Best Food Delivery Award" className="w-48 h-48 mx-auto mb-4 object-cover"/>
      <h3 className="text-2xl text-yellow-300 font-semibold mb-2">Best Food Delivery Award</h3>
      <p className="text-gray-300">
      Awarded for the best food delivery service in 2023 by XYZ Organization.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer Satisfaction Excellence" className="w-48 h-48 mx-auto mb-4 object-cover"/>
      <h3 className="text-2xl text-yellow-300 font-semibold mb-2">Customer Satisfaction Excellence</h3>
      <p className="text-gray-300">
      Recognized for maintaining a 99% customer satisfaction rate in 2022.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <img src="https://plus.unsplash.com/premium_photo-1667516780597-d138d88d50ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5ub3ZhdGlvbiUyMGluJTIwZm9vZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D" alt="Customer Satisfaction Excellence" className="w-48 h-48 mx-auto mb-4 object-cover"/>
      <h3 className="text-2xl text-yellow-300 font-semibold mb-2">Innovation in Food Tech</h3>
      <p className="text-gray-300">
      Honored for creating innovative technology in the food delivery space.
      </p>
    </div>
  </div>
</div>
<div className="relative mt-10">
  <img
    src="https://images.unsplash.com/photo-1436564989038-18b9958df72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Success Story" 
    className="h-96 w-full object-cover"
  />
  <div className="absolute text-center top-28 left-0 right-0">
    <h2 className="font-bold text-6xl text-white">Hard Work Brings Us Here!</h2>
    <p className=" text-3xl mt-4 text-yellow-400">Our Success Story</p>
  </div>
</div>

<Map/>





                {/* <div>
                    Logged In User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => {
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        }}
                    </UserContext.Consumer>
                </div>
                <h2>This is ankit from muzaffarpur bihar</h2>
                <UserClass name={"First"} location={"purushottampur"}/>       */}
            </div>
        );

    }
}



export default About;

