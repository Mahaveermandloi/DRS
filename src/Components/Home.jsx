import React from 'react'
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <>
      <div className='my-10 sm:my-20'>
        <h1 className='text-xl sm:text-4xl font-bold text-center p-3 bg-green-400'>Welcome to Digital Recuritment System </h1>
        < p className='text-center text-2xl p-5'>
          Find your dream job today!
        </p>

        <div>
          <FeaturedJobs />
        </div>

      </div>


    </>
  )
}

export default Home