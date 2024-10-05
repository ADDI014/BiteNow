import React, { useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {setUserName} = useContext(UserContext);   //accsess context to set the logged in user

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      const {token , username} = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);  //save username in local storage
      setUserName(username); //update userContext with logged-in-user
      navigate('/');
    } catch (error) {
      setError('Sign-in failed. Check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 mt-4 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition-all">
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
