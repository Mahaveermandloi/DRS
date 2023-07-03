import React, { useState } from 'react';
import { category, jobs, location } from '../Components/JobList';

const FeaturedJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearch = () => {
    const filtered = jobs.filter((job) => {
      if (selectedCategory && selectedLocation) {
        return job.category === selectedCategory && job.location === selectedLocation;
      } else if (selectedCategory) {
        return job.category === selectedCategory;
      } else if (selectedLocation) {
        return job.location === selectedLocation;
      }
      return true;
    });

    setFilteredJobs(filtered);
    setShowAlert(filtered.length === 0);
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    const filtered = jobs.filter((job) => {
      const jobTitle = job.title.toLowerCase();
      const jobCategory = job.category.toLowerCase();
      const jobLocation = job.location.toLowerCase();
      const searchValue = event.target.value.toLowerCase();
      return (
        jobTitle.includes(searchValue) ||
        jobCategory.includes(searchValue) ||
        jobLocation.includes(searchValue)
      );
    });

    setFilteredJobs(filtered);
    setShowAlert(filtered.length === 0);
  };

  return (
    <>

      <div className='my-3 p-2 flex justify-center'>
        <input
          type='text'
          placeholder='Search by title, category, or location'
          className='sm:w-1/3  p-3 rounded-md bg-gray-300 text-black font-semibold text-xl'
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>

      <div className='my-3 p-2 flex  sm:flex-row flex-col bg-red-400 items-center  justify-center space-x-5'>
        <select
          name=''
          id=''
          className= 'w-64 my-5 sm:w-1/3 matrix p-3 rounded-md text-white font-semibold text-xl'
          onChange={handleCategoryChange}
        >
          <option value=''>Select Category</option>
          {category.map(({ id, category, value }) => (
            <option key={id} value={value}>
              {category}
            </option>
          ))}
        </select>

        <select
          name=''
          id=''
          className=' w-64 my-5 sm:w-1/3  matrix p-3 rounded-md text-white font-semibold text-xl'
          onChange={handleLocationChange}
        >
          <option value=''>Select Location</option>
          {location.map(({ id, address, value }) => (
            <option key={id} value={value}>
              {address}
            </option>
          ))}
        </select>

        <button
          className='matrix rounded-md text-white font-semibold text-xl  p-3 hover:bg-indigo-800'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>



      {showAlert && (
        <div className='flex justify-center text-red-600 font-semibold text-2xl'>
          No jobs found for the selected category and location.
        </div>
      )}

      <div className='flex flex-col sm:grid sm:grid-cols-3 p-10'>
        {(filteredJobs.length > 0 ? filteredJobs : jobs).map(({ id, title, application_deadline, location, src }) => (
          <div
            key={id}
            className='flex flex-col justify-center shadow-xl hover:shadow-2xl  bg-yellow-500 sm:mx-20 sm:m-10 p-2 my-3'
          >
            <img src={src} alt='img' className='h-52  rounded' />
            <div className='py-3'>
              <h1 className='font-bold text-xl '>{title}</h1>
              <p className='text-sm my-2 '>Deadline : {application_deadline}</p>
              <p className='text-sm'>Location : {location}</p>
            </div>
            <button className='bg-cyan-500 text-white p-2 hover:bg-blue-600 font-semibold rounded-md'>
              Know more
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedJobs;
