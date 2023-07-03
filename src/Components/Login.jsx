import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    // Simulating login logic
    if (password === 'correctpassword') {
      // Redirect to home page or desired route
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div>
        <h1 className='text-center text-4xl font-semibold my-10'>Login</h1>
        <div className='mx-10'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='text-xl m-2'>
              Email
            </label>
            <br />
            <input
              type='text'
              id='email'
              placeholder='Enter email'
              className='bg-gray-200 m-2 w-4/5 sm:w-1/4 p-3 sm:p-4 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />


            <label htmlFor='password' className='text-xl m-2'>
              Password
            </label>
            <br />
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              className='bg-gray-200 m-2 w-4/5 sm:w-1/4 p-3 sm:p-4 rounded-md'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='text-red-500 m-2'>{error}</p>}

            <br />

            <button className='m-2 bg-blue-500 p-3 rounded text-white font-semibold text-xl hover:bg-blue-600'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;