// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [responseMessage, setResponseMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/contact', formData);
//       setResponseMessage(response.data.msg);
//       // Clear form after submission
//       setFormData({ name: '', email: '', message: '' });
//     } catch (err) {
//       setResponseMessage('Error submitting the form. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-white text-lg font-semibold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-white text-lg font-semibold">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-white text-lg font-semibold">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                 rows="5"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>

//           {responseMessage && <p className="mt-4 text-yellow-300">{responseMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react'
import axios from 'axios';


const Contact = () => {
  

  const [formData , setFormData] = useState({
    name : '',
    email : '',
    message : '',
  });

  const [responseMessage, setResponseMessage] = useState('');



  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const response = await axios.post("http://localhost:5000/contact", formData);
       setResponseMessage(response.data.msg);
       setFormData({name :'' , email : '', message : ''});
    }
    catch(err){
      setResponseMessage('Error submitting the form. Please try again.');
    }

  }



  return (
    <div>
       <div className="relative">
           <img className="h-72 w-full object-cover"  src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact-Us"/>
           <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-8xl text-white font-bold">Contact Us</h1>
           </div>
       </div>

       <div className="mt-20 px-96 text-center">
  <h1 className="font-bold text-4xl">Get In Touch</h1>
  <p className="text-xl mt-10 leading-10 italic">
    We appreciate your interest in reaching out to us! Whether you have a question about our services, need assistance, or just want to share your thoughts, we’re here to listen. Your feedback is important to us, and we’re committed to providing you with the best possible experience.
  </p>
  
  <div className="mt-5">
    <p className="font-bold text-xl">FOLLOW US</p>
    <div className="flex justify-center space-x-4 m-5">
      <p><i className="fa-brands fa-facebook opacity-30 hover:opacity-100 cursor-pointer"></i></p>
      <p><i className="fa-brands fa-x-twitter opacity-30 hover:opacity-100	cursor-pointer"></i></p>
      <p><i className="fa-brands fa-google opacity-30 hover:opacity-100	cursor-pointer"></i></p>
    </div>
  </div>
</div>
    

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-10 text-center">
      <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <i class="fa-solid fa-location-dot text-4xl text-blue-600 mb-4"></i>
      <h2 className="font-bold text-2xl mb-4">Our Location</h2>
      <p>muzaffarpur, Bihar, 842002</p>
      </div>

      <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <i class="fa-solid fa-envelope text-4xl text-red-600 mb-4"></i>
      <h2 className="font-bold text-2xl mb-4">Mail Us</h2>
      <p>support@bitenow.com</p>
      </div>

      <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <i class="fa-solid fa-clock text-4xl text-green-600 mb-4"></i>
      <h2 className="font-bold text-2xl mb-4">Opening Hours</h2>
      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
      <p>Sat: 10:00 AM - 4:00 PM</p>
      </div>


      <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <i class="fa-solid fa-phone text-4xl text-yellow-600 mb-4"></i>
      <h2 className="font-bold text-2xl mb-4">Call Us</h2>
      <p>+91 9625661359</p>
      </div>
    </div>

 <div className="relative">
  <img
    className="h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[30rem] w-full object-cover"
    src="https://plus.unsplash.com/premium_photo-1666298863696-8e8da5d85f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="contact-us"
  />
  <div className="absolute inset-0 flex justify-center items-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center">
      Question and Support
    </h1>
  </div>
</div>


<div className="py-12">
  <div className="max-w-7xl mx-auto p-12 border border-gray-700">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlfor="name"  className="block text-lg font-semibold">Name</label>
        <input 
        id="name" 
        type="text" 
        placeholder="Your name" 
        className="w-full p-3 mt-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2" 
        required
        value={formData.name}
        onChange={handleChange}
        >
        </input>
      </div>
      <div>
        <label htmlfor="email" className="block text-lg font-semibold">Email</label>
        <input 
        type="text"
        id="email" 
        placeholder="Your email" 
        className="w-full p-3 mt-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2" 
        required
        value={formData.email}
        onChange={handleChange}
        >
        </input>
      </div>
      <div>
        <label htmlfor="message" className="block text-lg font-semibold">Message</label>
        <textarea 
        rows="5" 
        id="message"
        placeholder="Your message" 
        className="w-full p-3 mt-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2" 
        required
        value={formData.message}
        onChange={handleChange}
        >
        </textarea>
      </div>
      <button type="submit" className="w-full py-3 px-6 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition duration-300">Send Message</button>
    </form>
    {responseMessage && <p className="mt-4 text-green-700">{responseMessage}</p>}
  </div>
</div>

</div>
  );
};

export default Contact;
