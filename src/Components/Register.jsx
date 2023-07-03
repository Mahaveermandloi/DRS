import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Registration logic goes here
      // Assuming registration is successful, navigate to the login page
      window.location.href = '/login';
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    if (!profession) {
      errors.profession = 'Profession is required';
    }

    return errors;
  };

  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-center mt-10'>Register Now</h1>
        <div className='p-5 my-2'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='text-xl m-2'>
                Name
              </label>
              <br />
              <input
                type='text'
                id='name'
                placeholder='Enter name'
                className='bg-gray-200 m-2 w-4/5 sm:w-1/4 p-3 sm:p-4 rounded-md'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className='text-red-500 m-2'>{errors.name}</p>}
              <br />
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
              {errors.email && <p className='text-red-500 m-2'>{errors.email}</p>}
            </div>

            <div>
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
              {errors.password && <p className='text-red-500 m-2'>{errors.password}</p>}
            </div>

            <label htmlFor='profession' className='text-xl m-2'>
              Profession
            </label>
            <br />
            <select
              id='profession'
              className='m-2 bg-gray-200 w-4/5 sm:w-1/4 p-3 sm:p-4 rounded-md'
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value=''>None</option>
              <option value='Student'>Student</option>
              <option value='Working professional'>Working professional</option>
              <option value='Business'>Business</option>
            </select>
            {errors.profession && <p className='text-red-500 m-2'>{errors.profession}</p>}

            <br />

            <button className='m-2 bg-blue-500 p-3 rounded text-white font-semibold text-xl hover:bg-blue-600'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
